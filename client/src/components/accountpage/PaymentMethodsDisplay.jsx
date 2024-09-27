import { Typography } from "@material-tailwind/react";
import { PropTypes } from "prop-types";

const PaymentMethodsDisplay = (props) => {
  const handlePaymentMethodsDialog = props.paymentMethodsDialog;
  return (
    <div className="flex flex-col w-fit gap-y-5">
      <Typography className="font-lt" variant="h5">
        Saved Payment Methods
      </Typography>
      <Typography className="font-rt text-sm">
        You currently don&#39;t have any saved payment methods. Add a method
        here to be prefilled for quicker checkout.
      </Typography>
      <div
        onClick={handlePaymentMethodsDialog}
        className="place-self-end text-xs w-fit px-3 bg-black text-white text-center p-2 font-lt rounded-2xl transition-all ease-in-out duration-300 hover:bg-gray-600 shadow-xl cursor-pointer"
      >
        Add Payment Method
      </div>
    </div>
  );
};

PaymentMethodsDisplay.propTypes = {
  paymentMethodsDialog: PropTypes.func,
};

export default PaymentMethodsDisplay;
