import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { IconContext } from "react-icons";
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";
import { useState } from "react";

const BillingAddressDialog = (props) => {
  const open = props.open;
  const handleDialog = props.handleDialog;
  const addBillingAddress = props.addBillingAddress;
  const [billingAddress, setBillingAddress] = useState({
    firstName: null,
    lastName: null,
    streetAddress: null,
    typeOfBuilding: null,
    city: null,
    zip: null,
    state: null,
    countryRegion: null,
  });

  function setBillingAddressProp(prop, value) {
    setBillingAddress((prev) => ({ ...prev, [prop]: value }));
  }

  function handleDisableButton() {
    let isEmptyProp = false;
    let values = Object.values(billingAddress);
    for (let value of values) {
      if (value === null || value === "") {
        isEmptyProp = true;
        continue;
      } else if (value.length > 0) {
        isEmptyProp = false;
        break;
      }
    }
    return isEmptyProp;
  }

  return (
    <Dialog
      open={open}
      size="xs"
      className="h-[65vh] overscroll-contain overflow-y-scroll px-5"
    >
      <DialogHeader className="flex justify-between">
        <Typography className="font-lt" variant="h5" color="black">
          Billing Address
        </Typography>
        <IconContext.Provider value={{ size: "2rem" }}>
          <VscChromeClose
            className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1"
            onClick={() => {
              addBillingAddress(null);
              handleDialog();
            }}
          />
        </IconContext.Provider>
      </DialogHeader>
      <DialogBody className="flex flex-col gap-y-5 items-center">
        <div className="flex flex-col gap-y-4 items-center sm:flex-row gap-x-5 justify-center">
          <input
            onChange={(e) => setBillingAddressProp("firstName", e.target.value)}
            type="text"
            placeholder="First Name*"
            className="min-w-[150px] w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:text-sm focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            onChange={(e) => setBillingAddressProp("lastName", e.target.value)}
            type="text"
            placeholder="Last Name*"
            className="min-w-[150px] w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:text-sm focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
        <Input
          onChange={(e) =>
            setBillingAddressProp("streetAddress", e.target.value)
          }
          type="text"
          placeholder="Street Address*"
          className="self-center !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Input
          onChange={(e) =>
            setBillingAddressProp("typeOfBuilding", e.target.value)
          }
          type="text"
          placeholder="Apt, Suite, Building"
          className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="flex flex-col gap-y-4 items-center sm:flex-row gap-x-5 justify-center">
          <input
            onChange={(e) => setBillingAddressProp("city", e.target.value)}
            type="text"
            placeholder="City*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            onChange={(e) =>
              setBillingAddressProp("zip", parseInt(e.target.value))
            }
            type="number"
            placeholder="Zip*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
        <div className="flex flex-col gap-y-4 items-center sm:flex-row gap-x-5 justify-center">
          <input
            onChange={(e) => setBillingAddressProp("state", e.target.value)}
            type="text"
            placeholder="State*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            onChange={(e) =>
              setBillingAddressProp("countryRegion", e.target.value)
            }
            type="text"
            placeholder="Country/Region*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
      </DialogBody>
      <DialogFooter className="p-0">
        <Button
          disabled={handleDisableButton() === true ? true : false}
          className="rounded-full self-end my-4 bg-gray-400 text-gray-700 mr-5"
          onClick={() => {
            if (
              !billingAddress.city ||
              !billingAddress.firstName ||
              !billingAddress.lastName ||
              !billingAddress.zip ||
              !billingAddress.countryRegion ||
              !billingAddress.state ||
              !billingAddress.streetAddress
            ) {
              handleDialog();
            } else {
              addBillingAddress(billingAddress);
              setBillingAddress({
                firstName: null,
                lastName: null,
                streetAddress: null,
                typeOfBuilding: null,
                city: null,
                zip: null,
                state: null,
                countryRegion: null,
              });
              handleDialog();
            }
          }}
        >
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

BillingAddressDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
  addBillingAddress: PropTypes.func,
};

export default BillingAddressDialog;
