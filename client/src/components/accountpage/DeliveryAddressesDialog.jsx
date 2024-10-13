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
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DeliveryAddressesDialog = (props) => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const open = props.open;
  const handleDialog = props.handleDialog;
  const [deliveryAddress, setDeliveryAddress] = useState({
    firstName: null,
    lastName: null,
    streetAddress: null,
    typeOfBuilding: null,
    city: null,
    zip: null,
    state: null,
    countryRegion: null,
    phoneNumber: null,
  });

  function setDeliveryAddressProp(prop, value) {
    setDeliveryAddress((prev) => ({ ...prev, [prop]: value }));
  }

  function handleDisableButton() {
    let isEmptyProp = false;
    let values = Object.values(deliveryAddress);
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

  async function addDeliveryAddress() {
    if (
      deliveryAddress.firstName !== null ||
      deliveryAddress.lastName !== null ||
      deliveryAddress.streetAddress !== null ||
      deliveryAddress.city !== null ||
      deliveryAddress.zip !== null ||
      deliveryAddress.state !== null ||
      deliveryAddress.countryRegion !== null
    ) {
      try {
        const req = fetch("/api/v1/users/addDeliveryAddress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userInfo._id,
            deliveryAddress: deliveryAddress,
          }),
        }).catch((err) => console.log(err));

        const res = (await req)
          .json()
          .then(toast.success("Delivery address added"))
          .then(handleDialog())
          .catch((err) => toast.error(err));
      } catch (error) {
        toast.error(error);
      }
    } else {
      handleDialog();
      toast.error("Please provide all fields");
    }
  }

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
            onChange={(e) =>
              setDeliveryAddressProp("firstName", e.target.value)
            }
            type="text"
            placeholder="First Name*"
            className="min-w-[150px] w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:text-sm focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            onChange={(e) => setDeliveryAddressProp("lastName", e.target.value)}
            type="text"
            placeholder="Last Name*"
            className="min-w-[150px] w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:text-sm focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
        <Input
          onChange={(e) =>
            setDeliveryAddressProp("streetAddress", e.target.value)
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
            setDeliveryAddressProp("typeOfBuilding", e.target.value)
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
            onChange={(e) => setDeliveryAddressProp("city", e.target.value)}
            type="text"
            placeholder="City*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            onChange={(e) =>
              setDeliveryAddressProp("zip", parseInt(e.target.value))
            }
            type="number"
            placeholder="Zip*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
        <div className="flex flex-col gap-y-4 items-center sm:flex-row gap-x-5 justify-center">
          <input
            onChange={(e) => setDeliveryAddressProp("state", e.target.value)}
            type="text"
            placeholder="State*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
          <input
            onChange={(e) =>
              setDeliveryAddressProp("countryRegion", e.target.value)
            }
            type="text"
            placeholder="Country/Region*"
            className="min-w-[150px] placeholder:text-sm w-[35%] !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md pl-3 p-1"
          />
        </div>
        <Input
          onChange={(e) =>
            setDeliveryAddressProp("phoneNumber", parseInt(e.target.value))
          }
          label="Current Password*"
          type="number"
          placeholder="Phone Number*"
          className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
      </DialogBody>
      <DialogFooter className="p-0">
        <Button
          onClick={addDeliveryAddress}
          className="rounded-full self-end my-4 bg-gray-400 text-gray-700 mr-5"
          disabled={handleDisableButton() == true ? true : false}
        >
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
