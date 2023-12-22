import { Input } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NavSearchBar = () => {
  return (
    <div className="flex justify-center">
      <Input
        label="Search"
        color="black"
        style={{
          WebkitBorderBeforeColor: "black",
          borderBlockColor: "black",
          borderLeftColor: "black",
          borderRightColor: "black",
          width: "45vw"
        }}
      />
      <FaMagnifyingGlass className="m-2.5"/>
    </div>
  );
};

export default NavSearchBar;
