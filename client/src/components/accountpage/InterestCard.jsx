import { PropTypes } from "prop-types";
import { Typography } from "@material-tailwind/react";

function InterestCard(props) {
  const imgSrc = props.img;
  const text = props.text;

  return (
    <div className="w-[15%] h-[35%] shadow-2xl flex-col text-center inline-flex relative cursor-pointer">
      <img
        src={imgSrc}
        className="max-w-full min-h-full object-cover object-center"
      />
      <Typography className="absolute bottom-0 ml-2 mb-2 text-white font-lt bg-gray-900 border-[1.5px] border-white p-2 px-4 rounded-3xl text-sm hover:bg-white hover:text-black transition-all ease-in-out duration-500 shadow-inner">
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
