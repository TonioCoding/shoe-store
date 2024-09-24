import { useSelector } from "react-redux";
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

const CartPage = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.cart);
  const [showPromo, setShowPromo] = useState(false);

  function handlePromo(state) {
    state === true ? setShowPromo(false) : setShowPromo(true);
  }

  return (
    <main className="w-[100vw] flex flex-col justify-center mx-1">
      <section className="flex flex-col md:flex-row justify-center my-4 gap-y-5">
        <div className="flex w-[35%]">
          <div className="w-full">
            <Typography variant="h5" className="font-lt">
              Bag
            </Typography>
            <Typography className="font-normal text-xs" variant="h6">
              There are no items in your bag&#46;
            </Typography>
          </div>
        </div>
        <div className="w-fit gap-y-2 flex flex-col">
          <Typography variant="h5" className="font-lt">
            Summary
          </Typography>
          <Accordion open={showPromo} onClick={() => handlePromo(showPromo)}>
            <AccordionHeader className="border-b-black">
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
          <IconContext.Provider value={{ size: "1.3vw" }}>
            <Typography className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                Subtotal
                <BsFillQuestionCircleFill />
              </div>
              <GoDash />
            </Typography>
          </IconContext.Provider>
          <div className="flex justify-between gap-x-8">
            <Typography>Estimated shipping &#38; handling</Typography>
            <Typography>Free</Typography>
          </div>
          <Typography className="flex items-center justify-between">
            Estimated Tax
            <GoDash />
          </Typography>
          <hr className="my-3" />
          <Typography className="flex items-center justify-between">
            Total
            <GoDash />
          </Typography>
          <hr className="my-3" />
          <Typography>
            &#36;50&#46;00 to go qualify for free shipping&#33;
          </Typography>
          <div className="flex items-center">
            <Progress value={50} color="green" />
            <Typography>&#36;50</Typography>
          </div>
          <div className="flex flex-col gap-y-3 [&>*]:rounded-full [&>*]:w-full self-center">
            <Button className="bg-gray-400 text-gray-900">Checkout</Button>
            <Button className="bg-gray-400 border border-gray-700 text-gray-900">
              Paypal
            </Button>
          </div>
        </div>
      </section>
      <section className="my-4">
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
