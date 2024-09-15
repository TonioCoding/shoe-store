import { Input, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import CountriesInput from "./CountriesInput";

const AccountDetailsDisplay = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);

  return (
    <div className="w-[75%] flex flex-col gap-y-8">
      <Typography variant="h5" className="font-lt">
        Account Details
      </Typography>
      <Input
        label="Email*"
        value={userInfo.email}
        color="black"
        style={{ color: "black" }}
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography className="font-semibold">Password</Typography>
          <Typography>*********</Typography>
        </div>
        <Typography className="underline cursor-pointer hover:text-gray-700">
          Edit
        </Typography>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography className="font-semibold">Phone Number</Typography>
        </div>
        <Typography className="underline cursor-pointer hover:text-gray-700">
          Add
        </Typography>
      </div>
      <div className="flex flex-col gap-y-2">
        <Typography className="font-semibold">Location</Typography>
        <CountriesInput />
      </div>
    </div>
  );
};

export default AccountDetailsDisplay;
