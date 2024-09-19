import { Button, Typography } from "@material-tailwind/react";
import { IconContext } from "react-icons";
import { GoPlusCircle } from "react-icons/go";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import {
  baseballInterestImg,
  basketballInterestImg,
  exerciseInterestImg,
  fashionInterestImg,
  footballInterestImg,
  golfInterestImg,
  runningInterestImg,
  soccerInterestImg,
  tennisInterestImg,
} from "../../assets/imgs/interests-imgs";
import { VscChromeClose } from "react-icons/vsc";

const AddInterestCard = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const interests = [
    { interest: "Basketball", src: basketballInterestImg },
    { interest: "Baseball", src: baseballInterestImg },
    { interest: "Football", src: footballInterestImg },
    { interest: "Soccer", src: soccerInterestImg },
    { interest: "Tennis", src: tennisInterestImg },
    { interest: "Golf", src: golfInterestImg },
    { interest: "Running", src: runningInterestImg },
    { interest: "Exercise", src: exerciseInterestImg },
    { interest: "Fashion", src: fashionInterestImg },
  ];

  return (
    <>
      <Dialog
        size="xs"
        open={openDialog}
        className="h-[50vh] overflow-y-scroll overscroll-contain"
      >
        <DialogHeader className="m-0 p-0">
          <div className="flex w-full justify-between border-b-[1px] border-gray-500 p-2">
            <Typography>Select Your Interests</Typography>
            <VscChromeClose
              className="cursor-pointer"
              onClick={() => setOpenDialog(false)}
            />
          </div>
        </DialogHeader>
        <DialogBody className="flex flex-col scroll-auto gap-y-5">
          {interests.map(({ interest, src }, index) => {
            return (
              <div
                className="flex justify-around cursor-pointer border-b-[1px] border-gray-500 pb-5"
                key={index}
              >
                <div className="w-[25%] flex items-center gap-x-10">
                  <img
                    src={src}
                    alt={interest}
                    className="w-full object-cover"
                  />
                  <Typography>{interest}</Typography>
                </div>
                <input type="checkbox" />
              </div>
            );
          })}
        </DialogBody>
        <DialogFooter>
          <div className="flex">
            <Button>Cancel</Button>
            <Button>Save</Button>
          </div>
        </DialogFooter>
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
