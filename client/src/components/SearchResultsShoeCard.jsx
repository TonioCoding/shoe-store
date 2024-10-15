import { Typography } from "@material-tailwind/react";
import { PiCurrencyDollar } from "react-icons/pi";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const SearchResultsShoeCard = (props) => {
  const shoePrice = props.price;
  const shoeName = props.name;
  const shoeImgUrls = props.imgUrls;
  const shoeModel = props.model;
  const shoeId = props.id;
  const navigate = useNavigate();
  console.log(location.search);

  return (
    <div
      className="w-[75%] cursor-pointer my-3"
      onClick={() => {
        navigate(`/shoe-page/?id=${shoeId}`);
        location.reload();
      }}
    >
      <img
        src={shoeImgUrls[0]}
        className="object-scale-down border border-gray-400 min-h-fit hover:shadow-lg hover:border-gray-600 transition-all duration-500 ease-in-out"
      />
      <div className="mx-4 my-4 flex flex-col items-start gap-y-3">
        <Typography className="font-lt text-[.8rem] text-wrap">
          {shoeModel} {shoeName}
        </Typography>
        <Typography className="font-rt flex items-center text-[.8rem]">
          <PiCurrencyDollar />
          {shoePrice}
        </Typography>
      </div>
    </div>
  );
};

SearchResultsShoeCard.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  model: PropTypes.string,
  imgUrls: PropTypes.array,
};
export default SearchResultsShoeCard;
