import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = ({alloewdRoles}) => {
  return (
    <Outlet />
  )
}

export default PrivateRoute
