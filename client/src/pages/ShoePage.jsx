import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineAttachMoney, MdStar } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import SizeBadge from "../components/SizeBadge";
import { IconContext } from "react-icons/lib";

const ShoePage = () => {
  const url = new URL(location.href);
  const urlId = url.searchParams.get("id");
  const [currentShoe, setCurrentShoe] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [showReview, setShowReview] = useState(false);

  console.log(currentShoe);

  useEffect(() => {
    async function getShoe() {
      try {
        fetch(`http://localhost:9000/api/v1/shoe/get-shoe/${urlId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setCurrentShoe(data);
            setCurrentImage(data.imgUrls[0]);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        toast.error(error);
      }
    }

    getShoe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full h-fit my-10 mt-28">
      <div className="flex justify-center mr-[15%]">
        <div className="flex gap-x-5 justify-end w-[60%]">
          <div className="flex-col overscroll-contain overflow-y-auto">
            {currentShoe !== null
              ? currentShoe.imgUrls.map((img, index) => {
                  return (
                    <img
                      onClick={() => setCurrentImage(img)}
                      key={index}
                      src={img}
                      className="w-[5vw] border-2 border-gray-400 object-cover mb-3 rounded-lg cursor-pointer hover:shadow-xl hover:border-gray-500 transition-all ease-in-out duration-300"
                    />
                  );
                })
              : null}
          </div>
          <img
            src={currentShoe !== null ? currentImage : null}
            className="w-[60%] h-fit object-scale-down border-2 border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-2 max-w-[35%] h-[100vh] overscroll-contain overflow-y-auto ml-5 px-2 ">
          <Typography>
            {currentShoe !== null ? (
              <Typography variant="h4" className="font-normal">
                {currentShoe.brand} {currentShoe.model}
              </Typography>
            ) : null}
          </Typography>
          <Typography>
            {currentShoe !== null ? (
              <Typography variant="small" className="font-light">
                {currentShoe.gender}&#39;s {currentShoe.typeOfShoe} Shoe
              </Typography>
            ) : null}
          </Typography>
          <Typography className="flex items-center my-2 mb-0 font-semibold text-lg">
            <MdOutlineAttachMoney />
            {currentShoe !== null ? currentShoe.price : null}
          </Typography>
          <div className="flex flex-col w-fit self-center">
            <div className="flex items-center justify-between gap-x-10 my-3">
              <Typography
                color="black"
                variant="h6"
                className="hover:cursor-pointer"
              >
                Select size
              </Typography>
              <Typography
                color="gray"
                variant="h6"
                className="hover:cursor-pointer"
              >
                Size Guide
              </Typography>
            </div>
            <div className="w-fit self-center grid grid-cols-2 place-items-center gap-x-4 gap-y-1">
              <SizeBadge size={7} />
              <SizeBadge size={7.5} />
              <SizeBadge size={8} />
              <SizeBadge size={8.5} />
              <SizeBadge size={9} />
              <SizeBadge size={9.5} />
              <SizeBadge size={10} />
              <SizeBadge size={10.5} />
              <SizeBadge size={11} />
              <SizeBadge size={11.5} />
              <SizeBadge size={12} />
              <SizeBadge size={12.5} />
              <SizeBadge size={13} />
              <SizeBadge size={13.5} />
              <SizeBadge size={14} />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 mt-4">
            <Button className="rounded-3xl border-[1px] border-gray-500 hover:cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out">
              <Typography className="text-[1.2em]">Add To Cart</Typography>
            </Button>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <Button
                className="flex items-center justify-center gap-x-2 rounded-3xl border-[1px] border-gray-500 hover:cursor-pointer transition-all duration-300 ease-in-out hover:border-black"
                color="white"
              >
                <Typography className="text-[1.2em] text-black">
                  Favorite
                </Typography>
                <TiHeartFullOutline className="txt-lg" />
              </Button>
            </IconContext.Provider>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-1 mt-4 mb-7">
              <Typography className="font-semibold" variant="h6">
                Shipping
              </Typography>
              <Typography className="font-normal" variant="h6">
                You&#39;ll see our shipping options at checkout&#46;
              </Typography>
            </div>
            <Typography className="inline-block">
              The radiance lives on in the Nike Air Force 1 &#39;07&#44; the
              b-ball OG that puts a fresh spin on what you know best&#58;
              durably stitched overlays&#44; clean finishes and the perfect
              amount of flash to make you shine&#46;
            </Typography>
          </div>
          <Typography
            className="mt-3 underline font-semibold hover:text-gray-600 cursor-pointer"
            color="black"
            variant="h6"
          >
            View Product details
          </Typography>
          <Accordion
            open={showReview}
            onClick={() => {
              if (showReview === false) {
                setShowReview(true);
              } else {
                setShowReview(false);
              }
            }}
          >
            <AccordionHeader>
              <Typography variant="h5" color="black" className="font-normal">
                Reviews &#40;12&#41;
              </Typography>
            </AccordionHeader>
            <AccordionBody>
              <div className="flex items-center gap-x-3 mb-3">
                <div className="flex text-lg text-black">
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </div>
                <Typography className="text-lg text-black">5 Stars</Typography>
              </div>
              <Typography
                className="underline font-normal hover:text-gray-600 cursor-pointer"
                color="black"
                variant="h6"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Write a review
              </Typography>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default ShoePage;
