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
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SizeBadge from "../components/SizeBadge";
import { IconContext } from "react-icons/lib";

const ShoePage = () => {
  const url = new URL(location.href);
  const urlId = url.searchParams.get("id");
  const [currentShoe, setCurrentShoe] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [showReview, setShowReview] = useState(false);
  const [recommendedShoes, setRecommendedShoes] = useState(null);

  console.log(currentShoe);
  console.log(recommendedShoes);

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

  useEffect(() => {
    function getRandomElements(arr) {
      let foundElements = new Set();
      let ans = [];
      let ans2 = [];
      let lengthOfArr = [...arr].length;

      for (let i = 0; i < 9; i++) {
        let randomlySelectedIndex = Math.floor(Math.random() * lengthOfArr);

        if (foundElements.has(randomlySelectedIndex) === false) {
          foundElements.add(randomlySelectedIndex);
        } else {
          continue;
        }
      }

      ans = [...foundElements];

      ans.forEach((index) => {
        ans2.push(arr[index]);
      });
      return ans2;
    }

    async function recommendShoes() {
      try {
        fetch(`http://localhost:9000/api/v1/shoe/get-shoes/Nike`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setRecommendedShoes(getRandomElements(data));
          })
          .catch((err) => console.log(err));
      } catch (error) {
        toast.error(error);
      }
    }

    recommendShoes();
  }, [currentShoe]);

  return (
    <main className="w-full h-fit my-10 mt-28">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col lg:flex-row gap-x-5 lg:justify-end w-fit">
          <div className="hidden lg:flex flex-row lg:flex-col overscroll-contain overflow-y-auto gap-x-3">
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
          <div className="relative w-full lg:w-[60vh] h-fit">
            <img
              src={currentShoe !== null ? currentImage : null}
              className="w-full h-full object-scale-down border-2 border-gray-400 rounded-lg"
            />
            <div className="flex items-center gap-x-2 text-[2.4rem] absolute right-10 bottom-10">
              <IoIosArrowBack className="text-black bg-gray-300 rounded-full p-2 cursor-pointer" />
              <IoIosArrowForward className="text-black bg-gray-300 rounded-full p-2 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full lg:max-w-[35%] lg:h-[100vh] lg:overscroll-contain lg:overflow-y-auto lg:ml-5 mt-7 px-2 self-center">
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
          <div className="flex flex-col w-full lg:w-fit self-center">
            <div className="flex items-center justify-between gap-x-10 my-3 mx-10 lg:mx-0">
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
            <div className="w-fit self-center flex flex-wrap flex-row lg:grid grid-cols-2 place-items-center gap-x-4 gap-y-1 justify-center">
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
          <div className="flex flex-col gap-y-3 mt-4 items-center">
            <Button className="rounded-3xl border-[1px] border-gray-500 hover:cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out lg:min-w-fit w-[75%]">
              <Typography className="text-[1.2em]">Add To Cart</Typography>
            </Button>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <Button
                className="flex items-center justify-center gap-x-2 rounded-3xl border-[1px] border-gray-500 hover:cursor-pointer transition-all duration-300 ease-in-out hover:border-black lg:min-w-fit w-[75%]"
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
            className="mb-10"
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
      <div className="flex flex-col">
        <Typography variant="h4" className="font-thin ml-10">
          You may also like
        </Typography>
        <div className="overscroll-contain overflow-x-auto"></div>
      </div>
    </main>
  );
};

export default ShoePage;
