import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../UI/Header'
import Footer from '../UI/Footer'

const MainLayout = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col '>
    <Header />
    <div className='flex-1 flex justify-center'>
    <Outlet className='font-bold'/>
    </div>
    <Footer />
    </div>
  )
}

export default MainLayout
