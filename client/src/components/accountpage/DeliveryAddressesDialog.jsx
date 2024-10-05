import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

const DeliveryAddressesDialog = (props) => {
  const open = props.open;
  const handleDialog = props.handleDialog;

  return (
    <Dialog
      open={open}
      size="xs"
      className="h-[65vh] overscroll-contain overflow-y-scroll px-5"
    >
      <DialogHeader className="flex justify-between">
        <Typography className="font-lt" variant="h5" color="black">
          Add Address
        </Typography>
        <IconContext.Provider value={{ size: "2rem" }}>
          <VscChromeClose
            onClick={handleDialog}
            className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1"
          />
        </IconContext.Provider>
      </DialogHeader>
      <DialogBody className="flex flex-col gap-y-5 items-center">
        <div className="flex flex-col gap-y-4 items-center sm:flex-row gap-x-5 justify-center">
          <input
            label="Current Password*"
            type="text"
            placeholder="First Name*"
            className="min-w-[150px] w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:text-sm focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            label="Current Password*"
            type="text"
            placeholder="Last Name*"
            className="min-w-[150px] w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:text-sm focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
        <Input
          label="Current Password*"
          type="text"
          placeholder="Street Address*"
          className="self-center !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Input
          label="Current Password*"
          type="number"
          placeholder="Apt, Suite, Building"
          className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="flex flex-col gap-y-4 items-center sm:flex-row gap-x-5 justify-center">
          <input
            label="Current Password*"
            type="number"
            placeholder="City*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            label="Current Password*"
            type="number"
            placeholder="Zip*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
        <div className="flex flex-col gap-y-4 items-center sm:flex-row gap-x-5 justify-center">
          <input
            label="Current Password*"
            type="number"
            placeholder="State*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            label="Current Password*"
            type="number"
            placeholder="Country/Region*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
        <Input
          label="Current Password*"
          type="number"
          placeholder="Phone Number*"
          className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="flex gap-x-3 self-start">
          <input type="checkbox" />
          <Typography className="font-rt text-black text-base">
            Set as default shipping address
          </Typography>
        </div>
      </DialogBody>
      <DialogFooter className="p-0">
        <Button className="rounded-full self-end my-4 bg-gray-400 text-gray-700 mr-5">
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

DeliveryAddressesDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
};

export default DeliveryAddressesDialog;
