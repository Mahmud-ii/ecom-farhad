import { signOut } from 'firebase/auth'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '../../custom-hooks/useAuth'
import { auth } from '../../firebase.config'
import logo from '../../assets/images/mobile-point-logo-300-2.png'
import userIcon from '../../assets/images/user-icon.png'
import { useSelector } from 'react-redux'


const Search = () => {
  const cartItems = useSelector(state => state.cart.cartItems)

  const navigate = useNavigate()
  const {currentUser} = useAuth()
  // const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const profileActionRef = useRef(null)

  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Logged out')
      navigate('/home')
    }).catch(err => {
      toast.error(err.message)
    })
  }

  const toggleProfileActions = ()=> profileActionRef.current.classList.toggle('show__profileActions')

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to={"/"}>
              <img src={logo} alt='' />
            </Link>
          </div>

          <div className='search-box f_flex'>
            <input type='text' placeholder='Search and hit enter...' />
            <button className='search__btn' onClick={() => navigate("/shop")} value={"search"}>
              <i className='fa fa-search'></i>
            </button>
            {/* <span>All Category</span> */}
          </div>

          <div className='icon f_flex width'>
            <div className='profile'>
                <img onClick={toggleProfileActions} src={currentUser && currentUser.photoURL ? currentUser.photoURL : userIcon} alt="userIcon" />

                <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions}>
                  {
                    currentUser ? (
                      <div className="admin__buttons">
                        <Link to='/dashboard'>Dashboard</Link>
                        <span onClick={logout}>Logout</span>
                      </div>
                    ) : (<div className='admin__buttons'>
                      <Link to='/signup'>Signup</Link>
                      <Link to='/login'>Login</Link>
                    </div>)
                  }
                </div>
              </div>
            {/* <i className='fa fa-user icon-circle'></i> */}
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{cartItems?.length === 0 ? "" : cartItems?.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search