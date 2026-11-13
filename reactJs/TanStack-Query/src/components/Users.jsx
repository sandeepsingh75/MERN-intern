import React from "react";
import { useMutation ,useQuery, keepPreviousData, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../main";

const fetchUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      return response.data;
    }


const Users = () => {
     const userId = 4;
//   const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
//     //Fetch all Users
//     queryKey: ["users"],        //All users list
//     queryFn: fetchUsers,
//     staleTime:6000,       // Kab tak data fresh rahega uske baad refetching ki jaroorat padegi.
//     gcTime:300000,           // Unsed data ko kitne time baad data se automatic delete kar dena hai.
//     // refetchOnWindowFocus:true,// jab user dusri window se apni application window me wapas aaye tab api call
//     // refetchOnReconnect:true,  //jab internet connection wapas connect hota hai tab stale query refetch
//     // refetchOnMount:true,     // jab component mont hoata hai tab api recall
//     // refetchInterval: 5000,   // ek fix time ke baad api reCall
//     retry:3,            //request fail hone per maximum 3 time api call
//     retry:false,     // koi try nahi
//     retryDelay: 1000,     // Retry ke beech suruaati delay 1 second
//     select:(data)=>{            // api me se specific data selection
//         return data.map((user)=>({
//             id:user.id,
//             name:user.name,
//             email:user.email,
//             phone:user.phone
//         }))
//     },
//   });

  const {data, isLoading, isError, error, isFetching} = useQuery({
    // Fetch Single User
    queryKey: ["user",userId],
    queryFn: async () =>{
      const response = await  axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      console.log("response:", response)
        return response.data;
    },
    staleTime:30000,
    gcTime:300000,
    enabled: !!userId,
     initialData: {
            id: 1,
            name: "Sandeep Singh",
            email: "sandeep@gmail.com",
            phone: "9876543210"
        },
    placeholderData:{
        id:1,
        name:"Name is loading...",
        email:"Email is loading..."
    },
    staleTime: 1000 * 60 * 5,
    // refetchInterval:100
    
    // placeholderData: keepPreviousData,     // pagination me jab user ek page se dusre page me jata hai jab tak next page ka data response me nahi aata tab tak previous page ka data display ho,

  });


  const mutation = useMutation({
    mutationFn: async (newUser) =>{
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
        return response.data;
    },
    onSuccess: (data)=>{
        console.log("User created", data);
        queryClient.invalidateQueries({
            queryKey: ["user"]
        })
    }
  })

  if (isLoading) return <h2 className=""> Loading...</h2>;

  if (isError) return <h2> {error.message} </h2>;

  console.log("data:", data);
  return (
    <div className="p-5">

          <button onClick={() => refetch()} className="bg-slate-400 font-bold rounded p-2">
        Refresh Users
      </button>

      {isFetching && <p>Fetching actual data...</p>}

      <h1 className="text-2xl font-bold pb-2">Users List </h1>
      <table className="">
        <thead>
          <tr className="bg-slate-500 my-1 p-2">
            <th className="">Id</th>
            <th className="">Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? data?.map((user) => (
            // <div className="space-y-5">
            <tr className="mt-10 bg-slate-300 gap-10" key={user.id}>
                 {isPlaceholderData && (
                        <p>Showing temporary data...</p>
                    )}
              <td> {user?.id} </td>
              <td> {user?.name} </td>
              <td> {user?.phone} </td>
              <td> {user?.email} </td>
              <td> {user?.website} </td>
              <td> {user?.city} </td>
              <td> {user?.address?.city} </td>
            </tr>
            // </div>
          )) :
          <tr className="mt-10 bg-slate-300 gap-10" key={data?.id}>
              <td> {data?.id} </td>
              <td> {data?.name} </td>
              <td> {data?.phone} </td>
              <td> {data?.email} </td>
              <td> {data?.website} </td>
              <td> {data?.city} </td>
              <td> {data?.address?.city} </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default Users;
