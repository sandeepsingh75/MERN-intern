import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Principle from './pages/Principle'
import SubPrinciple from './pages/SubPrinciple'
import Teachers from './pages/Teachers'
import Students from './pages/Students'
import Login from './pages/Login'
import {Navigate} from "react-router-dom";
import Unauthorized from './pages/Unauthorized'
import ProtectedRoutes from './components/ProtectedRoutes'
import ProtectedRoute from '../../roleBasedRoutingNew/src/components/ProtectedRoute'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        // Public routes
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/login" />} />


        // Protected Reoutes
        <Route element={<ProtectedRoutes allowedRoles={['principle']} />}>
        <Route path='/principle' element={<Principle />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={['sub-principle','principle']} />}>
        <Route path='/sub-principle' element={<SubPrinciple />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={['teacher','sub-principle','principle']} />}>
        <Route path="/teacher" element={<Teachers />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={['student','teacher','sub-principle','principle']} />}>
        <Route path="/student" element={<Students />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
