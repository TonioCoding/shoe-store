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

const PasswordDialog = (props) => {
  const open = props.open;
  const handleDialog = props.handleDialog;
  return (
    <Dialog open={open} size="xs">
      <DialogHeader className="flex justify-between">
        <Typography className="font-lt" variant="h5">
          Edit Password
        </Typography>
        <IconContext.Provider value={{ size: "2rem" }}>
          <VscChromeClose
            onClick={handleDialog}
            className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1"
          />
        </IconContext.Provider>
      </DialogHeader>
      <DialogBody className="flex flex-col gap-y-8">
        <Input
          label="Current Password*"
          type="password"
          placeholder="Current Password*"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Input
          label="New Password*"
          type="password"
          placeholder="New Password*"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Input
          label="Confirm New Password*"
          type="password"
          placeholder="Confirm New Password*"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
      </DialogBody>
      <DialogFooter className="flex justify-end">
        <Button className="rounded-full self-end my-4 bg-gray-400 text-gray-700">
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

PasswordDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
};

export default PasswordDialog;
