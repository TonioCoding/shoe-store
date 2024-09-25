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
import { useSelector } from "react-redux";

const AddInterestCard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);

  const [selectedInterests, setSelectedInterests] = useState([]);

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

  console.log(userInfo);
  console.log(selectedInterests);

  /* async function addInterests() {
    if (selectedInterests.length > 0) {
      try {
      } catch (error) {}
    } else {
    }
  } */

  return (
    <>
      <Dialog
        size="xs"
        open={openDialog}
        className="h-[55vh] overflow-y-scroll overscroll-contain rounded-lg "
      >
        <DialogHeader className="m-0 p-0 sticky top-0 z-50 bg-white">
          <div className="flex w-full justify-between border-b-[1px] border-gray-500 p-2">
            <Typography variant="h6" className="font-thin text-black">
              Select Your Interests
            </Typography>
            <VscChromeClose
              className="cursor-pointer text-black"
              onClick={() => setOpenDialog(false)}
            />
          </div>
        </DialogHeader>
        <DialogBody className="flex flex-col scroll-auto gap-y-5 p-0 mt-4">
          {interests.map(({ interest, src }, index) => {
            return (
              <div
                className="flex justify-around cursor-pointer border-b-[1px] border-gray-500 pb-5 items-center gap-x-7"
                key={index}
              >
                <div className="w-[25%] flex items-center gap-x-7">
                  <img
                    src={src}
                    alt={interest}
                    className="w-full object-cover"
                  />
                  <Typography variant="h5" className="font-lt text-black">
                    {interest}
                  </Typography>
                </div>
                <input
                  disabled={userInfo.interests.includes(interest)}
                  type="checkbox"
                  className="px-6 w-5 h-5"
                  value={interest}
                  onClick={(e) => {
                    if (userInfo.interests.includes(interest) === false) {
                      setSelectedInterests([
                        ...selectedInterests,
                        e.currentTarget.value,
                      ]);
                    }
                  }}
                />
              </div>
            );
          })}
        </DialogBody>
        <DialogFooter className="sticky bottom-1">
          <div className="flex gap-x-5 sticky bottom-0">
            <Button className="shadow-xl border bg-white rounded-3xl text-black border-black hover:border-gray-600 hover:opacity-1">
              Cancel
            </Button>
            <Button className="bg-black rounded-3xl hover:bg-gray-300">
              Save
            </Button>
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
