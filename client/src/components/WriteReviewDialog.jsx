import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Radio,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { MdStar, MdStarOutline } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";

const WriteReviewDialog = (props) => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const open = props.open;
  const handleDialog = props.handleDialog;
  const currentShoe = props.currentShoe;
  const currentShoeProps = useRef(null);
  const [question, setQuestion] = useState({
    firstQuestion: null,
    secondQuestion: null,
    thirdQuestion: null,
  });
  const [reviewSubject, setReviewSubject] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [starDynaimcReview, setStarDynamicReview] = useState(0);

  function handleReviewSubject(subject) {
    setReviewSubject(subject);
  }

  function handleReviewText(text) {
    setReviewText(text);
  }

  async function addReview() {
    if (!userInfo) {
      return;
    } else {
      if (
        !question.firstQuestion ||
        !question.secondQuestion ||
        !question.thirdQuestion
      ) {
        handleDialog();
        toast.error("Please complete question form");
        return;
      }

      if (
        reviewSubject !== "" &&
        reviewText !== "" &&
        starDynaimcReview !== 0
      ) {
        try {
          const req = fetch("http://localhost:9000/api/v1/shoe/addReview", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              shoeId: currentShoe._id,
              review: {
                userId: userInfo._id,
                subject: reviewSubject,
                userName: userInfo.name,
                reviewText: reviewText,
                starRating: starDynaimcReview,
                date: moment().format("l"),
              },
            }),
          });

          const res = (await req)
            .json()
            .then(handleDialog())
            .then(toast.success("Review added"));
        } catch (error) {
          toast.error(error);
        }
      }
    }
  }

  function determineShoeReviewRating(rating) {
    let remainingStars = 5 - rating;
    let stars = [];
    const filledStarsClassName = "text-black";
    const remaingStarsClassName = "text-black";

    if (remainingStars >= 0) {
      for (let i = 1; i <= rating; i++) {
        stars.push(
          <MdStar
            id={`${i}`}
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
            onClick={(e) => setStarDynamicReview(e.currentTarget.id)}
            className={filledStarsClassName}
          />
        );
      }
      for (let i = stars.length; i < 5; i++) {
        if (i > 5) return;
        stars.push(
          <MdStarOutline
            id={`${i + 1}`}
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
            className={remaingStarsClassName}
          />
        );
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
          <MdStarOutline
            id="1"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
          <MdStarOutline
            id="2"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
          <MdStarOutline
            id="3"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
          <MdStarOutline
            id="4"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
          <MdStarOutline
            id="5"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
        </div>
      );
    } else {
      return (
        <div className="flex text-black">
          <MdStarOutline
            id="1"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
          <MdStarOutline
            id="2"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
          <MdStarOutline
            id="3"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
          <MdStarOutline
            id="4"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
          <MdStarOutline
            id="5"
            onMouseOver={(e) => setStarDynamicReview(e.currentTarget.id)}
          />
        </div>
      );
    }
  }

  useEffect(() => {
    if (currentShoe) {
      const { brand, gender, name, model, imgUrls } = currentShoe;
      currentShoeProps.current = {
        brand: brand,
        gender: gender,
        name: name,
        model: model,
        img: imgUrls[0],
      };
    }
  }, [currentShoe]);

  return (
    <Dialog
      size="md"
      open={open}
      className="p-4 h-[75vh] !overscroll-contain !overflow-y-scroll"
    >
      <DialogHeader className="flex flex-col w-full">
        <IconContext.Provider value={{ size: "2rem" }}>
          <VscChromeClose
            onClick={handleDialog}
            className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1 self-end"
          />
        </IconContext.Provider>
        <div className="flex flex-col self-center items-center gap-y-1">
          <Typography
            variant="h5"
            className="font-rt font-normal text-gray-700"
          >
            Write a Review
          </Typography>
          <Typography className="text-sm text-gray-500">
            Share your thoughts with the community
          </Typography>
        </div>
      </DialogHeader>
      <DialogBody>
        <div className="flex items-center gap-x-4">
          <img
            className="w-[3rem] lg:w-[5vw]"
            src={currentShoeProps.current ? currentShoeProps.current.img : null}
          />
          <Typography className="text-gray-800 font-rt text-sm">
            {currentShoeProps.current ? currentShoeProps.current.brand : null}{" "}
            {currentShoeProps.current ? currentShoeProps.current.model : null}{" "}
            {currentShoeProps.current ? currentShoeProps.current.name : null}{" "}
            {currentShoeProps.current ? currentShoeProps.current.gender : null}
            &#39;s Shoe
          </Typography>
        </div>
        <div className="my-3 gap-y-6">
          <Typography className="text-gray-800 items-center">
            Overall rating <span className="text-red-600">&#42;</span>
          </Typography>
          <div className="flex text-black [&>*]:hover:cursor-pointer">
            <IconContext.Provider value={{ size: "3vw" }}>
              {determineShoeReviewRating(starDynaimcReview)}
            </IconContext.Provider>
          </div>
          <hr className="my-10 border-gray-500" />
          <div className="flex flex-col gap-y-2 my-5">
            <Typography className="text-gray-800 items-center">
              Your Review <span className="text-red-600">&#42;</span>
            </Typography>
            <textarea
              onChange={(e) => handleReviewText(e.target.value)}
              className="rounded-lg px-2 focus:border-0 focus:outline-none !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            ></textarea>
            <Typography className="text-xs font-rt text-gray-500 flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Describe what you liked, what you didn&#39;t like, and other key
              things shoppers should know. Minimum 30 characters&#46;
            </Typography>
          </div>
          <div className="my-5 flex flex-col gap-y-2">
            <Typography className="text-gray-800 items-center">
              Review Subject&#47;Title
            </Typography>
            <input
              onChange={(e) => handleReviewSubject(e.target.value)}
              className="px-2 w-full h-[7vh] rounded-lg focus:border-0 focus:outline-none !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            />
            <Typography className="text-xs font-rt text-gray-500 flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Summarize your review in 150 characters or less&#46;
            </Typography>
          </div>
          <hr className="my-10 border-gray-500" />
          <div className="flex flex-col gap-y-7">
            <div>
              <Typography className="text-gray-800 items-center">
                How did this product fit&#63;{" "}
                <span className="text-red-600">&#42;</span>
              </Typography>
              <div>
                <div className="flex flex-col">
                  <Radio
                    id="Runs Small"
                    onClick={(e) => {
                      const value = e.currentTarget.id;
                      setQuestion((prev) => ({
                        ...prev,
                        firstQuestion: value,
                      }));
                    }}
                    name="question-1"
                    label="Runs small"
                    className="border-gray-600"
                  />
                  <Radio
                    id="True to Size"
                    onClick={(e) => {
                      const value = e.currentTarget.id;
                      setQuestion((prev) => ({
                        ...prev,
                        firstQuestion: value,
                      }));
                    }}
                    name="question-1"
                    label="True to Size"
                    className="border-gray-600"
                  />
                  <Radio
                    id="Runs Big"
                    onClick={(e) => {
                      const value = e.currentTarget.id;
                      setQuestion((prev) => ({
                        ...prev,
                        firstQuestion: value,
                      }));
                    }}
                    name="question-1"
                    label="Runs Big"
                    className="border-gray-600"
                  />
                </div>
              </div>
            </div>
            <div>
              <Typography className="text-gray-800 items-center">
                How comfortable was this product&#63;{" "}
                <span className="text-red-600">&#42;</span>
              </Typography>
              <div>
                <div className="flex flex-col">
                  <Radio
                    id="Uncomfortable"
                    onClick={(e) => {
                      const value = e.currentTarget.id;
                      setQuestion((prev) => ({
                        ...prev,
                        secondQuestion: value,
                      }));
                    }}
                    name="question-2"
                    label="Uncomfortable"
                    className="border-gray-600"
                  />
                  <Radio
                    id="Average"
                    onClick={(e) => {
                      const value = e.currentTarget.id;
                      setQuestion((prev) => ({
                        ...prev,
                        secondQuestion: value,
                      }));
                    }}
                    name="question-2"
                    label="Average"
                    className="border-gray-600"
                  />
                  <Radio
                    id="Very Comfortable"
                    onClick={(e) => {
                      const value = e.currentTarget.id;
                      setQuestion((prev) => ({
                        ...prev,
                        secondQuestion: value,
                      }));
                    }}
                    name="question-2"
                    label="Very Comfortable"
                    className="border-gray-600"
                  />
                </div>
              </div>
            </div>
            <div>
              <Typography className="text-gray-800 items-center">
                Would you recommend this product&#63;{" "}
                <span className="text-red-600">&#42;</span>
              </Typography>
              <div>
                <div className="flex flex-col">
                  <Radio
                    id="Yes"
                    onClick={(e) => {
                      const value = e.currentTarget.id;
                      setQuestion((prev) => ({
                        ...prev,
                        thirdQuestion: value,
                      }));
                    }}
                    name="question-3"
                    label="Yes"
                    className="border-gray-600"
                  />
                  <Radio
                    id="No"
                    onClick={(e) => {
                      const value = e.currentTarget.id;
                      setQuestion((prev) => ({
                        ...prev,
                        thirdQuestion: value,
                      }));
                    }}
                    name="question-3"
                    label="No"
                    className="border-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          onClick={addReview}
          className="w-full rounded-full bg-black text-sm font-rt"
        >
          Submit
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
WriteReviewDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
  currentShoe: PropTypes.object,
};
export default WriteReviewDialog;
