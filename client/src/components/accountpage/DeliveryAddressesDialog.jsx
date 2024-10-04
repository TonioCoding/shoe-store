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
      className="h-[65vh] overscroll-contain overflow-y-scroll"
    >
      <DialogHeader>
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
      <DialogBody>
        <div className="w-full flex">
          <Input
            label="Current Password*"
            type="number"
            placeholder="CVV"
            className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "max-w-[20%]" }}
          />
          <Input
            label="Current Password*"
            type="number"
            placeholder="CVV"
            className="w-[50%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <Input
          label="Current Password*"
          type="number"
          placeholder="CVV"
          className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Input
          label="Current Password*"
          type="number"
          placeholder="CVV"
          className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="">
          <Input
            label="Current Password*"
            type="number"
            placeholder="CVV"
            className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <Input
            label="Current Password*"
            type="number"
            placeholder="CVV"
            className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div className="">
          <Input
            label="Current Password*"
            type="number"
            placeholder="CVV"
            className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <Input
            label="Current Password*"
            type="number"
            placeholder="CVV"
            className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <Input
          label="Current Password*"
          type="number"
          placeholder="CVV"
          className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="flex gap-x-3">
          <input type="checkbox" />
          <Typography className="font-rt text-black text-base">
            Set as default payment method
          </Typography>
        </div>
      </DialogBody>
      <DialogFooter>
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
