import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const fetchUsers = async (page, limit) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?_start=${page}&_limit=${limit}`,
  );
  return response.data;
};

const fetchUser = async (userId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  return response.data;
};

const deletePost = async (id)=>{
  const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
}
// Update Post
const updateUser = async (id) =>{
  const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {name:"Sandeep"});
  return response.data;
} 

const FetchRQ = () => {
  const [page, setPage] = useState(0);
  // const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(3);
  const [login, setLogin] = useState(false);
  const queryClient = useQueryClient();
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isSuccess,
    status,
    fetchStatus,
    refetch,
    isPlaceholderData
  } = useQuery({
    queryKey: ["users", page, limit],
    queryFn: () => fetchUsers(page,limit),
    // placeholderData:keepPreviousData,
    // staleTime:10000,
    // gcTime:300000,
    // refetchOnWindowFocus:true,
    // refetchOnReconnect:true
    // refetchOnMount:true,
    // refetchInterval:1000,
    // enabled: !!login,
    // retry:3,
    // retry:false,
    // retryDelay:1000,
    select: (data) => {
      // api me se specific data selection
      return data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      }));
    },
  });

// Mutation funtion to delete the post
const deleteMutation = useMutation({
  mutationFn: (id)=>deletePost(id),
  onSuccess: (data, id)=>{
    queryClient.setQueryData(["users", page, limit],(currElem)=>{
        return currElem?.filter((user) => user.id !== id)
      });
  },
  onError: (error)=>{
    alert("delete opertaion failed:" + error.message)
  }
})

const updateMutation = useMutation({
  mutationFn: (id)=>updateUser(id),
  onSuccess: (apiData, postId)=>{
    console.log("apidata:", apiData, "postId:", postId)
    queryClient.setQueryData(["users", page, limit],(userData)=>{
        return userData?.map((curUser)=>{
          return curUser.id === postId ? {...curUser, name: apiData.name} : curUser
        })
      });
  },
  onError: (error)=>{
    alert("update opertaion failed:" + error.message)
  }
})


  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <p>{error.message}</p>;


  const pageIncHandler = () => {
    setPage((prev)=>prev + limit);
  };

  const pageDecHandler = () => {
    setPage((prev)=>prev - limit);
  };

  return (
    <div>
      <button
        onClick={refetch}
        className="bg-blue-500 text-gray-50 p-2 rounded-full"
      >
        Refetch User Api
      </button>
      <button
        onClick={() => setLogin(!login)}
        className="text-gray-50 mx-2 bg-blue-500 p-2 rounded-full"
      >
        Login
      </button>
      {/* {isFetching && <p> Updating... </p>} */}
      <h1 className="font-bold">Users List:</h1>
      <table className=" border-separate border-spacing-y-1 table-auto text-gray-50">
        <thead>
          <tr className="bg-slate-600">
            <th className="p-2 w-1/4">Id</th>
            <th className="p-2 w-1/4">Name</th>
            {/* <th>User Name</th> */}
            <th className="p-2 w-1/4">Email</th>
            <th className="p-2 w-1/4">Phone</th>
            <th className="p-2 w-1/4">Actions</th>
            {/* <th>City</th> */}
          </tr>
        </thead>
        <tbody className="">
          {Array.isArray(data) ? (
            data.map((user) => (
              <tr key={user.id} className="p-2 my-5 bg-slate-500">
                <td className="p-2 ">{user?.id}</td>
                <td className="p-2 ">{user?.name}</td>
                <td className="p-2 ">{user?.email}</td>
                <td className="p-2 ">{user?.phone}</td>
                <td className="p-2 flex justify-center items-center top-auto">
                  <NavLink to={`/rq/${user.id}`}>View</NavLink>
                  <button onClick={()=> deleteMutation.mutate(user.id)} className="mx-2">{ deleteMutation.isPending ? "Deleting..." : "Delete" }</button>
                  <button onClick={()=> updateMutation.mutate(user.id)} className="mx-2">{ updateMutation.isPending ? "Updating..." : "Update" }</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>{data?.id}</td>
              <td>{data?.name}</td>
              <td>{data?.username}</td>
              <td>{data?.email}</td>
              <td>{data?.phone}</td>
              <td>{data?.address?.city}</td>
              <td>{data?.company?.name}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-between">
        <div className="flex my-3">
          <button
          id="pageDec"
            className="h-10 w-12 bg-green-400 mr-3 rounded-lg disabled:bg-green-300 disabled:text-slate-100 disabled:cursor-not-allowed"
            onClick={pageDecHandler}
            disabled={page <= 0 ? true : false}
          >
            Prev
          </button>
          <span className="my-auto">{(page/3)+1}</span>
          <button
          id="pageInc"
            className={`h-10 w-12 bg-green-400 ml-3 rounded-lg disabled:bg-green-300 disabled:text-slate-100 disabled:cursor-not-allowed`}
            onClick={pageIncHandler}
            disabled={data.length < limit ? true : false }
          >
            Next
          </button>
        </div>

        {/* Page Limit */}
        <div className="flex my-3">
          <button
            className="h-10 w-20 bg-green-400 mr-3 rounded-lg"
            onClick={()=>setLimit((prev)=>prev - 1)}
          >
            Limit Dec
          </button>
          <span className="my-auto">{limit}</span>
          <button
            className="h-10 w-20 bg-green-400 ml-3 rounded-lg"
            onClick={()=>setLimit((prev)=>prev + 1)}
          >
            Limit Inc
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchRQ;
