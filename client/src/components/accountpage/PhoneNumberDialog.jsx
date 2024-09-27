import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { VscChromeClose } from "react-icons/vsc";
import CountriesPhoneNumberInput from "./CountriesPhoneNumberInput";

const PhoneNumberDialog = (props) => {
  const handleDialog = props.handleDialog;
  const open = props.open;
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
        <VscChromeClose
          onClick={handleDialog}
          className="cursor-pointer text-black"
        />
      </DialogHeader>
      <DialogBody className="flex flex-col gap-y-3">
        <Typography color="black">
          We&#39;ll send you a secure&#44; one&#8208;time verification code&#46;
        </Typography>
        <div className="flex flex-col md:flex-row w-full gap-y-3 justify-center">
          <CountriesPhoneNumberInput />
          <Input className="min-w-[1%]" />
        </div>
        <Typography className="text-xs text-gray-600">
          &#42; indicates a required field
        </Typography>
        <div className="flex items-start gap-x-4">
          <input type="checkbox" className="w-7 h-7" />
          <Typography className="text-black">
            Yes I agree to receive a one-time SMS message to verify my
            device&#44; and accept Shoe Store&#39;s Privacy Policy and Terms of
            Use&#46;
          </Typography>
        </div>
      </DialogBody>
      <DialogFooter className="flex items-center justify-center">
        <Typography className="text-gray-600">
          Read Shoe Store&#39; <span className="underline">Privacy Policy</span>
          &#46; and <span className="underline">Terms of Use</span>&#46;
        </Typography>
      </DialogFooter>
    </Dialog>
  );
};

PhoneNumberDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
};

export default PhoneNumberDialog;
