/* eslint-disable no-unused-vars */
import { Typography } from "@material-tailwind/react";
import { PiCurrencyDollar } from "react-icons/pi";
import { FaTags } from "react-icons/fa";
import { PropTypes } from "prop-types";
import { colorNameList } from "color-name-list";
import { useNavigate } from "react-router-dom";

const ShoeCard = (props) => {
  const shoeColors = props.colors;
  const shoePrice = props.price;
  const shoeName = props.name;
  const shoeImgUrls = props.imgUrls;
  const shoeModel = props.model;
  const shoeSizesNotInStock = props.sizesNotInStock;
  const shoeOnSale = props.onSale;
  const shoeId = props.id;
  const shoeGender = props.gender;
  let shoeColorHexCodes = [];
  const navigate = useNavigate();

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
    <div
      className="max-w-full min-w-[2rem] cursor-pointer my-3 mb-[5rem] mx-2 place-self-center"
      onClick={() => navigate(`/shoe-page/?id=${shoeId}`)}
    >
      <img
        src={shoeImgUrls[0]}
        className="object-contain  border border-gray-400 min-h-fit hover:shadow-lg transition-all duration-500 ease-in-out"
      />
      <div className="mx-4 my-4 flex flex-col items-start gap-y-2">
        {shoeOnSale === true ? (
          <Typography className="text-green-500 font-rt text-[1.1rem] flex items-center gap-x-1">
            Sale
            <FaTags className="text-sm" />
          </Typography>
        ) : null}
        <Typography className="font-lt text-[1rem] text-wrap">
          {shoeModel} {shoeName}
        </Typography>
        <Typography className="font-rt text-gray-600 text-sm">
          {shoeGender === "Unisex" ? shoeGender : `${shoeGender}'s Shoe`}
        </Typography>
        <div className="flex flex-col my-1">
          <div className="flex gap-x-2">
            {shoeColorHexCodes.length > 0
              ? shoeColorHexCodes.map((value) => {
                  return (
                    <canvas
                      key={value}
                      style={{ backgroundColor: `${value}` }}
                      className="rounded-[50%] border border-gray-700"
                      width={"13vw"}
                      height={"13vh"}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <Typography className="font-rt flex items-center text-[1rem]">
          <PiCurrencyDollar />
          {shoePrice}
        </Typography>
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  id: PropTypes.string,
  colors: PropTypes.array,
  price: PropTypes.number,
  onSale: PropTypes.bool,
  sizesNotInStock: PropTypes.array,
  name: PropTypes.string,
  model: PropTypes.string,
  imgUrls: PropTypes.array,
  gender: PropTypes.string,
};
export default ShoeCard;
