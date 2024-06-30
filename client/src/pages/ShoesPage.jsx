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
  console.log(shoeData);
  console.log(brand);
  console.log(currentBrand);

  useEffect(() => {
    async function retrieveShoes() {
      let fetchUrl = "";
      switch (currentBrand) {
        case "Nike":
          fetchUrl = "http://localhost:9000/api/v1/shoe/get-shoes/Nike";
          break;
        case "Jordan":
          fetchUrl = "http://localhost:9000/api/v1/shoe/get-shoes/Jordan";
          break;
        case "New Balance":
          fetchUrl = "http://localhost:9000/api/v1/shoe/get-shoes/NewBalance";
          break;
        case "Adidas":
          fetchUrl = "http://localhost:9000/api/v1/shoe/get-shoes/Adidas";
          break;
        case "Puma":
          fetchUrl = "http://localhost:9000/api/v1/shoe/get-shoes/Puma";
          break;
        case "Reebok":
          fetchUrl = "http://localhost:9000/api/v1/shoe/get-shoes/Reebok";
          break;
      }

      if (currentBrand) {
        try {
          const req = fetch(fetchUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          const res = await req.json();
          console.log(res);
          setShoeData(res);
        } catch (error) {
          toast.error(error);
        }
      }
    }

    retrieveShoes();
  }, [shoeData, currentBrand]);
  return (
    <main className="bg-white h-[100vh]">
      <section className="pt-4 px-5">
        <Typography className="font-lt pb-3">
          {brand} &#47; Shoes &#40;90&#41;
        </Typography>
        <div className="flex justify-center gap-x-6">
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
        </div>
      </section>
    </main>
  );
};

ShoePage.propTypes = {
  brand: PropTypes.string,
};

export default ShoePage;
