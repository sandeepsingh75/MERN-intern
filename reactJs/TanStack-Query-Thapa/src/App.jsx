import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import MainLayout from './components/Layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import FetchRQ from './pages/FetchRQ.jsx'
import MainLayout from './components/Layout/MainLayout.jsx'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import FetchIndv from './components/UI/FetchIndv.jsx'
import InfiniteScrolling from './pages/InfiniteScrolling.jsx'

//Create routes
const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/rq",
        element:<FetchRQ />
      },
      {
        path:"/infinite",
        element:<InfiniteScrolling />
      },
      {
        path:"/rq/:id",
        element:<FetchIndv />
      },
    ]
  }
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}> </RouterProvider>    
    </QueryClientProvider>
  )
}

export default App
