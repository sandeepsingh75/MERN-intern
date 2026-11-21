import React from 'react'
import Navbar from './Navbar'
import {Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
    <nav>
      <Navbar />
    </nav>
    <main>
        <Outlet />
    </main>

    </div>
  )
}

export default MainLayout
