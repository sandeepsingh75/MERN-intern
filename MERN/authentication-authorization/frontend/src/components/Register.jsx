import React, { useState } from "react";
import InputField from "./InputField";
import { axiosInstance } from "../api/AxiosInstance";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate() 
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post("/users/create",user)
    if(response.data.success){
      console.log(response)
      alert("User created successfully");
      navigate("/login");

    }
  };

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setUser({...user,[name]:value})
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-linear-to-r/shorter from-indigo-500 to-teal-400">
      <div className="rounded-lg min-h-min max-w-max  bg-white p-9">
        <h2 className="text-2xl font-bold"> Register User</h2>

        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <div className="flex flex-col my-1">
            <label htmlFor="name" className=" font-bold">
              Name
            </label>
            <InputField
              name="name"
              type="text"
              placeholder="Enter the name"
              onChange={onChangeHandler}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="email" className=" font-bold">
              Email
            </label>
             <InputField
              name="email"
              type="email"
              placeholder="Enter the email"
              onChange={onChangeHandler}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <InputField
              name="password"
              type="password"
              placeholder="Enter the password"
              onChange={onChangeHandler}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="my-1">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
