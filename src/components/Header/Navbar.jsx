import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)

  window.addEventListener("scroll", () => {
    const search = document.querySelector(".header")
    search.classList.toggle("active", window.scrollY > 500)
  })

  return (
    <>
      <header className="header">
      <div className='container d_flex'>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
              <li>
                <Link to='/shop'>All Products</Link>
              </li>
              <li>
                <Link to='/vendor'>smart phones</Link>
              </li>
              <li>
                <Link to='/track'>feature phones</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar