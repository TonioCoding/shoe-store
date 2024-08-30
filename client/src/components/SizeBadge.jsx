import { Typography } from "@material-tailwind/react";
import { PropTypes } from "prop-types";

const SizeBadge = (props) => {
  const size = props.size;
  // const sizesNotInStock = props.sizesNotInStock || [];

  return (
    <div className="py-2 px-5 my-1 min-w-[25vw] lg:min-w-[10vw] max-w-[10vw] border-2 border-gray-400 inline-flex items-center justify-center rounded-md hover:border-black transition-all duration-200 ease-in-out hover:cursor-pointer">
      <Typography variant="h6" className="font-normal">
        M {size} &#47; W {size + 1.5}
      </Typography>
    </div>
  );
};

SizeBadge.propTypes = {
  size: PropTypes.number,
};
export default SizeBadge;
