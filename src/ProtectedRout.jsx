import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

function ProtectedRout({ children }) {
  const isLoggedIn = Cookies.get('user') 

  if (!isLoggedIn) {
    return <Navigate to="/Signin" />
  }

  return children
}

export default ProtectedRout