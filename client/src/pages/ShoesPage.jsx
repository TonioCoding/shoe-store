/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import ShoeCard from "../components/ShoeCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ShoePage = ({ brand }) => {
  const [shoeData, setShoeData] = useState(null);
  console.log(shoeData);
  console.log(brand);

  useEffect(() => {
    async function retrieveShoes() {
      if (shoeData === null) {
        try {
          const req = fetch(
            `http://localhost:9000/api/v1/shoe/get-shoes/${brand}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const res = await req.json();
          setShoeData(res);
        } catch (error) {
          toast.error(error);
        }
      }
    }

    retrieveShoes();
  }, [shoeData]);
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

export default ShoePage;
