import React, { useState } from "react";

const ControlledForm = () => {
    const [data, setData] = useState({
        email:"",
        password:""
    })

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(data)
    }

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setData({...data,[name]:value})
  };
  return (
    <div>
      <h1>Login Form</h1>
      <div>
        <label htmlFor="email" />
        <input name="email" type="email" placeholder="Enter email" onChange={onChangeHandler}/>
      </div>
      <div>
        <label htmlFor="password" />
        <input name="password" type="password" placeholder="Enter password" onChange={onChangeHandler}/>
      </div>
      <div>
        <input type="submit" value="submit" onClick={onSubmitHandler} />
      </div>
    </div>
  );
};

export default ControlledForm;
