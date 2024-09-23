import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Progress,
  Typography,
} from "@material-tailwind/react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
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
            <Typography variant="h5">Bag</Typography>
            <Typography className="ml-2">
              There are no items in your bag&#46;
            </Typography>
          </div>
        </div>
        <div className="">
          <Typography variant="h5">Summary</Typography>
          <Accordion open={showPromo} onClick={() => handlePromo(showPromo)}>
            <AccordionHeader>
              <IconContext.Provider value={{ size: "1.3vw" }}>
                <div className="flex text-black items-center gap-x-3">
                  <Typography color="black">
                    Do you have a promo code&#63;
                  </Typography>
                  <BsFillQuestionCircleFill />
                </div>
              </IconContext.Provider>
            </AccordionHeader>
            <AccordionBody>hey</AccordionBody>
          </Accordion>
          <Typography className="flex items-center justify-between">
            Subtotal
            <GoDash />
          </Typography>
          <div className="flex justify-between gap-x-8">
            <Typography>estimated shipping & handling</Typography>
            <Typography>free</Typography>
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
          <Typography>$50.00 to go qualify for free shipping!</Typography>
          <div className="flex items-center">
            <Progress value={50} color="green" />
            <Typography>$50</Typography>
          </div>
          <div className="flex flex-col gap-y-2 [&>*]:rounded-full">
            <Button>Checkout</Button>
            <Button>Paypal</Button>
          </div>
        </div>
      </section>
      <section className="my-4">
        <div className="ml-10">
          <Typography variant="h5">Favorites</Typography>
          <Typography variant="h6" className="font-normal">
            There are no items saved to your favorites.
          </Typography>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
