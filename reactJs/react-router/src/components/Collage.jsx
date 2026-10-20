import React from "react";
import { NavLink } from "react-router-dom";

const Collage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-2xl">Collage Page</h1>
      <div className="sub-links">
        <NavLink to="/students" className="mx-5 font-bold text-lg">
          Student
        </NavLink>
        <NavLink to="/department" className="mx-5 font-bold text-lg">
          Department
        </NavLink>
        <NavLink to="/collage-details" className="mx-5 font-bold text-lg">
          Collage details
        </NavLink>
      </div>
    </div>
  );
};

export default Collage;
