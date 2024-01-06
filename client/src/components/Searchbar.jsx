/* eslint-disable no-unused-vars */
import { Input } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NavSearchBar = () => {
  return (
    <div className="flex justify-center w-full">
      <Input
        placeholder="Search"
        color="black"
        style={{
          borderBlockColor: "black",
          borderLeftColor: "black",
          borderRightColor: "black",
          width: "100%",
        }}
      />
      {/*<FaMagnifyingGlass className="m-2.5 cursor-pointer" />*/}
    </div>
  );
};

export default NavSearchBar;
