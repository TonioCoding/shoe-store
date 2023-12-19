import { Input } from "@material-tailwind/react";

const NavSearchBar = () => {
  return (
    <div className="w-72 flex justify-center">
      <Input
        label="Search"
        color="black"
        style={{
          WebkitBorderBeforeColor: "black",
          borderBlockColor: "black",
          borderLeftColor: "black",
          borderRightColor: "black",
        }}
      />
    </div>
  );
};

export default NavSearchBar;
