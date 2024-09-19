import { PropTypes } from "prop-types";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";

function InterestCard(props) {
  const imgSrc = props.img;
  const text = props.text;
  const [showAddInterest, setShowAddInterest] = useState(false);

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
        variant="h6"
        className={
          showAddInterest === true
            ? "absolute bottom-0 ml-2 mb-2 text-white font-lt border-[1.5px] border-white p-1 px-3 rounded-3xl hover:bg-white hover:text-black transition-all ease-in-out duration-500 shadow-inner"
            : "hidden"
        }
      >
        Add Interest
      </Typography>
    </div>
  );
}

InterestCard.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default InterestCard;
