import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Input,
  Progress,
  Typography,
} from "@material-tailwind/react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoDash } from "react-icons/go";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { cartTotal } from "../redux/cart/cartSlice";
import { PiCurrencyDollar } from "react-icons/pi";

const CartPage = () => {
  //const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const { cart } = useSelector((state) => state.persistedReducer.cart);
  const { total } = useSelector((state) => state.persistedReducer.cart);

  const [showPromo, setShowPromo] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(cartTotal());

  function handlePromo(state) {
    state === true ? setShowPromo(false) : setShowPromo(true);
  }

  return (
    <main className="w-[100vw] items-center md:items-stretch gap-x-10 flex flex-col justify-center md:mx-1">
      <section className="flex flex-col md:flex-row justify-center my-4 gap-y-5 items-center md:items-start">
        <div className="flex flex-col w-fit md:w-[45%] mr-6">
          <div className="w-full my-3 mb-6 ml-2 md:ml-0">
            <Typography variant="h4" className="font-lt">
              Bag
            </Typography>
            {cart && cart.length < 0 ? (
              <Typography className="font-normal text-sm">
                There are no items in your bag&#46;
              </Typography>
            ) : (
              <Typography className="font-normal text-sm">
                There are <span className="text-red-500">{cart.length}</span>{" "}
                items in your bag&#46;
              </Typography>
            )}
          </div>
          <div className="flex flex-col gap-y-[7rem] overscroll-contain overflow-y-scroll h-[55vh] md:px-2">
            {[...cart].map(
              (
                {
                  name,
                  brand,
                  model,
                  imgUrls,
                  gender,
                  price,
                  shoeSize,
                  colors,
                  _id,
                  quantity,
                },
                index
              ) => {
                return (
                  <CartProduct
                    key={index}
                    name={name}
                    brand={brand}
                    model={model}
                    imgUrls={imgUrls}
                    gender={gender}
                    price={price}
                    shoeSize={shoeSize}
                    colors={colors}
                    _id={_id}
                    index={index}
                    quantity={quantity}
                  />
                );
              }
            )}
          </div>
        </div>
        <div className="w-fit gap-y-2 flex flex-col">
          <Typography variant="h4" className="font-lt">
            Summary
          </Typography>
          <Accordion open={showPromo} onClick={() => handlePromo(showPromo)}>
            <AccordionHeader className="border-b-gray-500">
              <IconContext.Provider value={{ size: "1.3vw" }}>
                <div className="flex text-black items-center gap-x-3">
                  <Typography color="black">
                    Do you have a promo code&#63;
                  </Typography>
                  {showPromo ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </IconContext.Provider>
            </AccordionHeader>
            <AccordionBody>
              <div
                className="flex items-center gap-x-6"
                onClick={(e) => e.stopPropagation()}
              >
                <Input
                  className="min-w-[15vw] !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900"
                  labelProps={{ className: "hidden" }}
                />
                <Button variant="outlined" className="min-w-fit text-gray-600">
                  Apply
                </Button>
              </div>
            </AccordionBody>
          </Accordion>
          <IconContext.Provider value={{ size: "1rem" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                Subtotal
                <BsFillQuestionCircleFill />
              </div>
              {total ? (
                <Typography className="flex items-center">
                  <PiCurrencyDollar />
                  {total}
                </Typography>
              ) : (
                <GoDash />
              )}
            </div>
          </IconContext.Provider>
          <div className="flex justify-between gap-x-8">
            <Typography>Estimated shipping &#38; handling</Typography>
            <Typography>Free</Typography>
          </div>
          <IconContext.Provider value={{ size: "1rem" }}>
            <Typography className="flex items-center justify-between">
              Estimated Tax
              <GoDash />
            </Typography>
          </IconContext.Provider>
          <hr className="my-3 opacity-[0.5]" />
          <IconContext.Provider value={{ size: "1rem" }}>
            <Typography className="flex items-center justify-between">
              Total
              {total ? (
                <Typography className="flex items-center">
                  <PiCurrencyDollar />
                  {total}
                </Typography>
              ) : (
                <GoDash />
              )}
            </Typography>
          </IconContext.Provider>
          <hr className="my-3 opacity-[0.5]" />
          {total >= 50 ? (
            <Typography>Free shipping applied&#33;</Typography>
          ) : (
            <Typography>
              &#36;{50 - total}&#46;00 to go to qualify for free shipping&#33;
            </Typography>
          )}
          <div className="flex items-center gap-x-2">
            <Progress value={total / 0.5} color="green" label="Total" />
            <Typography>&#36;50</Typography>
          </div>
          <div className="flex flex-col gap-y-3 [&>*]:rounded-full [&>*]:w-full self-center mt-5">
            <Button
              className="bg-black text-white"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </Button>
          </div>
        </div>
      </section>
      <section className="my-4 self-start flex flex-col">
        <div className="ml-10">
          <Typography variant="h5">Favorites</Typography>
          <Typography variant="h6" className="font-normal">
            There are no items saved to your favorites&#46;
          </Typography>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
