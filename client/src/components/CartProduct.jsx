import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { BsTrash3 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { PiCurrencyDollar } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItemFromCart } from "../redux/cart/cartSlice";
import { useEffect, useState } from "react";

const CartProduct = (props) => {
  const { favorites } = useSelector(
    (state) => state.persistedReducer.favorites
  );
  const { cart } = useSelector((state) => state.persistedReducer.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [favoritesHasProduct, setFavoritesHasProduct] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function decrementQuantity() {
    setQuantity((prev) => (prev -= 1));
  }

  function incrementQuantity() {
    if (quantity < 9) setQuantity((prev) => (prev += 1));
  }

  useEffect(() => {
    function favoritesHasProduct() {
      if (props._id) {
        for (let product of favorites) {
          if (product._id === props._id) {
            setFavoritesHasProduct(true);
          }
        }
      }
    }

    favoritesHasProduct();
  }, [favorites, props, cart]);

  return (
    <div
      onClick={() => navigate(`/shoe-page/?id=${props._id}`)}
      className="flex relative justify-between bg-gray-200 border-fade shadow-lg border border-gray-100 hover:cursor-pointer"
    >
      <div className="w-full flex">
        <img src={props.imgUrls[0]} className="w-[25%] border" />
        <div className="m-2">
          <Typography className="">
            {props.brand} {props.model}{" "}
            {props.name ? <>&#34;{props.name}&#34;</> : null}
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
            className="flex items-center gap-x-1 font-rt text-[1.1rem] font-normal"
            variant="h6"
          >
            <PiCurrencyDollar />
            {props.price * quantity}
          </Typography>
        </div>
      </div>
      <IconContext.Provider value={{ size: "1rem" }}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute flex items-center gap-x-6 -bottom-[60%] md:-bottom-[50%]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between gap-x-4 text-base border border-gray-400 rounded-full py-2 px-3"
          >
            {quantity > 1 ? (
              <FaMinus
                onClick={(e) => {
                  e.stopPropagation();
                  decrementQuantity();
                }}
                className="hover:text-red-500 transition-all ease-in duration-400"
              />
            ) : (
              <BsTrash3
                onClick={(e) => {
                  e.stopPropagation();
                  if (cart) {
                    dispatch(removeItemFromCart(cart[props.index]));
                  }
                }}
                className="hover:text-red-500 transition-all ease-in duration-400"
              />
            )}
            <Typography className="font-lt text-base">{quantity}</Typography>
            <FaPlus
              onClick={(e) => {
                e.stopPropagation();
                incrementQuantity();
              }}
              className="hover:text-green-500 transition-all ease-in duration-400"
            />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-400 rounded-full py-2 px-2"
          >
            <GoHeartFill
              className={
                favoritesHasProduct === true
                  ? "text-red-500 cursor-not-allowed"
                  : "hover:text-red-500 transition-all ease-in duration-400"
              }
            />
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
  index: PropTypes.number,
  quantity: PropTypes.number,
};

export default CartProduct;
