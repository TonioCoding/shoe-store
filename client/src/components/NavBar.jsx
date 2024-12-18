import { forwardRef, useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Avatar,
  Drawer,
  Spinner,
  Badge,
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
import { GoHeartFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import SignInDisplay from "./SignInDisplay";
import SignUpDisplay from "./SignUpDisplay";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/user/userApiSlice";
import { logout } from "../redux/auth/authSlice";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import SearchResultsShoeCard from "./SearchResultsShoeCard";
import { MdArrowDropDown } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = forwardRef(function NavBar(props, ref) {
  const [openNav, setOpenNav] = useState(false);
  const [currentPage, setCurrentPage] = useState(useLocation().pathname);
  const [showSignin, setSignin] = useState(false);
  const [showSignup, setSignup] = useState(false);
  const pathname = useLocation().pathname;
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const { cart } = useSelector((state) => state.persistedReducer.cart);
  const [logoutUser, { isLoading }] = useLogoutMutation();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navbarRefHeight = props.navbarRefHeight;
  const [searchLoading, setSearchLoading] = useState(false);

  if (currentPage !== useLocation().pathname) {
    const navbarHeight = document.getElementById("nav-bar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }

  useEffect(() => {
    if (ref) {
      let oldScroll = 0;
      let alreadyShowing;

      window.onscroll = function () {
        if (oldScroll > this.scrollY && alreadyShowing !== true) {
          ref.current.animate(
            [
              {
                height: "0vh",
              },
              {
                display: "inline-block",
                height: `${navbarRefHeight}px`,
              },
            ],
            {
              duration: 150,
              fill: "forwards",
              iterations: 1,
            }
          );
          alreadyShowing = true;
        } else if (oldScroll < this.scrollY && alreadyShowing !== false) {
          ref.current.animate(
            [
              {
                height: `${navbarRefHeight}px`,
              },
              {
                height: "0px",
                paddingTop: "0px",
                paddingBottom: "0px",
              },
            ],
            {
              duration: 150,
              fill: "forwards",
              iterations: 1,
            }
          );
          alreadyShowing = false;
        }
        oldScroll = this.scrollY;
      };
      {
        document.body.style.paddingTop = `${navbarRefHeight}px`;
      }
    }
  }, [ref, navbarRefHeight]);

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
        size: "1.4rem",
      }}
    >
      <div className="flex justify-between items-center gap-x-3 [&>*]:h-[1.5rem]">
        <Link to={"/"}>
          <IoHomeSharp className="text-black cursor-pointer" />
        </Link>
        <Link to={"/saved-shoes"}>
          <GoHeartFill
            id="saved-shoes-icon"
            className="text-black cursor-pointer"
          />
        </Link>
        <Link to={"/cart"}>
          <Badge
            withBorder
            containerProps={{ className: "" }}
            invisible={cart && cart.length > 0 ? false : true}
            className="bg-[#ff2e27e6] hidden lg:flex lg:justify-center hover:bg-black transition-all duration-300 ease-out"
            placement="top-end"
            content={cart ? cart.length : null}
          >
            <HiShoppingCart className="text-black cursor-pointer invisible lg:visible hover:text-green-500 ease-in-out duration-500" />
          </Badge>
        </Link>
      </div>
    </IconContext.Provider>
  );

  const brandIconList = (
    <IconContext.Provider value={{ size: "1.7rem", className: "brand-icon" }}>
      <div className="flex justify-between gap-x-5">
        <Link to={"/adidas-page"}>
          <SiAdidas className="text-black cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/jordan-page"}>
          <SiJordan className="text-black cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/newbalance-page"}>
          <SiNewbalance className="text-black cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/nike-page"}>
          <SiNike className="text-black cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/reebok-page"}>
          <SiReebok className="text-black cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
        <Link to={"/puma-page"}>
          <SiPuma className="text-black cursor-pointer transition-all duration-200 ease-in-out" />
        </Link>
      </div>
    </IconContext.Provider>
  );

  useEffect(() => {
    async function getSearchResults() {
      try {
        const req = fetch(
          `http://localhost:9000/api/v1/shoe/get-shoes/input/${searchInput}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then(setSearchLoading(true));
        const res = (await req)
          .json()
          .then((data) => setSearchResults(data))
          .then(setSearchLoading(false));
      } catch (error) {
        toast.error(error);
        setSearchLoading(false);
      }
    }
    if (searchInput !== "") getSearchResults();
  }, [searchInput]);

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
        ref={ref}
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
            <NavSearchBar
              handleSearchInput={handleSearchInput}
              searchInput={searchInput}
            />
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
              {userInfo !== null ? (
                <Link to={"/account"}>
                  <Avatar
                    size="sm"
                    src={userInfo.avatarUrl}
                    className="border-2 border-gray-400 hover:border-gray-600 transition-all ease-in-out duration-500"
                  />
                </Link>
              ) : null}
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
        {<hr className="h-px my-2 bg-black border-0 dark:bg-gray-700" />}
        <div className="hidden lg:flex justify-between w-full ">
          {brandIconList}
          {iconList}
        </div>
      </Navbar>
      <Drawer
        open={searchInput !== ""}
        className="border border-t-gray-700  overscroll-contain overflow-y-auto pl-5 bg-gray-200"
        placement="bottom"
        overlay={false}
      >
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <Typography
            className="font-lt mt-1 flex items-center gap-x-4 mb-5"
            variant="h5"
          >
            Search Results
            <MdArrowDropDown />
            <VscChromeClose
              className="bg-black text-white rounded-full p-1 transition-all ease-in duration-200 hover:bg-red-500"
              onClick={() => {
                setSearchInput("");
              }}
            />
            {searchLoading === true ? <Spinner /> : null}
          </Typography>
        </IconContext.Provider>
        {searchResults.length > 0 ? (
          <div
            id="search-results-container"
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 place-items-center pt-5 rounded-2xl"
          >
            {searchResults.map(
              ({ _id, model, name, imgUrls, price }, index) => {
                return (
                  <SearchResultsShoeCard
                    key={index}
                    id={_id}
                    name={name}
                    model={model}
                    imgUrls={imgUrls}
                    price={price}
                  />
                );
              }
            )}
          </div>
        ) : null}
      </Drawer>
    </header>
  );
});

NavBar.propTypes = {
  setRef: PropTypes.func,
  navbarRefHeight: PropTypes.number,
};

export default NavBar;
