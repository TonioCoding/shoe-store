import { Typography } from "@material-tailwind/react";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const SizeBadge = (props) => {
  const size = props.size;
  const currentSize = props.currentSize;
  const handleSize = props.change;
  const sizesNotInStock = props.sizesNotInStock;
  const [sizeInStock, setSizeInStock] = useState(true);
  let className =
    "size-badge py-2 px-5 my-1 min-w-[25vw] lg:min-w-[10vw] max-w-[10vw] border-2 border-gray-400 inline-flex items-center justify-center rounded-md hover:border-black transition-all duration-200 ease-in-out hover:cursor-pointer";
  if (currentSize === size) {
    className =
      "size-badge py-2 px-5 my-1 min-w-[25vw] lg:min-w-[10vw] max-w-[10vw] border-2 border-black inline-flex items-center justify-center rounded-md hover:border-black transition-all duration-200 ease-in-out hover:cursor-pointer";
  }

  useEffect(() => {
    if (sizesNotInStock && size) {
      const sizes = [...sizesNotInStock];
      const currentSize = size.toString();

      if (sizes.includes(currentSize) === true) {
        setSizeInStock(false);
      }
    }
  }, [size, sizesNotInStock, sizeInStock]);

  return (
    <>
      {sizeInStock === false ? (
        <div className="bg-gray-200 size-badge py-2 px-5 my-1 min-w-[25vw] lg:min-w-[10vw] max-w-[10vw] border-2 border-gray-400 inline-flex items-center justify-center rounded-md transition-all duration-200 ease-in-out hover:cursor-not-allowed">
          <Typography variant="h6" className="font-normal text-gray-500">
            M {size} &#47; W {size + 1.5}
          </Typography>
        </div>
      ) : (
        <div className={className} onClick={() => handleSize(size)}>
          <Typography variant="h6" className="font-normal">
            M {size} &#47; W {size + 1.5}
          </Typography>
        </div>
      )}
    </>
  );
};

SizeBadge.propTypes = {
  change: PropTypes.func,
  size: PropTypes.number,
  currentSize: PropTypes.number,
  sizesNotInStock: PropTypes.array,
};
export default SizeBadge;
