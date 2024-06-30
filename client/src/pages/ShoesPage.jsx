/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import ShoeCard from "../components/ShoeCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";

const ShoePage = ({ brand }) => {
  const [shoeData, setShoeData] = useState(null);
  const [currentBrand, setCurrentBrand] = useState(brand);

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

  return (
    <main className="bg-white h-full">
      <section className="px-5">
        <div className="flex flex-col items-start gap-y-1 py-5">
          <Typography className="font-rt text-sm">
            {brand} &#47; Shoes &#40;90&#41;
          </Typography>
          <Typography className="font-lt text-2xl">
            {brand} Adult Shoes &#40;90&#41;
          </Typography>
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
      </section>
    </main>
  );
};

ShoePage.propTypes = {
  brand: PropTypes.string,
};

export default ShoePage;
