import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Typography } from "@material-tailwind/react";
import { MdOutlineAttachMoney } from "react-icons/md";
import SizeBadge from "../components/SizeBadge";

const ShoePage = () => {
  const url = new URL(location.href);
  const urlId = url.searchParams.get("id");
  const [currentShoe, setCurrentShoe] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  console.log(currentShoe);
  useEffect(() => {
    async function getShoe() {
      try {
        fetch(`http://localhost:9000/api/v1/shoe/get-shoe/${urlId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setCurrentShoe(data);
            setCurrentImage(data.imgUrls[0]);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        toast.error(error);
      }
    }

    getShoe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full h-full my-5">
      <div className="flex justify-center">
        <div className="flex gap-x-5 justify-center w-[60%]">
          <div className="flex-col overscroll-contain overflow-y-auto">
            {currentShoe !== null
              ? currentShoe.imgUrls.map((img, index) => {
                  return (
                    <img
                      onClick={() => setCurrentImage(img)}
                      key={index}
                      src={img}
                      className="w-[5vw] border-2 border-gray-400 object-cover my-3 rounded-lg cursor-pointer hover:shadow-xl transition-all ease-in-out duration-300"
                    />
                  );
                })
              : null}
          </div>
          <img
            src={currentShoe !== null ? currentImage : null}
            className="w-[45%] h-fit object-scale-down border-2 border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-2 w-fit overscroll-contain overflow-y-auto">
          <Typography>
            {currentShoe !== null ? (
              <Typography variant="h4" className="font-normal">
                {currentShoe.brand} {currentShoe.model}
              </Typography>
            ) : null}
          </Typography>
          <Typography>
            {currentShoe !== null ? (
              <Typography variant="small" className="font-light">
                {currentShoe.gender}&#39;s {currentShoe.typeOfShoe} Shoe
              </Typography>
            ) : null}
          </Typography>
          <Typography className="flex items-center my-6 font-semibold text-lg">
            <MdOutlineAttachMoney />
            {currentShoe !== null ? currentShoe.price : null}
          </Typography>
          <div className="flex flex-col w-fit self-center">
            <div className="flex items-center justify-between gap-x-10 ">
              <Typography
                color="black"
                variant="h6"
                className="hover:cursor-pointer"
              >
                Select size
              </Typography>
              <Typography
                color="gray"
                variant="h6"
                className="hover:cursor-pointer"
              >
                Size Guide
              </Typography>
            </div>
            <div className="w-fit self-center grid grid-cols-2 place-items-center gap-x-4 gap-y-1">
              <SizeBadge size={7} />
              <SizeBadge size={7.5} />
              <SizeBadge size={8} />
              <SizeBadge size={8.5} />
              <SizeBadge size={9} />
              <SizeBadge size={9.5} />
              <SizeBadge size={10} />
              <SizeBadge size={10.5} />
              <SizeBadge size={11} />
              <SizeBadge size={11.5} />
              <SizeBadge size={12} />
              <SizeBadge size={12.5} />
              <SizeBadge size={13} />
              <SizeBadge size={13.5} />
              <SizeBadge size={14} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoePage;
