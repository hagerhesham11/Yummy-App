import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

export default function Layout() {
  return (
    <>
    <SideBar/>
    <div className="container">
    <Outlet></Outlet>
    </div>
    </>
  )
}
