import React from 'react'
import User from '../components/User'
import ErrorBoundary from '../components/ErrorBoundary'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <ErrorBoundary fallback="User component error">
        <User />
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default Home
