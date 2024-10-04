import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

const DeliveryAddressesDialog = (props) => {
  const open = props.open;
  const handleDialog = props.handleDialog;

  return (
    <Dialog open={open}>
      <DialogHeader>
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
      <DialogBody></DialogBody>
      <DialogFooter></DialogFooter>
    </Dialog>
  );
};

DeliveryAddressesDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
};

export default DeliveryAddressesDialog;
