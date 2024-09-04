import { Typography } from "@material-tailwind/react";
import { PropTypes } from "prop-types";

const SizeBadge = (props) => {
  const size = props.size;
  const currentSize = props.currentSize;
  const handleSize = props.change;
  let className =
    "size-badge py-2 px-5 my-1 min-w-[25vw] lg:min-w-[10vw] max-w-[10vw] border-2 border-gray-400 inline-flex items-center justify-center rounded-md hover:border-black transition-all duration-200 ease-in-out hover:cursor-pointer";
  if (currentSize === size) {
    className =
      "size-badge py-2 px-5 my-1 min-w-[25vw] lg:min-w-[10vw] max-w-[10vw] border-2 border-black inline-flex items-center justify-center rounded-md hover:border-black transition-all duration-200 ease-in-out hover:cursor-pointer";
  }
  // const sizesNotInStock = props.sizesNotInStock || [];

  return (
    <div className={className} onClick={() => handleSize(size)}>
      <Typography variant="h6" className="font-normal">
        M {size} &#47; W {size + 1.5}
      </Typography>
    </div>
  );
};

SizeBadge.propTypes = {
  change: PropTypes.object,
  size: PropTypes.number,
  currentSize: PropTypes.number,
};
export default SizeBadge;
