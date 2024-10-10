import { Input, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import CountriesInput from "./CountriesInput";
import { PropTypes } from "prop-types";

const AccountDetailsDisplay = (props) => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const handlePasswordDialog = props.passwordDialog;
  const handlePhoneNumberDialog = props.phoneNumberDialog;
  const handleEmail = props.emailState;
  const handleLocation = props.locationState;

  return (
    <div className="w-[75%] flex flex-col gap-y-8">
      <Typography variant="h5" className="font-lt">
        Account Details
      </Typography>
      <Input
        onChange={(e) => handleEmail(e.target.value)}
        label={userInfo.email}
        color="black"
        style={{ color: "black" }}
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography className="font-semibold">Password</Typography>
          <Typography>*********</Typography>
        </div>
        <Typography
          onClick={handlePasswordDialog}
          className="underline cursor-pointer hover:text-gray-700"
        >
          Edit
        </Typography>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          {userInfo.phoneNumber === "" ? (
            <Typography className="font-semibold">Phone Number</Typography>
          ) : (
            <Typography className="font-normal font-rt">
              {userInfo.phoneNumber}
            </Typography>
          )}
        </div>
        {userInfo.phoneNumber === "" ? (
          <Typography
            onClick={handlePhoneNumberDialog}
            className="underline cursor-pointer hover:text-gray-700"
          >
            Add
          </Typography>
        ) : (
          <Typography
            onClick={handlePhoneNumberDialog}
            className="underline cursor-pointer hover:text-gray-700"
          >
            Edit
          </Typography>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        <Typography className="font-semibold">Location</Typography>
        <CountriesInput handleLocationState={handleLocation} />
      </div>
    </div>
  );
};
AccountDetailsDisplay.propTypes = {
  passwordDialog: PropTypes.func,
  phoneNumberDialog: PropTypes.func,
  emailState: PropTypes.func,
  locationState: PropTypes.func,
};

export default AccountDetailsDisplay;
