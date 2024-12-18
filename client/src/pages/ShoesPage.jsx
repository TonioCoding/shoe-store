/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import ShoeCard from "../components/ShoeCard";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import ReusableAccordion from "../components/ReusableAccordion";

const ShoesPage = ({ brand }) => {
  const [shoeData, setShoeData] = useState([]);
  const [currentBrand, setCurrentBrand] = useState(brand);
  const [showShoeFilters, setShowShoeFilters] = useState(false);
  const [showSortBy, setShowSortBy] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const isFirstRender = useRef(true);
  const filtersObj = {
    typeOfShoe: [],
    sizesNotInStock: [],
    colors: [],
    gender: [],
    price: [],
    shoeHeight: [],
  };
  const [shoeFilter, setShoeFilter] = useState({
    typeOfShoe: [],
    sizesNotInStock: [],
    colors: [],
    gender: [],
    price: [],
    shoeHeight: [],
  });

  const [amountOfShoes, setAmountOfShoes] = useState(null);

  const brands = ["Nike", "Adidas", "Jordan", "Reebok", "Puma", "New Balance"];

  const genders = ["Men", "Women", "Unisex"];

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
    [0, 25],
    [25, 50],
    [50, 100],
    [100, 125],
    [125, 150],
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

  function addFilter(filterValue, shoeProp) {
    const holdingArr = [];

    if (typeof filterValue === "object") {
      let filterValuesMap = new Map();
      let currentValueIndex;

      for (let i = 0; i < shoeFilter[shoeProp].length; i++) {
        if (
          shoeFilter[shoeProp][i][0] == filterValue[0] &&
          shoeFilter[shoeProp][i][1] == filterValue[1]
        ) {
          currentValueIndex = i;
        }
        filterValuesMap.set(`${i}`, shoeFilter[shoeProp][i]);
      }

      if (currentValueIndex !== undefined) {
        setShoeFilter((prev) => ({
          ...prev,
          [shoeProp]: [...shoeFilter[shoeProp]].filter(
            (element, index) => index !== currentValueIndex
          ),
        }));
      } else {
        setShoeFilter((prev) => ({
          ...prev,
          [shoeProp]: [...shoeFilter[shoeProp], filterValue],
        }));
      }
    } else {
      if (
        [...shoeFilter[shoeProp]].includes(filterValue) === false &&
        shoeFilter[shoeProp] !== null &&
        typeof filterValue !== "object"
      ) {
        setShoeFilter((prev) => ({
          ...prev,
          [shoeProp]: [...shoeFilter[shoeProp], filterValue],
        }));
      } else {
        setShoeFilter((prev) => ({
          ...prev,
          [shoeProp]: [...shoeFilter[shoeProp]].filter(
            (element) => element !== filterValue
          ),
        }));
      }
    }
  }

  useEffect(() => {
    let filters = {};
    for (let filter in shoeFilter) {
      let validShoeFilters;

      validShoeFilters = [...shoeFilter[filter]].filter(
        (element) => element.length > 0
      );
      if (validShoeFilters.length > 0) {
        filters[filter] = [...shoeFilter[filter]];
      }
    }
    async function retrieveShoeViaFilters() {
      if (Object.values(shoeFilter).length > 0) {
        try {
          const req = fetch("http://localhost:9000/api/v1/shoe/filteredShoes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ filters: filters, brand: currentBrand }),
          });

          const res = (await req).json().then((data) => {
            if (data.length > 0) {
              setShoeData(data);
            }
          });
        } catch (error) {
          toast.error(error);
        }
      }
    }
    retrieveShoeViaFilters();
  }, [shoeFilter, currentBrand]);

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

  useEffect(() => {
    if (shoeData) setAmountOfShoes(shoeData.length);
  }, [shoeData]);

  const sortShoes = useMemo(() => {
    function highestToLowest(arr) {
      return arr.sort((a, b) => b.price - a.price);
    }

    function lowestToHighest(arr) {
      return arr.sort((a, b) => a.price - b.price);
    }

    function newestShoes(arr) {
      return arr.sort((a, b) => {
        let aDate = new Date(a.createdAt);
        let bDate = new Date(b.createdAt);

        return bDate.getTime() - aDate.getTime();
      });
    }

    switch (sortBy) {
      case "Featured":
        toast.warning(
          "No featured products are available right now, try again later"
        );
        break;
      case "Price: High - Low":
        setShoeData(highestToLowest(shoeData));
        break;
      case "Price: Low - High":
        setShoeData(lowestToHighest(shoeData));
        break;
      case "Newest":
        setShoeData(newestShoes(shoeData));
        break;
    }
  }, [shoeData, sortBy]);

  return (
    <main className="bg-white h-full">
      <div
        className="flex flex-col md:flex-row items-center justify-between max-w-full relative md:sticky top-0 bg-white border-b-2 border-gray-300 z-20 px-3 py-2 md:py-0"
        id="shoe-page-header"
      >
        <div className="flex flex-col items-start gap-y-1 py-10">
          <Typography className="font-rt md:text-sm  text-base">
            {brand} &#47; Shoes
          </Typography>
          <Typography className="font-lt text-2xl">
            {brand} Adult Shoes &#40;{shoeData ? amountOfShoes : 0}&#41;
          </Typography>
        </div>
        <div className="flex items-center justify-between gap-x-10 w-full md:w-fit">
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={setShowFiltersContainerState}
            >
              <Typography className="font-rt text-lg">Shoe Filters</Typography>
              <TbAdjustmentsHorizontal />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={setShowSortByState}
            >
              <Typography className="font-rt text-lg">Sort By</Typography>
              <MdKeyboardArrowDown id="sort-by-icon" />
              {showSortBy === true ? (
                <div
                  id="sort-by-container"
                  className="absolute mt-10 bg-white font-rt text-sm rounded-xl flex flex-col top-[25%] gap-y-2 w-[15%] right-10 p-5 shadow-xl border border-gray-200"
                >
                  {sortByOptions.map((value, index) => {
                    return (
                      <Typography
                        key={index}
                        onClick={() => setSortBy(value)}
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
        className="flex flex-col md:flex-row justify-center"
        id="shoe-page-main-section"
      >
        <div
          id="filters-container"
          className={
            showShoeFilters === false
              ? "hidden"
              : "flex flex-row transition-all duration-700 ease-in md:left-1 md:top-[25%] z-10 min-w-full md:min-w-fit px-5 py-[5rem]"
          }
        >
          <ReusableAccordion
            shoeProp="typeOfShoe"
            value="Types"
            values={typesOfShoes}
            addFilter={addFilter}
          />
          <ReusableAccordion
            shoeProp="sizesNotInStock"
            value="Sizes"
            values={sizes}
            addFilter={addFilter}
          />
          <ReusableAccordion
            shoeProp="colors"
            value="Colors"
            values={colors}
            addFilter={addFilter}
          />
          <ReusableAccordion
            shoeProp="gender"
            value="Genders"
            values={genders}
            addFilter={addFilter}
          />
          <ReusableAccordion
            shoeProp="price"
            value="Shop By Prices"
            values={priceRanges}
            addFilter={addFilter}
          />
          <ReusableAccordion
            shoeProp="shoeHeight"
            value="Shoe Height"
            values={shoeHeights}
            addFilter={addFilter}
          />
        </div>
        <div
          className="w-full md:w-[75%] grid grid-cols-[repeat(2,_minmax(0,1fr))] md:grid-cols-[repeat(3,_minmax(200px,1fr))] [&>*]:m-0 items-center gap-[1rem] p-[1rem] justify-center [&>*]:max-w-full"
          //className="gap-x-5 flex flex-wrap justify-center w-full"
          id="shoes-container"
        >
          {shoeData.length > 0
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
                  gender,
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
                      gender={gender}
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
