import { Input } from "@material-tailwind/react";

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
        }}
      />
    </div>
  );
};

export default NavSearchBar;
