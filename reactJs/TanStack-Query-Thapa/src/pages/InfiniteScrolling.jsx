import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const getUsers = async (page) => {
  const response = await axios.get(
    `http://api.github.com/users?per_page=10&page=${page}`,
  );
  return response.data;
};

const InfiniteScrolling = () => {
  const { data,isPending, isError, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({pageParam})=>getUsers(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // console.log("lastPage:",lastPage,"allPages:", allPages)
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  const handleScroll = () =>{
    const bottom =  window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
    console.log("bottom:",bottom, "hasNextPage:", hasNextPage)
    if(bottom && hasNextPage){
      // console.log("handle scroll called")
      fetchNextPage();
    }
  }
  
useEffect(()=>{
window.addEventListener("scroll", handleScroll)
return ()=> window.removeEventListener("scroll", handleScroll);
},[hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <div>
      <ul className="">
       {data?.pages?.map((page, index)=>(
        <React.Fragment key={index}>
          {page?.map((user)=>(
            <li key={user.id} className="bg-slate-500  w-screen my-2 p-3">
              <p className="text-slate-50 my-1" >{user.login}</p>
              <img src={user.avatar_url} alt={user.login} className="h-20 w-20" />
            </li>
          ))}

        </React.Fragment>
       ))}
      </ul>
    </div>
  );
};

export default InfiniteScrolling;
