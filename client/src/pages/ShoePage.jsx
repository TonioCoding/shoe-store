import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ShoePage = () => {
  const url = new URL(location.href);
  const urlId = url.searchParams.get("id");
  const [currentShoe, setCurrentShoe] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  console.log(currentImage);
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
        <div className="">hello</div>
      </div>
    </main>
  );
};

export default ShoePage;
