/* eslint-disable no-unused-vars */
import { Input } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NavSearchBar = () => {
  return (
    <div className="flex justify-center w-full">
      <Input
      id="nav-bar-input"
        placeholder="Search"
        color="black"
        style={{
          borderBlockColor: "black",
          borderLeftColor: "black",
          borderRightColor: "black",
          width: "100%",
        }}
      />
      {
        <FaMagnifyingGlass
          color="black"
          className="w-[5%] cursor-pointer items-center flex justify-center h-10 mx-2"
        />
      }
    </div>
  );
};

export default NavSearchBar;
