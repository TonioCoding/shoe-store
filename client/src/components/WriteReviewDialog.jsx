import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { MdStarBorder } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

const WriteReviewDialog = (props) => {
  const open = props.open;
  const handleDialog = props.handleDialog;
  const currentShoe = props.currentShoe;
  const currentShoeProps = useRef(null);

  console.log(currentShoe);
  console.log(currentShoeProps.current);

  useEffect(() => {
    if (currentShoe) {
      const { brand, gender, name, model, imgUrls } = currentShoe;
      currentShoeProps.current = {
        brand: brand,
        gender: gender,
        name: name,
        model: model,
        img: imgUrls[0],
      };
    }
  }, [currentShoe]);
  return (
    <Dialog
      size="md"
      open={open}
      className="p-7 overscroll-contain overflow-y-scroll"
    >
      <DialogHeader className="flex flex-col w-full">
        <IconContext.Provider value={{ size: "2rem" }}>
          <VscChromeClose
            onClick={handleDialog}
            className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1 self-end"
          />
        </IconContext.Provider>
        <div className="flex flex-col self-center items-center gap-y-1">
          <Typography
            variant="h5"
            className="font-rt font-normal text-gray-700"
          >
            Write a Review
          </Typography>
          <Typography className="text-sm text-gray-500">
            Share your thoughts with the community
          </Typography>
        </div>
      </DialogHeader>
      <DialogBody>
        <div className="flex items-center gap-x-4">
          <img
            className="w-[5vw]"
            src={currentShoeProps.current ? currentShoeProps.current.img : null}
          />
          <Typography className="text-gray-800">
            {currentShoeProps.current ? currentShoeProps.current.brand : null}{" "}
            {currentShoeProps.current ? currentShoeProps.current.model : null}{" "}
            {currentShoeProps.current ? currentShoeProps.current.name : null}{" "}
            {currentShoeProps.current ? currentShoeProps.current.gender : null}
            &#39;s Shoe
          </Typography>
        </div>
        <div className="my-3 gap-y-6">
          <Typography className="text-gray-800 items-center">
            Overall rating <span className="text-red-600">&#42;</span>
          </Typography>
          <div className="flex text-black [&>*]:hover:cursor-pointer">
            <IconContext.Provider value={{ size: "3vw" }}>
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
            </IconContext.Provider>
          </div>
          <hr className="my-10 border-gray-500" />
          <div className="flex flex-col gap-y-2">
            <Typography className="text-gray-800 items-center">
              Your Review <span className="text-red-600">&#42;</span>
            </Typography>
            <Input
              type="text"
              className="!border  !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            <Typography>
              Describe what you liked, what you didn&#39;t like, and other key
              things shoppers should know. Minimum 30 characters&#46;
            </Typography>
          </div>
        </div>
      </DialogBody>
      <DialogFooter></DialogFooter>
    </Dialog>
  );
};
WriteReviewDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
  currentShoe: PropTypes.object,
};
export default WriteReviewDialog;
