/* eslint-disable no-unused-vars */
import { PropTypes } from "prop-types";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";

function InterestCard(props) {
  const imgSrc = props.img;
  const text = props.text;
  const [showAddInterest, setShowAddInterest] = useState(false);
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);

  const dispatch = useDispatch();

  async function deleteInterest() {
    try {
      const req = fetch("/api/v1/users/deleteInterest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userInfo._id, interest: text }),
      });

      const res = (await req)
        .json()
        .then((data) => dispatch(setCredentials(data)))
        .then(toast.success("Interest deleted"));
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div
      onMouseOver={() => setShowAddInterest(true)}
      onMouseLeave={() => setShowAddInterest(false)}
      className="interest-card w-[11rem] h-[16rem] shadow-2xl flex-col text-center inline-flex relative cursor-pointer bg-black"
    >
      <img
        src={imgSrc}
        className="max-w-full min-h-full object-cover object-center"
      />
      <Typography
        onMouseOver={() => setShowAddInterest(true)}
        onMouseLeave={() => setShowAddInterest(false)}
        variant="h6"
        className={
          showAddInterest === false
            ? "absolute bottom-0 ml-2 mb-2 text-white font-lt border-[1.5px] border-white p-1 px-3 rounded-3xl hover:bg-white hover:text-black transition-all ease-in-out duration-500 shadow-inner"
            : "hidden"
        }
      >
        {text}
      </Typography>
      <Typography
        onClick={deleteInterest}
        variant="h6"
        className={
          showAddInterest === true
            ? "absolute bottom-0 ml-2 mb-2 text-white font-lt border-[1.5px] border-white p-1 px-3 rounded-3xl hover:bg-white hover:text-black transition-all ease-in-out duration-500 shadow-inner"
            : "hidden"
        }
      >
        Remove Interest
      </Typography>
    </div>
  );
}

InterestCard.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default InterestCard;
