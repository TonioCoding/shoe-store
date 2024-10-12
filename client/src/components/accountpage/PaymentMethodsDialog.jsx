import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useEffect, useReducer, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { VscChromeClose } from "react-icons/vsc";
import { toast } from "react-toastify";
import BillingAddressDialog from "./BillingAddressDialog";

const PaymentMethodsDialog = (props) => {
  const handleDialog = props.handleDialog;
  const open = props.open;
  const paymentMethod = useRef({
    cardNumber: null,
    expirationDate: null,
    cvv: null,
  });
  const [billingAddress, setBillingAddress] = useState(null);
  const [openBillingAddress, setOpenBillingAddress] = useState(false);

  function reducerFunction(state, action) {
    switch (action.type) {
      case "UPDATE":
        return (state = action);
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFunction, paymentMethod.current);

  function updateState(state) {
    dispatch({ type: "UPDATE", state });
  }

  async function addPaymentMethod() {
    if (
      paymentMethod.cardNumber !== null ||
      paymentMethod.expirationDate !== null ||
      paymentMethod.ccv !== null
    ) {
      try {
        const req = fetch("/api/v1/users/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentMethod),
        });

        const res = (await req)
          .json()
          .then(toast.success("Payment Method added"))
          .then(handleDialog());
      } catch (error) {
        toast.error(error);
      }
    } else {
      handleDialog();
      toast.error("Please provide all fields");
    }
  }

  function handleBillingAddressDialog() {
    openBillingAddress === false;

    if (openBillingAddress === false) {
      setOpenBillingAddress(true);
    } else {
      setOpenBillingAddress(false);
    }
    handleDialog();
  }

  function addBillingAddress(address) {
    setBillingAddress(address);
  }

  function clearPaymentMethodRef() {
    paymentMethod.current.cardNumber = null;
    paymentMethod.current.expirationDate = null;
    paymentMethod.current.cvv = null;
  }

  function handleDisableButton() {
    if (state.state) {
      let values = Object.values(state.state);
      if (values.includes(null) === true) return true;
      if (values.includes("") === true) return true;
      return false;
    }
  }

  useEffect(() => {
    updateState(paymentMethod.current);
  }, []);
  return (
    <>
      <BillingAddressDialog
        open={openBillingAddress}
        handleDialog={handleBillingAddressDialog}
        addBillingAddress={addBillingAddress}
      />
      <Dialog
        open={open}
        size="xs"
        className={
          openBillingAddress === false
            ? "h-fit overscroll-contain overflow-y-auto"
            : "hidden"
        }
      >
        <DialogHeader className="flex justify-between relative">
          <Typography className="font-lt" variant="h5" color="black">
            Add Payment Method
          </Typography>
          <IconContext.Provider value={{ size: "2rem" }}>
            <VscChromeClose
              onClick={() => {
                clearPaymentMethodRef();
                handleDialog();
              }}
              className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1"
            />
          </IconContext.Provider>
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-y-4 border p-4 border-gray-300">
            <Input
              onChange={(e) => {
                updateState(paymentMethod.current);
                paymentMethod.current.cardNumber = e.target.value;
              }}
              value={paymentMethod.current.cardNumber || null}
              type="number"
              placeholder="Card Number"
              className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            <Input
              onChange={(e) => {
                updateState(paymentMethod.current);
                paymentMethod.current.expirationDate = e.target.value;
              }}
              value={paymentMethod.current.expirationDate || null}
              type="month"
              className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            <Input
              onChange={(e) => {
                updateState(paymentMethod.current);
                paymentMethod.current.cvv = e.target.value;
              }}
              value={paymentMethod.current.cvv || null}
              type="number"
              placeholder="CVV"
              className="!border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <Button
            className="mt-5 rounded-full bg-white text-black border border-gray-300 hover:border-black"
            onClick={handleBillingAddressDialog}
          >
            <Typography className="text-xs font-rt">
              Add Billing Address
            </Typography>
          </Button>
          <div className="flex flex-col my-8 ml-10">
            <div className="flex gap-x-3">
              <input
                type="checkbox"
                disabled={billingAddress === null ? true : false}
              />
              <Typography
                className={
                  billingAddress === null
                    ? "font-rt text-gray-400 text-base"
                    : "font-rt text-black text-base"
                }
              >
                Billing address same as default shipping address
              </Typography>
            </div>
            <div className="flex gap-x-3">
              <input
                type="checkbox"
                disabled={handleDisableButton() === true ? true : false}
              />
              <Typography
                className={
                  handleDisableButton() === false
                    ? "font-rt text-black text-base"
                    : "font-rt text-gray-500 text-base"
                }
              >
                Set as default payment method
              </Typography>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="p-0">
          <Button
            className="rounded-full self-end my-4 bg-gray-400 text-gray-700 mr-5"
            onClick={addPaymentMethod}
          >
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

PaymentMethodsDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
};

export default PaymentMethodsDialog;
