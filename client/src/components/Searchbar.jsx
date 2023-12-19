import { Input } from "@material-tailwind/react";
 
const NavSearchBar = () => {
  return (
    <div className="w-72">
      <Input label="Search" color="black" style={{outlineColor: 'red'}}/>
    </div>
  );
}

export default NavSearchBar;