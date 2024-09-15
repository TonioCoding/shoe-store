import { Typography } from "@material-tailwind/react";
import { IconContext } from "react-icons";
import { GoPlusCircle } from "react-icons/go";

const AddInterestCard = () => {
  return (
    <div className="shadow-xl flex-col text-center justify-center bg-gray-300 inline-flex my-4 cursor-pointer gap-y-2 w-fit px-12 py-20">
      <IconContext.Provider value={{ size: "1.7vw" }}>
        <GoPlusCircle className="self-center inline-block" />
      </IconContext.Provider>
      <Typography className="font-rt font-thin inline-block" variant="h6">
        Add Interest
      </Typography>
    </div>
  );
};

export default AddInterestCard;
