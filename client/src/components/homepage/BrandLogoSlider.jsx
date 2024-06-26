import { Carousel } from "@material-tailwind/react";

const LogoSlider = () => {
  return (
    <div
      className="flex justify-center max-w-full lg:w-[50%] shadow-lg shadow-blue-gray-900/50 rounded-xl mx-5"
      id="brand-slider"
    >
      <Carousel
        transition={{ duration: 1.5 }}
        className="rounded-xl"
        autoplay={true}
        loop={true}
      >
        <img
          src="../src/assets/imgs/home-imgs/slider-img-1.webp"
          alt="image 1"
          className="w-full h-full object-fill 2xl:object-contain"
        />
        <img
          src="../src/assets/imgs/home-imgs/slider-img-2.jpg"
          alt="image 2"
          className="w-full h-full object-fill 2xl:object-contain"
        />
        <img
          src="../src/assets/imgs/home-imgs/slider-img-3.avif"
          alt="image 3"
          className="w-full h-full object-fill 2xl:object-contain"
        />
      </Carousel>
    </div>
  );
};

export default LogoSlider;
