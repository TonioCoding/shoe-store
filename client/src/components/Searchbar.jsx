/* eslint-disable no-unused-vars */
import { Input } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PropTypes } from "prop-types";

const NavSearchBar = (props) => {
  const handleSearchInput = props.handleSearchInput;
  return (
    <div className="flex justify-center w-full">
      <Input
        onChange={(e) => handleSearchInput(e.target.value)}
        type="text"
        placeholder="Search"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-800 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        style={{
          color: "#330000",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
      {
        <FaMagnifyingGlass
          color="black"
          className="w-[6%] cursor-pointer items-center flex justify-center h-10 mx-2"
        />
      }
    </div>
  );
};

NavSearchBar.propTypes = {
  handleSearchInput: PropTypes.func,
};

export default NavSearchBar;
