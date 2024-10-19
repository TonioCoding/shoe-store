import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { BsTrash3 } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { PiCurrencyDollar } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const CartProduct = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/shoe-page/?id=${props._id}`)}
      className="flex relative justify-between bg-gray-200 border-fade shadow-lg border border-gray-100 hover:cursor-pointer"
    >
      <div className="w-full flex">
        <img src={props.imgUrls[0]} className="w-[25%] border" />
        <div className="m-2">
          <Typography className="">
            {props.brand} {props.model} &#34;{props.name}&#34;
          </Typography>
          <Typography className="text-gray-700 text-sm">{`${props.gender}'s`}</Typography>
          <Typography className="text-gray-700">
            {[...props.colors].map((element, index) => {
              if (index !== props.colors.length - 1) {
                return (
                  <span className="font-rt text-sm" key={index}>
                    {" "}
                    {element}&#47;
                  </span>
                );
              } else {
                return (
                  <span className="font-rt text-sm" key={index}>
                    {" "}
                    {element}
                  </span>
                );
              }
            })}
          </Typography>
          <div className="flex items-center text-gray-700 gap-x-2 [&>*]:text-sm">
            <Typography>Size</Typography>
            <Typography className="underline">
              M {props.shoeSize} &#47; W {props.shoeSize + 1.5}{" "}
            </Typography>
          </div>
        </div>
      </div>
      <div className="">
        <div className="place-self-end m-1 mx-2">
          <Typography
            className="flex items-center gap-x-1 font-rt"
            variant="h6"
          >
            <PiCurrencyDollar />
            {props.price}
          </Typography>
        </div>
      </div>
      <IconContext.Provider value={{ size: "1.2vw" }}>
        <div className="absolute flex items-center gap-x-6 -bottom-[40%] md:-bottom-[50%]">
          <div className="flex items-center justify-between gap-x-4 text-base border border-gray-400 rounded-full py-2 px-3">
            <BsTrash3 className="hover:text-red-500 transition-all ease-in duration-400" />
            <Typography className="font-lt text-base">1</Typography>
            <FaPlus className="hover:text-green-500 transition-all ease-in duration-400" />
          </div>
          <div className="border border-gray-400 rounded-full py-2 px-2">
            <GoHeartFill className="hover:text-red-500 transition-all ease-in duration-400" />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

CartProduct.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  imgUrls: PropTypes.array,
  gender: PropTypes.string,
  price: PropTypes.number,
  shoeSize: PropTypes.number,
  colors: PropTypes.string,
  _id: PropTypes.string,
};

export default CartProduct;
