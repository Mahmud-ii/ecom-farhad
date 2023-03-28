import "./header.css"
import React from 'react'
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({CartItem}) => {
  return (
    <>
      <Search CartItem={CartItem}/>
      <Navbar/>
    </>
  )
}

export default Header