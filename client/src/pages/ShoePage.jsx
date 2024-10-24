import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineAttachMoney, MdStar, MdStarOutline } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SizeBadge from "../components/SizeBadge";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../redux/cart/cartSlice.js";
import { addItem } from "../redux/favorites/favoritesSlice.js";
import WriteReviewDialog from "../components/WriteReviewDialog.jsx";

const ShoePage = () => {
  const { cart } = useSelector((state) => state.persistedReducer.cart);
  const { favorites } = useSelector(
    (state) => state.persistedReducer.favorites
  );
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const url = new URL(location.href);
  const urlId = url.searchParams.get("id");
  const [currentShoe, setCurrentShoe] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [shoeImages, setShoeImages] = useState(null);
  const [showReview, setShowReview] = useState(false);
  const [recommendedShoes, setRecommendedShoes] = useState(null);
  const [shoeSize, setShoeSize] = useState(null);
  const dispatch = useDispatch();
  const [cartHasProduct, setCartHasProduct] = useState(false);
  const [favoritesHasProduct, setFavoritesHasProduct] = useState(false);
  const [shoeReviews, setShoeReviews] = useState([]);
  const [dialog, setDialog] = useState(false);

  function handleSize(size) {
    setShoeSize(size);
  }

  function handleDialog() {
    if (!userInfo) {
      toast.warning("You must be logged in to submit a review");
      return;
    }

    dialog === false ? setDialog(true) : setDialog(false);
  }

  const navigate = useNavigate();
  document.body.scrollTop = 0;

  function scrollLeft() {
    const recommendedShoesSlider = document.getElementById("recommended-shoes");
    recommendedShoesSlider.scrollBy(-300, 0);
  }

  function scrollRight() {
    const recommendedShoesSlider = document.getElementById("recommended-shoes");
    recommendedShoesSlider.scrollBy(300, 0);
  }

  function previousImage() {
    const currentIndex = shoeImages.indexOf(currentImage);
    if (currentIndex === 0) {
      setCurrentImage(shoeImages[shoeImages.length - 1]);
    } else {
      setCurrentImage(shoeImages[currentIndex - 1]);
    }
  }

  function nextImage() {
    const currentIndex = shoeImages.indexOf(currentImage);
    if (currentIndex === shoeImages.length - 1) {
      setCurrentImage(shoeImages[0]);
    } else {
      setCurrentImage(shoeImages[currentIndex + 1]);
    }
  }

  if (currentImage !== null) {
    const shoeImage = document.getElementsByClassName("shoe-image");
    for (let i = 0; i < shoeImage.length; i++) {
      shoeImage[i].addEventListener("mouseover", (e) => {
        setCurrentImage(e.target.src);
      });
    }
  }

  function determineShoeReviewRating(rating) {
    let remaingStars = 5 - rating;
    let stars = [];
    const filledStarsClassName = "text-black";
    const remaingStarsClassName = "text-black";

    if (remaingStars > 0) {
      for (let i = 0; i < rating; i++) {
        stars.push(<MdStar className={filledStarsClassName} />);
      }
      for (let i = 0; i < remaingStars; i++) {
        stars.push(<MdStarOutline className={remaingStarsClassName} />);
      }
      return (
        <div className="flex">
          {stars.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
        </div>
      );
    } else if (rating === 0) {
      return (
        <div className="flex text-black">
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
        </div>
      );
    } else {
      return (
        <div className="flex text-black">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </div>
      );
    }
  }

  function determineAverageShoeReviewRating(reviews) {
    let averageRating = 0;
    let copyOfReviews = [...reviews];

    if (copyOfReviews.length > 0) {
      let sumOfReviews = copyOfReviews.reduce(
        (sum, review) => (sum += review.starRating),
        0
      );
      let amountOfReviews = copyOfReviews.length;

      averageRating = sumOfReviews / amountOfReviews;
      return Math.ceil(averageRating);
    } else {
      return 0;
    }
  }

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
            setShoeImages(data.imgUrls);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        toast.error(error);
      }
    }

    getShoe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartHasProduct, cart]);

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

  useEffect(() => {
    function cartHasCurrentShoe() {
      if (currentShoe) {
        for (let product of cart) {
          if (product._id === currentShoe._id) {
            setCartHasProduct(true);
          }
        }
      }
    }

    function favoritesHasCurrentShoe() {
      if (currentShoe) {
        for (let product of favorites) {
          if (product._id === currentShoe._id) {
            setFavoritesHasProduct(true);
          }
        }
      }
    }

    favoritesHasCurrentShoe();
    cartHasCurrentShoe();
  }, [cart, currentShoe, favorites]);

  useEffect(() => {
    if (currentShoe) {
      setShoeReviews(currentShoe.reviews);
    }
  }, [currentShoe]);

  return (
    <>
      <WriteReviewDialog
        open={dialog}
        handleDialog={handleDialog}
        currentShoe={currentShoe}
      />
      <main className="w-full h-fit my-10 mt-28">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex flex-col gap-y-3 mx-6 lg:hidden">
            {currentShoe !== null ? (
              <Typography variant="h4" className="font-normal">
                {currentShoe.brand} {currentShoe.model}
              </Typography>
            ) : null}
            {currentShoe !== null ? (
              <Typography variant="small" className="font-light">
                {currentShoe.gender}&#39;s {currentShoe.typeOfShoe} Shoe
              </Typography>
            ) : null}
            <Typography className="flex items-center my-2 mb-0 font-semibold text-lg">
              <MdOutlineAttachMoney />
              {currentShoe !== null ? currentShoe.price : null}
            </Typography>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-5 lg:justify-end w-fit">
            <div className="hidden lg:flex flex-row lg:flex-col overscroll-contain overflow-y-auto gap-x-3">
              {currentShoe !== null
                ? currentShoe.imgUrls.map((img, index) => {
                    return (
                      <img
                        onClick={() => setCurrentImage(img)}
                        key={index}
                        src={img}
                        className="shoe-image w-[5vw] border border-gray-500 object-cover mb-3 rounded-lg cursor-pointer hover:shadow-xl hover:border-gray-600 transition-all ease-in-out duration-300"
                      />
                    );
                  })
                : null}
            </div>
            <div className="relative w-full lg:w-[60vh] h-fit">
              <img
                src={currentShoe !== null ? currentImage : null}
                className="w-full h-full object-scale-down border border-t-0 lg:border-t-2 border-gray-500 lg:rounded-lg"
              />
              <div className="flex items-center gap-x-2 text-[2.4rem] absolute right-10 bottom-10">
                <IoIosArrowBack
                  className="text-black bg-gray-300 rounded-full p-2 cursor-pointer"
                  onClick={previousImage}
                />
                <IoIosArrowForward
                  className="text-black bg-gray-300 rounded-full p-2 cursor-pointer"
                  onClick={nextImage}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full lg:max-w-[35%] lg:h-[100vh] lg:overflow-y-auto lg:ml-5 lg:mt-0 mt-7 px-2 self-center">
            <div className="hidden lg:flex flex-col">
              {currentShoe !== null ? (
                <Typography variant="h4" className="font-normal">
                  {currentShoe.brand} {currentShoe.model}
                </Typography>
              ) : null}
              {currentShoe !== null ? (
                <Typography variant="small" className="font-light">
                  {currentShoe.gender}&#39;s {currentShoe.typeOfShoe} Shoe
                </Typography>
              ) : null}
              <Typography className="flex items-center my-2 mb-0 font-semibold text-lg">
                <MdOutlineAttachMoney />
                {currentShoe !== null ? currentShoe.price : null}
              </Typography>
            </div>
            <div className="flex flex-col w-full lg:w-fit self-center">
              <div className="flex items-center justify-between gap-x-10 my-3 mx-10 lg:mx-0">
                <Typography color="black" variant="h6">
                  Select size
                </Typography>
                <Typography
                  color="gray"
                  variant="h6"
                  className="hover:cursor-pointer hover:underline"
                >
                  Size Guide
                </Typography>
              </div>
              <div className="w-fit self-center flex flex-wrap flex-row lg:grid grid-cols-2 place-items-center gap-x-4 gap-y-1 justify-center">
                <SizeBadge
                  size={7}
                  currentSize={shoeSize}
                  change={handleSize}
                />
                <SizeBadge
                  size={7.5}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={8}
                  currentSize={shoeSize}
                  change={handleSize}
                />
                <SizeBadge
                  size={8.5}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={9}
                  currentSize={shoeSize}
                  change={handleSize}
                />
                <SizeBadge
                  size={9.5}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={10}
                  currentSize={shoeSize}
                  change={handleSize}
                />
                <SizeBadge
                  size={10.5}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={11}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={11.5}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={12}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={12.5}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={13}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={13.5}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
                <SizeBadge
                  size={14}
                  currentSize={shoeSize}
                  change={handleSize}
                  sizesNotInStock={
                    currentShoe ? currentShoe.sizesNotInStock : null
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-3 mt-4 items-center">
              <Button className="bg-black rounded-3xl border border-gray-500 hover:cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out lg:min-w-fit w-[75%]">
                {cartHasProduct === true ? (
                  <Typography
                    className="text-[1.2em]"
                    onClick={() => {
                      dispatch(removeItemFromCart(currentShoe));
                      setCartHasProduct(false);
                    }}
                  >
                    Remove From cart
                  </Typography>
                ) : (
                  <Typography
                    className="text-[1.2em]"
                    onClick={() => {
                      if (shoeSize !== null) {
                        dispatch(
                          addItemToCart({
                            ...currentShoe,
                            shoeSize: shoeSize,
                            quantity: 1,
                          })
                        );
                        setCartHasProduct(true);
                        toast.success("Added product to cart");
                      } else {
                        toast.error("Select a shoe size before adding to cart");
                      }
                    }}
                  >
                    Add To Cart
                  </Typography>
                )}
              </Button>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <Button
                  onClick={() => {
                    if (favoritesHasProduct === false) {
                      dispatch(addItem(currentShoe));
                      toast.success("Added item to favorites");
                    } else {
                      toast.warning("This product is already favorited");
                    }
                  }}
                  className="flex items-center justify-center gap-x-2 rounded-3xl border-[1px] border-gray-500 hover:cursor-pointer transition-all duration-300 ease-in-out hover:border-black lg:min-w-fit w-[75%]"
                  color="white"
                >
                  <Typography className="text-[1.2em] text-black">
                    {favoritesHasProduct === true ? "Favorited" : "Favorite"}
                  </Typography>
                  <TiHeartFullOutline
                    className={
                      favoritesHasProduct === true
                        ? "text-red-500"
                        : "text-black"
                    }
                  />
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
              <Typography className="my-5">
                Colors Shown&#58;{" "}
                {currentShoe
                  ? [...currentShoe.colors].map((text, index) => {
                      if (index !== currentShoe.colors.length - 1) {
                        return (
                          <span className="font-lt text-sm" key={index}>
                            {" "}
                            {text}&#47;
                          </span>
                        );
                      } else {
                        return (
                          <span className="font-lt text-sm" key={index}>
                            {" "}
                            {text}
                          </span>
                        );
                      }
                    })
                  : null}
              </Typography>
            </div>
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
                <Typography
                  variant="h5"
                  color="black"
                  className="font-normal flex justify-between w-full"
                >
                  Reviews &#40;{shoeReviews.length}&#41;
                  <div className="flex">
                    {determineShoeReviewRating(
                      determineAverageShoeReviewRating(shoeReviews)
                    )}
                  </div>
                </Typography>
              </AccordionHeader>
              <AccordionBody>
                <div className="flex flex-col gap-x-3 mb-3">
                  <div className="flex flex-col mb-5">
                    <div className="flex gap-x-4 mb-1">
                      <div className="flex items-center text-black">
                        {determineShoeReviewRating(
                          determineAverageShoeReviewRating(shoeReviews)
                        )}
                      </div>
                      <Typography className="text-black">
                        {shoeReviews
                          ? determineAverageShoeReviewRating(shoeReviews)
                          : null}{" "}
                        Stars
                      </Typography>
                    </div>
                    <Typography
                      className="underline font-semibold hover:text-gray-600 cursor-pointer"
                      color="black"
                      variant="h6"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDialog();
                      }}
                    >
                      Write a review
                    </Typography>
                  </div>
                  {shoeReviews.map(
                    (
                      {
                        userName,
                        starRating,
                        subject,
                        date,
                        reviewText,
                        userId,
                      },
                      index
                    ) => {
                      return (
                        <div key={index} className="my-5">
                          <Typography className="text-black font-bold mb-1">
                            {subject}
                          </Typography>
                          <div className="flex justify-between gap-x-5 w-full mb-1">
                            {determineShoeReviewRating(starRating)}
                            <Typography className="mx-1">
                              {userName} &#45; {date}{" "}
                            </Typography>
                          </div>
                          <Typography className="text-black font-rt">
                            {reviewText}
                          </Typography>
                          {userInfo._id === userId ? (
                            <Typography className="text-red-400 underline text-sm font-rt hover:cursor-pointer">
                              Delete
                            </Typography>
                          ) : null}
                        </div>
                      );
                    }
                  )}
                  <Typography className="font-rt font-medium text-black underline hover:cursor-pointer transition-all duration-300 hover:text-gray-600">
                    More Reviews
                  </Typography>
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col">
          <Typography variant="h4" className="font-thin ml-6">
            You may also like
          </Typography>
          <div
            id="recommended-shoes"
            className="flex gap-x-3 scroll-smooth overflow-x-auto my-4 mx-3"
          >
            {recommendedShoes !== null
              ? recommendedShoes.map((shoe, index) => {
                  return (
                    <img
                      key={index}
                      onClick={() => {
                        navigate(`/shoe-page/?id=${shoe._id}`);
                        window.location.reload();
                      }}
                      src={shoe.imgUrls[0]}
                      className="w-[25vw] object-scale-down border border-gray-500 rounded-lg cursor-pointer hover:shadow-xl hover:border-gray-600 transition-all ease-in-out duration-300"
                    />
                  );
                })
              : null}
          </div>
          <div className="flex my-5 ml-5 gap-x-5 text-[2.4rem]">
            <IoIosArrowBack
              className="bg-gray-300 p-1 rounded-full cursor-pointer"
              onClick={scrollLeft}
            />
            <IoIosArrowForward
              className="bg-gray-300 p-1 rounded-full cursor-pointer"
              onClick={scrollRight}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ShoePage;
