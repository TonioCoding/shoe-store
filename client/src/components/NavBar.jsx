/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Radio,
  Avatar,
  Drawer,
} from "@material-tailwind/react";
import { HiShoppingCart } from "react-icons/hi";
import NavSearchBar from "./Searchbar";
import { IconContext } from "react-icons";
import {
  SiJordan,
  SiAdidas,
  SiNike,
  SiReebok,
  SiNewbalance,
  SiPuma,
} from "react-icons/si";
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import SignInDisplay from "./SignInDisplay";
import SignUpDisplay from "./SignUpDisplay";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/user/userApiSlice";
import { logout } from "../redux/auth/authSlice";
import { toast } from "react-toastify";

const NavBar = (props) => {
  const [openNav, setOpenNav] = useState(false);
  const [currentPage, setCurrentPage] = useState(useLocation().pathname);
  const [showSignin, setSignin] = useState(false);
  const [showSignup, setSignup] = useState(false);
  const pathname = useLocation().pathname;
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const [logoutUser, { isLoading }] = useLogoutMutation();
  const setRef = props.changeRef;
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  setRef(document.getElementById("nav-bar"));

  if (currentPage !== useLocation().pathname) {
    const navbarHeight = document.getElementById("nav-bar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }

  const dispatch = useDispatch();

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    if (userInfo === null) {
      toast.warning("No user logged in!");
    } else {
      logoutUser()
        .then(() => {
          dispatch(logout());
        })
        .then(toast.success("Logout sucess"));
    }
  };

  function disableScroll() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
    if (showSignin === true) {
      disableScroll();
    }
  }

  const signinHandleClick = () => {
    setSignin(true);
    setSignup(false);
  };
  const signinHandleExit = () => {
    setSignin(false);
  };

  const signupHandleClick = () => {
    setSignup(true);
    setSignin(false);
  };
  const signupHandleExit = () => {
    setSignup(false);
  };

  const signupHandleSwitch = () => {
    setSignup(false);
    setSignin(true);
  };

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const navbarHeight = document.getElementById("nav-bar").offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
    });

    return () => {};
  }, []);

  const iconList = (
    <IconContext.Provider
      value={{
        size: "2vw",
        className: "nav-bar-icon",
      }}
    >
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <IoHomeSharp className="text-black cursor-pointer lg:w-[1.5vw] mx-2 mr-3 navbar-icon" />
        </Link>
        <Link to={"/account"}>
          <FaUser className="text-black cursor-pointer lg:w-[1.3vw] mx-2 navbar-icon" />
        </Link>
        <Link to={"/saved-shoes"}>
          <GoHeartFill
            id="saved-shoes-icon"
            className="text-black cursor-pointer lg:w-[1.3vw] mx-2 navbar-icon"
          />
        </Link>
      </div>
    </IconContext.Provider>
  );

  const wordList = (
    <div className="flex items-center">
      <Link to={"/membership-page"}>
        <span
          className="m-3 hover:underline lg:w-[2vw] text-black font-lt text-lg cursor-pointer"
          id="member-title"
        >
          Membership
        </span>
      </Link>
      {userInfo !== null ? (
        <Link to={"/account"}>
          <Avatar size="sm" src={userInfo.avatarUrl} />
        </Link>
      ) : null}
    </div>
  );

  const brandIconList = (
    <IconContext.Provider value={{ size: "2vw", className: "brand-icon" }}>
      <div className="flex justify-between">
        <Link to={"/adidas-page"}>
          <SiAdidas className="text-black m-3 cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/jordan-page"}>
          <SiJordan className="text-black m-3 cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/newbalance-page"}>
          <SiNewbalance className="text-black m-3 cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/nike-page"}>
          <SiNike className="text-black m-3 cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/reebok-page"}>
          <SiReebok className="text-black m-3 cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/puma-page"}>
          <SiPuma className="text-black m-3 cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
      </div>
    </IconContext.Provider>
  );

  return (
    <header className="max-w-full">
      {showSignup === true ? (
        <SignUpDisplay
          state={showSignup}
          buttonClose={
            <Button
              color="red"
              onClick={signupHandleExit}
              className="sign-in-btn font-lt"
            >
              Close
            </Button>
          }
          buttonSignin={
            <Button
              color="blue"
              onClick={signupHandleSwitch}
              className="sign-in-btn font-lt"
            >
              Sign In
            </Button>
          }
        />
      ) : null}
      {showSignin === true ? (
        <SignInDisplay
          state={showSignin}
          buttonClose={
            <Button
              onClick={signinHandleExit}
              className="sign-in-btn font-lt"
              color="red"
            >
              Close
            </Button>
          }
          buttonSubmit={
            <Button
              onClick={signinHandleExit}
              className="sign-in-btn font-lt"
              color="green"
            >
              Login
            </Button>
          }
          buttonSignup={
            <Button
              onClick={signupHandleClick}
              className="sign-in-btn font-lt"
              color="orange"
            >
              Sign up
            </Button>
          }
        />
      ) : null}
      <Navbar
        id="nav-bar"
        className="fixed top-0 z-40 h-fit max-w-full rounded-none px-4 py-2 lg:px-8 shadow-3xl bg-gray-100 border-b-2 border-b-gray-800 overflow-y-hidden inline-block"
      >
        <div className="flex items-center justify-between text-blue-gray-900 basis-0 flex-grow">
          <Link to={"/"} className="hover:drop-shadow-md">
            <Typography
              id="page-title"
              className="mr-4 cursor-pointer py-1.5 font-medium font-lt text-2xl text-black p-3"
            >
              <span>S</span>hoe S<span>t</span>or<span>e</span>
            </Typography>
          </Link>
          <div className="hidden sm:flex items-center">
            <NavSearchBar handleSearchInput={handleSearchInput} />
          </div>
          <div className="flex items-center gap-4">
            {/* Sign in button and Shopping cart container*/}
            <div className="flex justify-center items-center gap-x-1 w-full">
              {openNav === false ? (
                <Button
                  id="navbar-sign-in-btn"
                  variant="gradient"
                  size="sm"
                  className="hidden xs:inline-block mr-5 h-[10%] transition-all ease-in"
                  color="black"
                  onClick={userInfo ? handleLogout : signinHandleClick}
                >
                  <span className="font-lt">
                    {userInfo ? "Log out" : "Sign in"}
                  </span>
                </Button>
              ) : null}
              <IconContext.Provider
                value={{ size: "3vw", className: "navbar-icon" }}
              >
                <Link to={"/cart"}>
                  <HiShoppingCart className="text-black m-1 cursor-pointer lg:w-[2vw] invisible lg:visible hover:text-green-500" />
                </Link>
              </IconContext.Provider>
            </div>
            {/* Sign in button and Shopping cart container*/}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-black"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <Button
            variant="gradient"
            size="sm"
            className="inline-block ml-3"
            color="red"
            onClick={signinHandleClick}
          >
            <span className="font-rt">Sign in</span>
          </Button>
          <div className="flex flex-col sm:flex-row max-w-full gap-y-5 my-[.5rem] sm:justify-center sm:gap-x-5">
            <Button
              variant="gradient"
              size="sm"
              className="inline-block collapse-btn"
              color="green"
            >
              <span className="font-rt">Shop</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="inline-block collapse-btn"
              color="black"
            >
              <span className="font-rt">Options</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="inline-block collapse-btn"
              color="blue"
            >
              <span className="font-rt">Cart</span>
            </Button>
          </div>
        </Collapse>
        {<hr className="h-px my-1 bg-black border-0 dark:bg-gray-700" />}
        <div className="hidden lg:flex justify-between w-full">
          {iconList}
          {brandIconList}
          {wordList}
        </div>
      </Navbar>
      <Drawer
        open={searchInput}
        className=""
        placement="bottom"
        overlay={false}
      >
        <Button>This is where the search results will be mapped out at</Button>
      </Drawer>
    </header>
  );
};

export default NavBar;
