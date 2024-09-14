import { Input, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import CountriesInput from "./CountriesInput";

const AccountDetailsDisplay = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  console.log(userInfo);

  return (
    <div className="w-full flex flex-col gap-y-8">
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
        <Typography className="underline cursor-pointer">Edit</Typography>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography className="font-semibold">Phone Number</Typography>
        </div>
        <Typography className="underline cursor-pointer">Add</Typography>
      </div>
      <div className="flex flex-col">
        <Typography className="font-semibold">Location</Typography>
        <div className="">
          <CountriesInput />
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsDisplay;
