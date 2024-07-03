/* eslint-disable no-unused-vars */
import { Typography } from "@material-tailwind/react";
import { PiCurrencyDollar } from "react-icons/pi";
import { FaTags } from "react-icons/fa";
import { PropTypes } from "prop-types";
import { colorNameList } from "color-name-list";

const ShoeCard = (props) => {
  const shoeColors = props.colors;
  const shoePrice = props.price;
  const shoeName = props.name;
  const shoeImgUrls = props.imgUrls;
  const shoeModel = props.model;
  const shoeSizesNotInStock = props.sizesNotInStock;
  const shoeOnSale = props.onSale;
  let shoeColorHexCodes = [];

  function shoesColorsToHexCode(arr) {
    let hexCodes = [];
    for (let string of arr) {
      let detectedColors = [];
      let subStrings = string.split(" ");
      let matchedColor = colorNameList.find((color) => color.name === string);

      if (matchedColor) {
        detectedColors.push(matchedColor.hex);
      } else {
        for (let string of subStrings) {
          let matchedColor = colorNameList.find((color) =>
            color.name.includes(string)
          );
          if (matchedColor) {
            let foundColorSplit;
            typeof matchedColor === "string"
              ? (foundColorSplit = matchedColor.split(" "))
              : null;
            if (foundColorSplit) {
              for (let foundString of foundColorSplit) {
                if (
                  foundString == string &&
                  string.length === foundString.length
                ) {
                  detectedColors.push(matchedColor.hex);
                }
              }
            }
          }
        }
      }

      hexCodes.push(...detectedColors);
    }
    return hexCodes;
  }

  shoeColorHexCodes = shoesColorsToHexCode(shoeColors);

  return (
    <div className="w-[30%] cursor-pointer my-3 mb-[5rem]">
      <img
        src={shoeImgUrls[0]}
        className="object-scale-down border-2 border-gray-400 min-h-fit"
      />
      <div className="mx-4 my-4 flex flex-col items-start gap-y-3">
        {shoeOnSale === true ? (
          <Typography className="text-green-500 font-rt text-[1.1rem] flex items-center gap-x-1">
            Sale
            <FaTags className="text-sm" />
          </Typography>
        ) : null}
        <Typography className="font-lt text-[1.25rem] text-wrap">
          {shoeModel} {shoeName}
        </Typography>
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-2">
            {shoeColorHexCodes.length > 0
              ? shoeColorHexCodes.map((value) => {
                  return (
                    <>
                      {/* <p className="">{value}</p> */}
                      <canvas
                        key={value}
                        style={{ backgroundColor: `${value}` }}
                        className="rounded-[50%] border-2 border-gray-700"
                        width={"13vw"}
                        height={"13vh"}
                      />
                    </>
                  );
                })
              : null}
          </div>
        </div>
        <Typography className="font-rt flex items-center text-md">
          <PiCurrencyDollar />
          {shoePrice}
        </Typography>
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  colors: PropTypes.array,
  price: PropTypes.number,
  onSale: PropTypes.bool,
  sizesNotInStock: PropTypes.array,
  name: PropTypes.string,
  model: PropTypes.string,
  imgUrls: PropTypes.array,
};
export default ShoeCard;
