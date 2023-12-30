import { Carousel } from "@material-tailwind/react";

const InfoNavSlider = () => {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={{}}
      nextArrow={{}}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <h1 className="h-full w-full">Winter Sale! 45% off on kid items!</h1>
      <h1 className="h-full w-full">New jordans</h1>
      <h1 className="h-full w-full ">CLothing coming soon</h1>
    </Carousel>
  );
};

export default InfoNavSlider;
