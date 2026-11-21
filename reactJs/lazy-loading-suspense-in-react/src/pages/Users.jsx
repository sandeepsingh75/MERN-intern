import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSkeleton from "../components/UserSkeleton";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("loading:",loading)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="users-container">
        {[1, 2, 3, 4, 5].map((item) => (
          <UserSkeleton key={item} />
        ))}
      </div>
    );
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="users-container">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;