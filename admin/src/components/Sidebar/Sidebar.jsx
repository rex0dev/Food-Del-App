import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { IoAddCircleSharp } from "react-icons/io5";
import { FaSquareCheck } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <IoAddCircleSharp className='icons'/>
            <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <FaSquareCheck className='icons'/>
            <p>List items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <FaSquareCheck className='icons'/>
            <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
