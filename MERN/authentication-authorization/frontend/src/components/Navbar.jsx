import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage?.getItem("accessToken");
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <div className="flex justify-between">
      <div className="title"></div>
      <div className="links"></div>
      <div className="p-2">
        {loggedIn ? (
          <span className="bg-blue-200 m-1 px-2 py-1 border rounded-2xl">
            Log out
          </span>
        ) : (
          <span className="bg-blue-200 m-1 px-2 py-1 border rounded-2xl">
            Login
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
