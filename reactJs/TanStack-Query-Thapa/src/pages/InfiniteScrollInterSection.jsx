import React, { useEffect } from "react";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

const fetchUsers = async ({ pageParam }) => {
  const response = await axios.get(
    `https://dummyjson.com/users?limit=10&skip=${pageParam}`,
  );

  return response.data;
};

const InfiniteScroll = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialPageParam: 0,

    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;

      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending) {
    return <h2>Loading Users...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Infinite Scrolling Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.pages.map((page) =>
          page.users.map((user) => (
            <div key={user.id} className="border p-4 rounded-lg shadow">
              <img
                src={user.image}
                alt={user.firstName}
                width={70}
                height={70}
              />

              <h2 className="font-bold">
                {user.firstName} {user.lastName}
              </h2>

              <p>{user.email}</p>
            </div>
          )),
        )}
      </div>

      {/* Intersection Observer Element */}
      <div ref={ref} className="text-center p-5">
        {isFetchingNextPage && <h3>Loading More Users...</h3>}

        {!hasNextPage && <h3>No More Users Available</h3>}
      </div>
    </div>
  );
};

export default InfiniteScroll;
