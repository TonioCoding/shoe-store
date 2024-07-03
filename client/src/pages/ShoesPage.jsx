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
import { IconContext } from "react-icons/lib";

const ShoePage = ({ brand }) => {
  const [shoeData, setShoeData] = useState(null);
  const [currentBrand, setCurrentBrand] = useState(brand);
  const [showShoeFilters, setShowShoeFilters] = useState(false);

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

  function showFiltersContainer(state) {
    let filtersContainer = document.getElementById("filters-container");

    if (state === true) {
      filtersContainer.animate(
        [
          {
            transform: "translate(-100px)",
            display: "none",
          },
          {
            transform: "translate(10px)",
            display: "flex",
          },
        ],
        {
          duration: 700,
          fill: "forwards",
        }
      );
    }

    if (state === false) {
      filtersContainer.style.display = "none";
    }
  }

  function setShowFiltersContainerState() {
    showShoeFilters === false
      ? setShowShoeFilters(true)
      : setShowShoeFilters(false);
  }

  useEffect(() => {
    showFiltersContainer(showShoeFilters);
  }, [showShoeFilters]);

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
            <div className="flex items-center gap-x-2 cursor-pointer">
              <Typography className="font-rt text-lg">Sort By</Typography>
              <MdKeyboardArrowDown />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="px-5 flex" id="shoe-page-main-section">
        <div
          id="filters-container"
          className="flex flex-col transition-all duration-700 ease-in"
        >
          <Button color="black" className="h-fit w-full">
            Hello
          </Button>
          <Button color="black" className="h-fit w-full">
            Hello
          </Button>
          <Button color="black" className="h-fit w-full">
            Hello
          </Button>
          <Button color="black" className="h-fit w-full">
            Hello
          </Button>
          <Button color="black" className="h-fit w-full">
            Hello
          </Button>
        </div>
        <div className="gap-x-5 flex flex-wrap place-content-center">
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
