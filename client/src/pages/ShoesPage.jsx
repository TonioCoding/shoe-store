/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";
import ShoeCard from "../components/ShoeCard";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import ReusableAccordion from "../components/ReusableAccordion";

const ShoesPage = ({ brand }) => {
  const [shoeData, setShoeData] = useState(null);
  const [currentBrand, setCurrentBrand] = useState(brand);
  const [showShoeFilters, setShowShoeFilters] = useState(null);
  const [showSortBy, setShowSortBy] = useState(null);
  const isFirstRender = useRef(true);
  const [filters, setFilters] = useState(new Set());

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

  const sortByOptions = [
    "Featured",
    "Newest",
    "Price: High - Low",
    "Price: Low - High",
  ];

  function addFilter(filterValue, state) {
    setFilters((prev) => {
      if (prev.has(filterValue) === false) {
        let newSet = new Set(prev);
        newSet.add(filterValue);
        return newSet;
      }

      if (prev.has(filterValue) === true) {
        let newSet = new Set(prev);
        newSet.delete(filterValue);
        return new Set(newSet);
      }
    });
  }

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

  function setShowFiltersContainerState() {
    if (showShoeFilters === null) setShowShoeFilters(true);

    showShoeFilters === true
      ? setShowShoeFilters(false)
      : setShowShoeFilters(true);
  }

  function setShowSortByState() {
    showSortBy === null ? setShowSortBy(true) : setShowSortBy(false);
    showSortBy === true ? setShowSortBy(false) : setShowSortBy(true);
  }

  useEffect(() => {
    function animateSortByIcon(state) {
      const sortByIcon = document.getElementById("sort-by-icon");
      if (state === true) {
        sortByIcon.animate(
          [
            {
              transform: "rotateZ(0deg)",
            },
            {
              transform: "rotateZ(180deg)",
            },
          ],
          {
            duration: 300,
            iterations: 1,
            fill: "forwards",
          }
        );
      } else if (state === false) {
        sortByIcon.animate(
          [
            {
              transform: "rotateZ(180deg)",
            },
            {
              transform: "rotateZ(0deg)",
            },
          ],
          {
            duration: 300,
            iterations: 1,
            fill: "forwards",
          }
        );
      }
    }

    animateSortByIcon(showSortBy);
  }, [showSortBy]);

  useEffect(() => {
    function showFiltersContainer(state) {
      let filtersContainer = document.getElementById("filters-container");

      if (isFirstRender.current === false) {
        if (state === true) {
          filtersContainer.animate(
            [
              {
                display: "none",
                width: "0%",
              },
              {
                display: "inline-block",
                width: "20%",
                position: "sticky",
              },
            ],
            {
              duration: 200,
              fill: "forwards",
            }
          );
        }

        if (state === false) {
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
              duration: 200,
              fill: "forwards",
            }
          );
        }
      } else if (isFirstRender.current === true) {
        isFirstRender.current = false;
      }
    }
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
      <div
        className="flex items-center justify-between mx-10 max-w-full sticky top-0 bg-white border-b-2 border-gray-300 z-20"
        id="shoe-page-header"
      >
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
              <MdKeyboardArrowDown id="sort-by-icon" />
              {showSortBy === true ? (
                <div
                  id="sort-by-container"
                  className="absolute mt-10 bg-white font-rt text-sm rounded-xl flex flex-col top-[25%] gap-y-2 w-[15%] right-10 p-5"
                >
                  {sortByOptions.map((value, index) => {
                    return (
                      <Typography
                        key={index}
                        className="text-black font-rt hover:text-gray-500 transition-all ease-in"
                      >
                        {value}
                      </Typography>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div
        className="px-5 flex justify-center py-10"
        id="shoe-page-main-section"
      >
        <div
          id="filters-container"
          className={
            showShoeFilters === null || false
              ? "hidden flex-col transition-all duration-700 ease-in h-fit left-1 ml-5 top-[25%] z-10"
              : "flex-col transition-all duration-700 ease-in h-fit left-1 ml-5 top-[25%] z-10"
          }
        >
          <ReusableAccordion
            value="Types"
            values={typesOfShoes}
            addFilter={addFilter}
          />
          <ReusableAccordion
            value="Sizes"
            values={sizes}
            addFilter={addFilter}
          />
          <ReusableAccordion
            value="Colors"
            values={colors}
            addFilter={addFilter}
          />
          <ReusableAccordion
            value="Genders"
            values={genders}
            addFilter={addFilter}
          />
          <ReusableAccordion
            value="Shop By Prices"
            values={priceRanges}
            addFilter={addFilter}
          />
          <ReusableAccordion
            value="Shoe Height"
            values={shoeHeights}
            addFilter={addFilter}
          />
        </div>

        <div className="gap-x-5 flex flex-wrap justify-center w-full">
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
                      id={_id}
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

ShoesPage.propTypes = {
  brand: PropTypes.string,
};

export default ShoesPage;
