import { PropTypes } from "prop-types";
import { Typography } from "@material-tailwind/react";

function InterestCard(props) {
  const imgSrc = props.img;
  const text = props.text;

  return (
    <div className="interest-card w-[15%] h-[35%] shadow-2xl flex-col text-center inline-flex relative cursor-pointer bg-black">
      <img
        src={imgSrc}
        className="max-w-full min-h-full object-cover object-center"
      />
      <Typography
        variant="h6"
        className="absolute bottom-0 ml-2 mb-2 text-white font-lt border-[1.5px] border-white p-1 px-3 rounded-3xl hover:bg-white hover:text-black transition-all ease-in-out duration-500 shadow-inner"
      >
        {text}
      </Typography>
    </div>
  );
}

InterestCard.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default InterestCard;
