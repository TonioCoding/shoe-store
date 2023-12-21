import { Carousel } from "@material-tailwind/react";

const LogoSlider = () => {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="../../assets/logos-svg/nike.svg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="../../assets/logos-svg/jordan.svg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="../../assets/logos-svg/New-Balance-black-logo.svg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="../../assets/logos-svg/adidas-originals.svg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default LogoSlider;
