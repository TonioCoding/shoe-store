/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
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
import { GiCancel } from "react-icons/gi";
import InfoNavSlider from "./InfoNavSlider";
import LogoSlider from "./homepage/BrandLogoSlider";
import ImageWithShadow from "../components/Image";
import ButtonRounded from "./RoundedButton";
import LearnMoreButton from "./LearnMoreButton";

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
      <div className="flex justify-between">
        <SiAdidas className="text-black m-5 cursor-pointer lg:w-[2vw] transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        <SiJordan className="text-black m-5 cursor-pointer lg:w-[2vw] transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        <SiNewbalance className="text-black m-5 cursor-pointer lg:w-[2vw] transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        <SiNike className="text-black m-5 cursor-pointer lg:w-[2vw] transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        <SiReebok className="text-black m-5 cursor-pointer lg:w-[2vw] transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
        <SiPuma className="text-black m-5 cursor-pointer lg:w-[2vw] transition-all duration-200 ease-in-out hover:w-[3.1vw]" />
      </div>
    </IconContext.Provider>
  );

  return (
    <div className="max-w-full">
      <div className="bg-black w-full shadow-xl">
        <h1 className="text-center text-white py-2 font-lt">Welcome!</h1>
        {/*<GiCancel color="white" className="ml-[50" />*/}
      </div>
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
      <div className="flex justify-between mb-10 w-full overflow-hidden">
        <ImageWithShadow ImgUrl="https://stuffgy.com/cdn/shop/articles/kyrie7collage_1024x.jpg?v=1605625907" />
        <div className="bg-black">b</div>
        <ImageWithShadow ImgUrl="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_3237%2Cy_3988/MjAyOTUxNTIzMzUxNjY3NzI0/edwards-adidas.jpg" />
        <div className="bg-black">b</div>
        <ImageWithShadow ImgUrl="https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/_resampled/ScaleWidthWyIxMDI0Il0/melo2.jpg" />
      </div>
      <div className="mb-30">
        <h1 className="text-center font-lt text-3xl m-3">
          Winter Basketball Shoe Sale
        </h1>
        <p className="text-center font-rt text-md">
          45% markdown on Basketball sneakers
        </p>
        <LearnMoreButton text="Learn More"/>
      </div>
    </div>
  );
};

export default NavBar;
