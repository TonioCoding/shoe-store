import { Typography } from "@material-tailwind/react";
import { PiCurrencyDollar } from "react-icons/pi";
import { FaTags } from "react-icons/fa";
import { PropTypes } from "prop-types";

const ShoeCard = (props) => {
  const shoeColors = props.colors;
  const shoePrice = props.price;
  const shoeName = props.name;
  const shoeImgUrls = props.imgUrls;
  const shoeModel = props.model;
  // const shoeSizesNotInStock = props.sizesNotInStock;
  const shoeOnSale = props.onSale;

  return (
    <div className="w-[30%] cursor-pointer my-3 mb-[5rem]">
      <img
        src={shoeImgUrls[0]}
        className="object-scale-down border-2 border-gray-400 min-h-fit"
      />
      <div className="mx-4 my-4 flex flex-col items-start gap-y-4">
        {shoeOnSale === true ? (
          <Typography className="text-green-500 font-rt text-[1.1rem] flex items-center gap-x-1">
            Sale
            <FaTags className="text-sm" />
          </Typography>
        ) : null}
        <Typography className="font-lt text-[1.25rem] text-wrap">
          {shoeModel} {shoeName}
        </Typography>
        {shoeColors
          ? shoeColors.map((value) => {
              return <Typography key={value}>{value}</Typography>;
            })
          : null}
        <Typography className="font-rt flex items-center text-md">
          <PiCurrencyDollar />
          {shoePrice}
        </Typography>
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  colors: PropTypes.array,
  price: PropTypes.number,
  onSale: PropTypes.boolean,
  sizesNotInStock: PropTypes.array,
  name: PropTypes.string,
  model: PropTypes.string,
  imgUrls: PropTypes.array,
};
export default ShoeCard;
