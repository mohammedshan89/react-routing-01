import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigationHandler =()=>{
    navigate('product')
  }
  return (
    <div>
      <h1>My home Page</h1>
      <p>Go to <Link to={'product'}>the List of Product</Link></p>
      <p>
      <button onClick={navigationHandler}>Navigate</button>
      </p>
    </div>
  )
}

export default Home
