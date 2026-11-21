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
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './components/MainLayout'

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout />,
    children:[
      {
        path:"*",
        element:<Login />
      },
      {
        path:"unauthorized",
        element:<Unauthorized />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        element:<ProtectedRoutes allowedRoles={['principle']} />,
        children:[
          {
            path:'/principle',
            element:<Principle />
          }
        ]
      },
      {
        element:<ProtectedRoutes allowedRoles={['sub-principle','principle']} />,
        children:[
          {
            path:'/principle',
            element:<Principle />
          },
          {
            path:"/sub-principle",
            element:<SubPrinciple />
          }
        ]
      },
      {
        element:<ProtectedRoutes allowedRoles={['teacher','sub-principle','principle']} />,
        children:[
          {
            path:'/principle',
            element:<Principle />
          },
          {
            path:"/sub-principle",
            element:<SubPrinciple />
          },
          {
            path:"/teacher",
            element:<Teachers />
          }
        ]
      },
      {
        element:<ProtectedRoutes allowedRoles={['student','teacher','sub-principle','principle']} />,
        children:[
          {
            path:'/principle',
            element:<Principle />
          },
          {
            path:"/sub-principle",
            element:<SubPrinciple />
          },
          {
            path:"/teacher",
            element:<Teachers />
          },
          {
            path:"/student",
            element:<Students />
          }
        ]
      },
    ]
  }
])

const App = () => {
  return (
    <div>
    <RouterProvider router={router} />
      {/* <Navbar />
      <Routes>
        // Public routes
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/login" />} />


        // Protected Reoutes
        // Principle Routes
        <Route element={<ProtectedRoutes allowedRoles={['principle']} />}>
        <Route path='/principle' element={<Principle />} />
        </Route>
        // Sub-Principle Routes
        <Route element={<ProtectedRoutes allowedRoles={['sub-principle','principle']} />}>
        <Route path='/sub-principle' element={<SubPrinciple />} />
        </Route>
        // Teachers Routes
        <Route element={<ProtectedRoutes allowedRoles={['teacher','sub-principle','principle']} />}>
        <Route path="/teacher" element={<Teachers />} />
        </Route>
        // Students Routes
        <Route element={<ProtectedRoutes allowedRoles={['student','teacher','sub-principle','principle']} />}>
        <Route path="/student" element={<Students />} />
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
