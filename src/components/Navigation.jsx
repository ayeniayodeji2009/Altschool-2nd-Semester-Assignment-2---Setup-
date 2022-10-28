import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from "react-router-dom";



//Checks for Current Nav
function currentPageNav(isActive){
  return isActive ? {color: 'white'} : {color: 'black'}
}

export default function Navigation(){
  return (
    <section>
    <NavLink style={currentPageNav} className="navigate" to="/">Home</NavLink> 
    <NavLink style={currentPageNav} className="navigate" to="/about">About</NavLink>
    <NavLink style={currentPageNav} className="navigate" to="/address">Address</NavLink>
    <NavLink style={currentPageNav} className="navigate" to="/Users">Users</NavLink>
    </section>
  )
}