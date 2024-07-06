/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";
import ShoeCard from "../components/ShoeCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import ReusableAccordion from "../components/ReusableAccordion";

const ShoePage = ({ brand }) => {
  const [shoeData, setShoeData] = useState(null);
  const [currentBrand, setCurrentBrand] = useState(brand);
  const [showShoeFilters, setShowShoeFilters] = useState(false);
  const [showSortBy, setShowSortBy] = useState(false);

  console.log(showSortBy);

  const brands = ["Nike", "Adidas", "Jordan", "Reebok", "Puma", "New Balance"];

  const genders = ["Male", "Female", "Unisex"];

  const typesOfShoes = [
    "Basketball",
    "Soccer",
    "Tenis",
    "Lifestyle",
    "Running",
    "Baseball",
    "Golf",
  ];

  const priceRanges = [
    "$0 - 25",
    "$25 - 50",
    "$50 - 100",
    "$100 - 125",
    "$125 - 150",
  ];

  const sizes = [
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
    "13.5",
    "14",
  ];

  const colors = [
    "Red",
    "Blue",
    "Black",
    "Yellow",
    "Grey",
    "Pink",
    "Green",
    "Orange",
    "White",
    "Purple",
    "Brown",
    "Multi-Color",
  ];

  const shoeHeights = ["Low Top", "Mid Top", "High Top"];

  function determineFetchUrlBasedOnBrand(brand) {
    switch (brand) {
      case "Nike":
        return "http://localhost:9000/api/v1/shoe/get-shoes/Nike";
      case "Jordan":
        return "http://localhost:9000/api/v1/shoe/get-shoes/Jordan";
      case "New Balance":
        return "http://localhost:9000/api/v1/shoe/get-shoes/New%20Balance";
      case "Adidas":
        return "http://localhost:9000/api/v1/shoe/get-shoes/Adidas";
      case "Puma":
        return "http://localhost:9000/api/v1/shoe/get-shoes/Puma";
      case "Reebok":
        return "http://localhost:9000/api/v1/shoe/get-shoes/Reebok";
    }
  }

  function showFiltersContainer(state) {
    let filtersContainer = document.getElementById("filters-container");
    let shoePageMainSectionContainer = document.getElementById(
      "shoe-page-main-section"
    );

    if (state === true) {
      shoePageMainSectionContainer.animate(
        [
          {
            width: "100%",
          },
          {
            marginLeft: "5%",
            width: "85%",
          },
        ],
        {
          duration: 700,
          fill: "forwards",
        }
      );

      filtersContainer.animate(
        [
          {
            display: "none",
            width: "0%",
          },
          {
            display: "inline-block",
            width: "20%",
          },
        ],
        {
          duration: 700,
          fill: "forwards",
        }
      );
    }

    if (state === false) {
      shoePageMainSectionContainer.animate(
        [
          {
            marginLeft: "5%",
            width: "85%",
          },
          {
            marginLeft: "0%",
            width: "100%",
          },
        ],
        {
          duration: 700,
          fill: "forwards",
        }
      );

      filtersContainer.animate(
        [
          {
            display: "inline-block",
            width: "20%",
          },
          {
            display: "none",
            width: "0%",
          },
        ],
        {
          duration: 700,
          fill: "forwards",
        }
      );
    }
  }

  function setShowFiltersContainerState() {
    showShoeFilters === false
      ? setShowShoeFilters(true)
      : setShowShoeFilters(false);
  }

  function setShowSortByState() {
    showSortBy === false ? setShowSortBy(true) : setShowSortBy(false);
  }

  useEffect(() => {
    showFiltersContainer(showShoeFilters);
  }, [showShoeFilters]);

  useEffect(() => {
    setCurrentBrand(brand);
  }, [brand]);

  useEffect(() => {
    async function retrieveShoes() {
      let fetchUrl = determineFetchUrlBasedOnBrand(currentBrand);

      if (currentBrand) {
        try {
          const req = await fetch(fetchUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          const res = await req.json().then((data) => setShoeData(data));
        } catch (error) {
          toast.error(error);
        }
      }
    }

    retrieveShoes();
  }, [currentBrand]);

  return (
    <main className="bg-white h-full">
      <div className="flex items-center justify-between mx-10">
        <div className="flex flex-col items-start gap-y-1 py-5">
          <Typography className="font-rt text-sm">
            {brand} &#47; Shoes
          </Typography>
          <Typography className="font-lt text-2xl">
            {brand} Adult Shoes &#40;90&#41;
          </Typography>
        </div>
        <div className="flex items-center gap-x-10">
          <IconContext.Provider value={{ size: "3vh" }}>
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={setShowFiltersContainerState}
            >
              <Typography className="font-rt text-lg">Shoe Filters</Typography>
              <TbAdjustmentsHorizontal />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "3vh" }}>
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={setShowSortByState}
            >
              <Typography className="font-rt text-lg">Sort By</Typography>
              <MdKeyboardArrowDown />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="px-5 flex justify-center" id="shoe-page-main-section">
        <div
          id="filters-container"
          className="flex flex-col transition-all duration-700 ease-in h-fit"
        >
          <ReusableAccordion value="Brand" values={brands} />
          <ReusableAccordion value="Types" values={typesOfShoes} />
          <ReusableAccordion value="Sizes" values={sizes} />
          <ReusableAccordion value="Colors" values={colors} />
          <ReusableAccordion value="Gender" values={genders} />
          <ReusableAccordion value="Shop By Prices" values={priceRanges} />
          <ReusableAccordion value="Shoe Height" values={shoeHeights} />
        </div>
        <div className="gap-x-5 flex flex-wrap justify-center pl-10 w-full">
          {shoeData
            ? shoeData.map(
                ({
                  _id,
                  name,
                  model,
                  price,
                  onSale,
                  imgUrls,
                  brand,
                  sizesNotInStock,
                  colors,
                }) => {
                  return (
                    <ShoeCard
                      key={_id}
                      name={name}
                      price={price}
                      imgUrls={imgUrls}
                      model={model}
                      brand={brand}
                      sizesNotInStock={sizesNotInStock}
                      onSale={onSale}
                      colors={colors}
                    />
                  );
                }
              )
            : null}
        </div>
      </div>
    </main>
  );
};

ShoePage.propTypes = {
  brand: PropTypes.string,
};

export default ShoePage;
