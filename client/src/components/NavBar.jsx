/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
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
import { IoIosSettings } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import ImageWithShadow from "../components/Image";
import LearnMoreButton from "./LearnMoreButton";
import { GoHeartFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import SignInDisplay from "./SignInDisplay";
import SignUpDisplay from "./SignUpDisplay";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [currentPage, setCurrentPage] = useState(useLocation().pathname);
  const [showSignin, setSignin] = useState(false);
  const [showSignup, setSignup] = useState(false);
  const pathname = useLocation().pathname;

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

  const iconList = (
    <IconContext.Provider value={{ size: "3vw" }}>
      <div className="flex justify-between ">
        <Link to={"/settings"}>
          <IoIosSettings className="text-black cursor-pointer lg:w-[1.5vw] mx-2" />
        </Link>
        <Link to={"/"}>
          <IoHomeSharp className="text-black cursor-pointer lg:w-[1.5vw] mx-2 mr-3" />
        </Link>
        <Link to={"/account"}>
          <FaUser className="text-black cursor-pointer lg:w-[1.3vw] mx-2" />
        </Link>
        <Link to={"/saved-shoes"}>
          <GoHeartFill className="text-black cursor-pointer lg:w-[1.3vw] mx-2" />
        </Link>
      </div>
    </IconContext.Provider>
  );

  const wordList = (
    <div className="flex">
      <Link to={"/membership-page"}>
        <span className="m-3 hover:underline lg:w-[2vw] text-black font-lt text-md cursor-pointer">
          Membership
        </span>
      </Link>
    </div>
  );

  const brandIconList = (
    <IconContext.Provider value={{ size: "2vw" }}>
      <div className="flex justify-between">
        <Link to={"/adidas-page"}>
          <SiAdidas className="text-black m-5 cursor-pointer transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        </Link>
        <Link to={"/jordan-page"}>
          <SiJordan className="text-black m-5 cursor-pointer transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        </Link>
        <Link to={"newbalance-page"}>
          <SiNewbalance className="text-black m-5 cursor-pointer transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        </Link>
        <Link to={"/nike-page"}>
          <SiNike className="text-black m-5 cursor-pointer transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        </Link>
        <Link to={"reebok-page"}>
          <SiReebok className="text-black m-5 cursor-pointer transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        </Link>
        <Link to={"/puma-page"}>
          <SiPuma className="text-black m-5 cursor-pointer transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        </Link>
      </div>
    </IconContext.Provider>
  );

  return (
    <div className="max-w-full">
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
              Sign in
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
      {/*BLACK STRIP*/}
      <div className="bg-black w-full shadow-xl">
        <h1 className="text-center text-white pt-1 font-lt">Welcome!</h1>
        <p className="text-center text-white font-rt py-2">
          Winter sale, 45% off
        </p>
        {/*<GiCancel color="white" className="ml-[50" />*/}
      </div>
      {/*END OF STRIP*/}
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 basis-0">
          <Link to={"/"}>
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium font-lt text-2xl text-black">
              Shoe Store
            </Typography>
          </Link>

          <div className="hidden sm:flex items-center">
            <NavSearchBar />
          </div>
          {/*<NavSearchBar/>*/}
          <div className="flex items-center gap-4">
            {/* Sign in button and Shopping cart container*/}
            <div className="flex justify-center items-center gap-x-1 w-full">
              {openNav === false ? (
                <Button
                  variant="gradient"
                  size="sm"
                  className="lg:inline-block mr-5 h-[10%]"
                  color="red"
                  onClick={signinHandleClick}
                >
                  <span className="font-lt">Sign in</span>
                </Button>
              ) : null}
              <IconContext.Provider value={{ size: "3vw" }}>
                <Link to={"/cart"}>
                  <HiShoppingCart className="text-black m-1 cursor-pointer lg:w-[2vw] invisible lg:visible" />
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
          <div className="flex items-center justify-center w-full">
            <Button
              variant="gradient"
              size="sm"
              className="inline-block my-3 mx-3"
              color="red"
              onClick={signinHandleClick}
            >
              <span className="font-rt">Sign in</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="inline-block my-3 mx-3"
              color="green"
            >
              <span className="font-rt">Shop</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="inline-block my-3 mx-3"
              color="black"
            >
              <span className="font-rt">Options</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="inline-block my-3 mx-3"
              color="blue"
            >
              <span className="font-rt">Cart</span>
            </Button>
          </div>
        </Collapse>
        {<hr className="h-px my-5 bg-black border-0 dark:bg-gray-700" />}
        <div className="hidden lg:flex justify-between w-full">
          {iconList}
          {brandIconList}
          {wordList}
        </div>
      </Navbar>
      {/*CONTENT SECTION OF BOTTOM OF NAVBAR*/}
      {currentPage === "/" ? (
        <div>
          <div className="flex justify-center items-center mb-5 w-full overflow-x-clip shadow-2xl flex-col lg:flex-row bg-[#f5f5f5]">
            <ImageWithShadow ImgUrl="https://stuffgy.com/cdn/shop/articles/kyrie7collage_1024x.jpg?v=1605625907" />
            <ImageWithShadow ImgUrl="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_3237%2Cy_3988/MjAyOTUxNTIzMzUxNjY3NzI0/edwards-adidas.jpg" />
            <ImageWithShadow ImgUrl="https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/_resampled/ScaleWidthWyIxMDI0Il0/melo2.jpg" />
          </div>
          <div className=" flex flex-col justify-center mb-30 text-">
            <h1 className="text-center font-lt text-3xl m-3 mt-10">
              Winter Basketball Shoe Sale
            </h1>
            <p className="text-center font-rt text-md">
              45% markdown on Basketball sneakers
            </p>
            <div className="flex justify-center mt-10">
              <LearnMoreButton text="View Shoes" />
            </div>
          </div>
        </div>
      ) : null}
      {/*END OF CONTENT*/}
    </div>
  );
};

export default NavBar;
