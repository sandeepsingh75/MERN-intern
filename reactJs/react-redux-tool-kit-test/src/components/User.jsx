
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";

const User = () => {

  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user.id} className="bg-slate-500 border boder-spacing-3 p-2 text-xl font-medium flex justify-around">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
