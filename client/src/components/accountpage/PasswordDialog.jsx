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

const PasswordDialog = (props) => {
  const open = props.open;
  const handleDialog = props.handleDialog;
  return (
    <Dialog open={open}>
      <DialogHeader className="flex justify-between">
        <Typography>Edit Password</Typography>
        <VscChromeClose
          onClick={handleDialog}
          className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1"
        />
      </DialogHeader>
      <DialogBody className="flex flex-col gap-y-8">
        <Input className="" label="Current Password*"></Input>
        <Input className="" label="New Password*"></Input>
        <Input className="" label="Confirm New Password*"></Input>
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
