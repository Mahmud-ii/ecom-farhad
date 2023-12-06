import { signOut } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../custom-hooks/useAuth";
import { auth } from "../../firebase.config";
import logo from "../../assets/images/mobile-point-logo-300-2.png";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../redux/slices/searchSlice";

const Search = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { currentUser } = useAuth();
  // const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const controlNavbar = () => {
    if (window.scrollY < 350) {
      setShow(true);
    } else if (document.body.getBoundingClientRect().top > lastScrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLastScrollY(document.body.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navigateToDash = () => {
    if (currentUser) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("activeLog");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(
      searchActions.filterOut({
        inputValue: e.target.value,
      })
    );
    navigate("/shop");
    // console.log(e.target.value);
  };

  return (
    <>
      <header className={show ? "activeNav" : "hiddenNav"}>
        <div className="container">
          {/* <!-- logo --> */}
          <Link className="logo" to={"/"}>
            <img src={logo} alt="" />
          </Link>
          {/* <!-- open nav mobile --> */}

          {/* <!--search --> */}
          <label className="open-search" htmlFor="open-search">
            <i className="fas fa-search"></i>
            <input
              className="input-open-search"
              id="open-search"
              type="checkbox"
              name="menu"
            />
            <div className="search">
              <button className="button-search">
                <i className="fas fa-search"></i>
              </button>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="input-search"
                onChange={handleSearch}
              />
            </div>
          </label>
          {/* <!-- // search --> */}
          <nav className="nav-content">
            {/* <!-- nav --> */}
            <ul className="nav-content-list">
              <li
                className="nav-content-item account-login"
                onClick={handleToggle}
              >
                <label
                  className="open-menu-login-account"
                  htmlFor="open-menu-login-account"
                >
                  <input
                    className="input-menu"
                    id="open-menu-login-account"
                    type="checkbox"
                    name="menu"
                  />

                  <i className="fas fa-user-circle"></i>
                  <span className="login-text">
                    Hello, Sign in <strong>Create Account</strong>
                  </span>
                  <span className="item-arrow"></span>

                  {/* <!-- submenu --> */}
                  <ul className="login-list">
                    {currentUser ? (
                      <>
                        <li className="login-list-item">
                          <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li className="login-list-item">
                          <span onClick={logout}>Logout</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="login-list-item">
                          <Link to="/login">Login</Link>
                        </li>
                        <li className="login-list-item">
                          <Link to={"/signup"}>Create account</Link>
                        </li>
                        <li className="login-list-item">
                          <span onClick={navigateToDash}>Dashboard</span>
                        </li>
                      </>
                    )}
                  </ul>
                </label>
              </li>
              <li className="nav-content-item">
                <Link className="nav-content-link" href="tel:+6199942413">
                  <i className="fas fa-phone-square-alt"></i>
                </Link>
              </li>
              <li className="nav-content-item">
                <Link className="nav-content-link" to={"/cart"}>
                  <i className="fas fa-shopping-cart"></i>
                  <span>
                    {cartItems?.length === 0 ? "" : cartItems?.length}
                  </span>
                </Link>
              </li>
              {/* <!-- call to action --> */}
            </ul>
          </nav>
        </div>
        {/* <!-- nav navigation commerce --> */}
        <div className="nav-container">
          <nav className="all-category-nav">
            <label className="open-menu-all" htmlFor="open-menu-all">
              <input
                className="input-menu-all"
                id="open-menu-all"
                type="checkbox"
                name="menu-open"
              />
              <span className="all-navigator">
                <i className="fas fa-bars"></i> <span>All category</span>
                <i className="fas fa-angle-down"></i>
                <i className="fas fa-angle-up"></i>
              </span>

              {/* will have to integrate it to an api */}
              <ul className="all-category-list">
                <li className="all-category-list-item">
                  <Link to={"/shop"} className="all-category-list-link">
                    Smartphones<i className="fas fa-angle-right"></i>
                  </Link>
                  <div className="category-second-list">
                    <ul className="category-second-list-ul">
                      <li className="category-second-item">
                        <Link to={"/"}>Iphone 10</Link>
                      </li>
                      <li className="category-second-item">
                        <Link to={"/"}>Galaxy Note 10</Link>
                      </li>
                      <li className="category-second-item">
                        <Link to={"/"}>MotorolLink One </Link>
                      </li>
                      <li className="category-second-item">
                        <Link to={"/"}>Galaxy A80 </Link>
                      </li>
                      <li className="category-second-item">
                        <Link to={"/"}>Galaxy M </Link>
                      </li>
                      <li className="category-second-item">
                        <Link to={"/"}>Huaway P30 </Link>
                      </li>
                    </ul>

                    <div className="img-product-menu">
                      <img
                        alt="banner"
                        src="https://i.ibb.co/Vvndkmy/banner.jpg"
                      />
                    </div>
                  </div>
                </li>
                <li className="all-category-list-item">
                  <Link to={"/shop"} className="all-category-list-link">
                    Furniture <i className="fas fa-angle-right"></i>
                  </Link>
                </li>
                <li className="all-category-list-item">
                  <Link to={"/shop"} className="all-category-list-link">
                    Toys<i className="fas fa-angle-right"></i>
                  </Link>
                </li>
                <li className="all-category-list-item">
                  <Link to={"/shop"} className="all-category-list-link">
                    Computing<i className="fas fa-angle-right"></i>
                  </Link>
                </li>
                <li className="all-category-list-item">
                  <Link to={"/shop"} className="all-category-list-link">
                    Games<i className="fas fa-angle-right"></i>
                  </Link>
                </li>
                <li className="all-category-list-item">
                  <Link to={"/shop"} className="all-category-list-link">
                    Automotive<i className="fas fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </label>
          </nav>
          <nav className="featured-category">
            <ul className="nav-row">
              <li className="nav-row-list">
                <Link to={"/shop"} className="nav-row-list-link">
                  Smartphones
                </Link>
              </li>
              <li className="nav-row-list">
                <Link to={"/shop"} className="nav-row-list-link">
                  furniture
                </Link>
              </li>
              <li className="nav-row-list">
                <Link to={"/shop"} className="nav-row-list-link">
                  Toys
                </Link>
              </li>
              <li className="nav-row-list">
                <Link to={"/shop"} className="nav-row-list-link">
                  Computing
                </Link>
              </li>
              <li className="nav-row-list">
                <Link to={"/shop"} className="nav-row-list-link">
                  Games
                </Link>
              </li>
              <li className="nav-row-list">
                <Link to={"/shop"} className="nav-row-list-link">
                  Automotive
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Search;
