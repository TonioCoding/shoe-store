import { Typography } from "@material-tailwind/react";
import { PropTypes } from "prop-types";

const DeliveryAddressesDisplay = (props) => {
  const handleDeliveryAddressesDialog = props.deliveryAddressesDialog;
  return (
    <div className="flex flex-col w-fit gap-y-5">
      <Typography className="font-lt" variant="h5">
        Saved Delivery Addresses
      </Typography>
      <Typography className="font-rt text-sm">
        You currently don&#39;t have any saved delivery addresses. Add an
        address here to be prefilled for quicker checkout&#46;
      </Typography>
      <div
        onClick={handleDeliveryAddressesDialog}
        className="place-self-end text-xs w-fit px-3 bg-black text-white text-center p-2 font-lt rounded-2xl transition-all ease-in-out duration-300 hover:bg-gray-600 shadow-xl cursor-pointer"
      >
        Add Address
      </div>
    </div>
  );
};

DeliveryAddressesDisplay.propTypes = {
  deliveryAddressesDialog: PropTypes.func,
};

export default DeliveryAddressesDisplay;
