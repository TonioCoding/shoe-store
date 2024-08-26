import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Typography } from "@material-tailwind/react";
import { MdOutlineAttachMoney } from "react-icons/md";

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
    <main className="w-full my-5">
      <div className="flex justify-center">
        <div className="flex gap-x-5 justify-center w-[50vw]">
          <div className="flex-col">
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
            className="w-[50%] object-cover border-2 border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-2">
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
          <Typography className="flex items-center mt-6">
            <MdOutlineAttachMoney />
            {currentShoe !== null ? currentShoe.price : null}
          </Typography>
          <div className="flex items-center justify-between gap-x-10">
            <Typography>Select size</Typography>
            <Typography>Size Guide</Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoePage;
