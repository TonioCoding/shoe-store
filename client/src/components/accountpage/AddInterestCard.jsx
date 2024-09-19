import { Typography } from "@material-tailwind/react";
import { IconContext } from "react-icons";
import { GoPlusCircle } from "react-icons/go";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const AddInterestCard = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const interests = [
    { interest: "Basketball", src: "" },
    { interest: "Baseball", src: "" },
    { interest: "Football", src: "" },
    { interest: "Soccer", src: "" },
    { interest: "Tennis", src: "" },
    { interest: "Golf", src: "" },
    { interest: "Running", src: "" },
    { interest: "Exercise", src: "" },
    { interest: "Fashion", src: "" },
  ];

  return (
    <>
      <Dialog open={openDialog}>
        <DialogHeader>
          <button onClick={() => setOpenDialog(false)}>exit</button>
        </DialogHeader>
        <DialogBody></DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
      <div
        onClick={() => setOpenDialog(true)}
        className="hover:text-gray-600 border-gray-400 transition-all ease-out duration-400 shadow-xl flex-col text-center justify-center bg-gray-300 inline-flex my-4 cursor-pointer gap-y-2 w-[11rem] h-[16rem] px-12 py-20"
      >
        <IconContext.Provider value={{ size: "1.7vw" }}>
          <GoPlusCircle className="self-center inline-block" />
        </IconContext.Provider>
        <Typography className="font-rt font-thin inline-block " variant="h6">
          Add Interest
        </Typography>
      </div>
    </>
  );
};

export default AddInterestCard;
