/* eslint-disable no-unused-vars */
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { HiOutlineHome, HiShoppingCart, HiUserCircle } from "react-icons/hi";
import NavSearchBar from "./Searchbar";
import { IconContext } from "react-icons";
import {
  SiJordan,
  SiAdidas,
  SiNike,
  SiReebok,
  SiNewbalance,
} from "react-icons/si";
import { CiSettings, CiHome, CiUser } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const iconList = (
    <IconContext.Provider value={{ size: "3vw" }}>
      <div className="flex justify-between">
        <IoIosSettings className="text-black cursor-pointer lg:w-[1.5vw] mx-2" />
        <IoHomeSharp className="text-black cursor-pointer lg:w-[1.5vw] mx-2 mr-3" />
        <FaUser className="text-black cursor-pointer lg:w-[1.3vw] mx-2" />
      </div>
    </IconContext.Provider>
  );

  const wordList = (
    <div className="flex">
      <ul className="text-black font-lt text-md cursor-pointer">
        <span className="m-3 hover:underline lg:w-[2vw]">Options</span>
        <span className="m-3 hover:underline lg:w-[2vw]">Account</span>
      </ul>
    </div>
  );

  const brandIconList = (
    <IconContext.Provider value={{ size: "3vw" }}>
      <div className="flex justify-between rounded-lg bg-gray-100 border-2 border-gray-500">
        <SiAdidas className="text-black m-5 cursor-pointer lg:w-[2vw]" />
        <SiJordan className="text-black m-5 cursor-pointer lg:w-[2vw]" />
        <SiNewbalance className="text-black m-5 cursor-pointer lg:w-[2vw]" />
        <SiNike className="text-black m-5 cursor-pointer lg:w-[2vw]" />
        <SiReebok className="text-black m-5 cursor-pointer lg:w-[2vw]" />
      </div>
    </IconContext.Provider>
  );

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium font-lt text-2xl text-black"
          >
            Shoe Store
          </Typography>
          <NavSearchBar />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block mr-5"
                color="red"
              >
                <span className="font-lt">Sign in</span>
              </Button>
              <IconContext.Provider value={{ size: "3vw" }}>
                <HiShoppingCart className="text-black m-1 cursor-pointer lg:w-[2vw] invisible lg:visible" />
              </IconContext.Provider>
            </div>
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
          <div className="inline-flex items-center gap-x-1 mt-3 m-3">
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className="inline-block"
              color="red"
            >
              <span className="font-rt">Sign in</span>
            </Button>
          </div>
        </Collapse>
        {<hr className="h-px my-8 bg-black border-0 dark:bg-gray-700" />}
        <div className="flex justify-between w-full md:hidden">
          {iconList}
          {brandIconList}
          {wordList}
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
