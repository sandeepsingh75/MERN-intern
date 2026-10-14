import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user)
  };

  const onCangeHandler = (e) => {
    const {name, value} = e.target;
    setUser({...user,[name]:value})
  };
  // console.log("user:", user)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-linear-to-r/shorter from-indigo-500 to-teal-400">
      <div className="rounded-lg min-h-min max-w-max  bg-white p-9">
        <h2 className="text-2xl font-bold"> Register User</h2>
        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <div className="flex flex-col my-1">
            <label htmlFor="name" className=" font-bold">
              Name
            </label>
            <input
              name="name"
              placeholder="Enter the name"
              className="border p-1 font-bold rounded-lg"
              onChange={onCangeHandler}
              // onChange={(e)=>console.log(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="email" className=" font-bold">
              Email
            </label>
            <input
              name="email"
              placeholder="Enter the email"
              className="border p-1 font-bold rounded-lg"
              onChange={onCangeHandler}
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              name="password"
              placeholder="Enter the password"
              className="border p-1 font-bold rounded-lg"
              onChange={onCangeHandler}
            />
          </div>
          <div className="my-1">
            <input
              type="submit"
              value="submit"
              className="p-1 font-bold bg-blue-950 text-white w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
