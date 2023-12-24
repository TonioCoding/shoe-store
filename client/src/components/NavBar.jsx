/* eslint-disable no-unused-vars */
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  HiOutlineHome,
  HiOutlineCog,
  HiShoppingCart,
  HiUserCircle,
} from "react-icons/hi";
import NavSearchBar from "./Searchbar";
import { IconContext } from "react-icons";
import {
  SiJordan,
  SiAdidas,
  SiNike,
  SiReebok,
  SiNewbalance,
} from "react-icons/si";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const iconList = (
    <IconContext.Provider value={{ size: "4vh" }}>
      <div className="flex justify-between">
        <HiOutlineCog className="text-black m-2 cursor-pointer" />
        <HiOutlineHome className="text-black m-2 cursor-pointer" />
        <HiUserCircle className="text-black m-2 cursor-pointer" />
      </div>
    </IconContext.Provider>
  );

  const wordList = (
    <div className="flex">
      <ul className="text-black font-lt justify-between text-md cursor-pointer">
        <span className="m-3 hover:underline">Options</span>
        <span className="m-3 hover:underline">Account</span>
      </ul>
      <IconContext.Provider value={{ size: "3vh" }}>
        <HiShoppingCart className="text-black m-1 cursor-pointer" />
      </IconContext.Provider>
    </div>
  );

  const brandIconList = (
    <IconContext.Provider value={{ size: "4vw" }}>
      <div className="flex justify-between rounded-lg bg-gray-100 border-2 border-gray-500">
        <SiAdidas className="text-black m-5 cursor-pointer" />
        <SiJordan className="text-black m-5 cursor-pointer" />
        <SiNewbalance className="text-black m-5 cursor-pointer" />
        <SiNike className="text-black m-5 cursor-pointer" />
        <SiReebok className="text-black m-5 cursor-pointer" />
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
                className="hidden lg:inline-block"
              >
                <span className="font-lt">Sign in</span>
              </Button>
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
            >
              <span className="font-rt">Sign in</span>
            </Button>
          </div>
        </Collapse>
        {<hr className="h-px my-8 bg-black border-0 dark:bg-gray-700" />}
        <div className="flex justify-center w-full md:hidden">
          {/*iconList*/}
          {brandIconList}
          {/*wordList*/}
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
