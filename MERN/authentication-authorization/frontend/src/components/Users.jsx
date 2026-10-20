import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/AxiosInstance";
import { Flex, Space, Statistic, Table, Tag } from 'antd';
// import {EditTwoTone} from "@ant-design/icons"
  


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const editUserHandler = (e)=>{
    console.log("e:", e)
  }

  const deleteUserHandler = async (record) =>{
    // e.preventDefault();
    console.log("record:",record)
    const response = await axiosInstance.delete(`/users/${record._id}`);
    console.log("delRes:",response)
  }

  const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },{
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => {
      return(
      <Space size="medium">
        <button onClick={()=>editUserHandler(record)}>Edit</button>
        <button onClick={deleteUserHandler}>Delete</button>
      </Space>
      )
    },
  },
];


  const getUsers = async () => {
    try {
      const response = await axiosInstance.get("/users");
      setUsers(response.data.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl ml-4"> Users List  </h2>
    
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}

      <Table columns={columns} dataSource={users} rowKey="_id" />
    </div>
  );
};
export default Users;
