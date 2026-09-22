import { useEffect, useState } from "react";
import api from "../api/api.jsx";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // console.log("user", Array.isArray(users));

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data.data);
      } catch (requestError) {
        setError(requestError.response?.data?.message || "Unable to load users");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
