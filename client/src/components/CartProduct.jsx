import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const CartProduct = (props) => {
  return (
    <div>
      <div className="w-full flex bg-gray-200 border-fade shadow-2xl">
        <img src={props.imgUrls[0]} className="w-[25%] border" />
        <div className="mx-2">
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
      <div className=""></div>
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
};

export default CartProduct;
