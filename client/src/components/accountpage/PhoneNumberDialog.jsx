import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { VscChromeClose } from "react-icons/vsc";
import CountriesPhoneNumberInput from "./CountriesPhoneNumberInput";
import { IconContext } from "react-icons";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/auth/authSlice";

const PhoneNumberDialog = (props) => {
  const handleDialog = props.handleDialog;
  const open = props.open;
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [userAgreement, setUserAgreement] = useState(false);
  const dispatch = useDispatch();

  async function addPhoneNumber() {
    if (phoneNumber !== null) {
      try {
        const req = fetch("/api/v1/users/addPhoneNumber", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber: phoneNumber }),
        });

        const res = (await req)
          .json()
          .then((data) => dispatch(setCredentials(data)))
          .then(handleDialog())
          .then(toast.success("Phone Number added"));
      } catch (error) {
        toast.error(error);
      }
    } else {
      handleDialog();
      toast.error("No phone number was provided to add");
    }
  }
  console.log(phoneNumber);
  return (
    <Dialog
      open={open}
      size="xs"
      className="flex-col justify-center items-center"
    >
      <DialogHeader className="flex justify-around">
        <Typography variant="h5" className="font-lt text-black">
          Verify your mobile phone number
        </Typography>
        <IconContext.Provider value={{ size: "2rem" }}>
          <VscChromeClose
            onClick={handleDialog}
            className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1"
          />
        </IconContext.Provider>
      </DialogHeader>
      <DialogBody className="flex flex-col gap-y-3 items-center">
        <Typography color="black">
          We&#39;ll send you a secure&#44; one&#8208;time verification code&#46;
        </Typography>
        <div className="relative flex flex-col w-fit gap-y-3 self-center">
          <CountriesPhoneNumberInput />
          <input
            id="phone-number-input"
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-500 rounded-2xl focus:border-red-500 w-[75%] px-1 caret-black text-black p-1 mx-1 font-rt "
            placeholder="e.g. 243678769*"
          />
        </div>
        <Typography className="text-xs text-gray-600">
          &#42; indicates a required field
        </Typography>
        <div className="flex items-start gap-x-4">
          <input
            type="checkbox"
            className="w-7 h-7"
            onClick={() => {
              userAgreement === false
                ? setUserAgreement(true)
                : setUserAgreement(false);
            }}
          />
          <Typography className="text-black">
            Yes I agree to receive a one-time SMS message to verify my
            device&#44; and accept Shoe Store&#39;s Privacy Policy and Terms of
            Use&#46;
          </Typography>
        </div>
      </DialogBody>
      <DialogFooter className="flex flex-col items-center justify-center">
        <Typography className="text-gray-600">
          Read Shoe Store&#39;{" "}
          <span className="underline hover:cursor-pointer">Privacy Policy</span>
          &#46; and{" "}
          <span className="underline hover:cursor-pointer">Terms of Use</span>
          &#46;
        </Typography>
        <Button
          disabled={
            phoneNumber === "" ||
            phoneNumber === null ||
            userAgreement === false
              ? true
              : false
          }
          className={
            phoneNumber === "" ||
            phoneNumber === null ||
            userAgreement === false
              ? "rounded-full self-end my-4 bg-gray-400 text-gray-700"
              : "rounded-full self-end my-4 bg-black text-white"
          }
          onClick={addPhoneNumber}
        >
          Send Code
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

PhoneNumberDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
};

export default PhoneNumberDialog;
