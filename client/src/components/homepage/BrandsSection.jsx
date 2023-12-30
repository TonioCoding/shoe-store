import LogoSlider from "./BrandLogoSlider";

const BrandsSection = () => {
  return (
    <div>
      <div className="flex justify-between m-6 max-w-full">
        <LogoSlider/>
        <h1 className="font-lt text-2xl">STYLE AND CULTURE = THE SHOE</h1>
        <p></p>
      </div>
      <h2 className="font-lt text-2xl text-center max-w-full mt-10">
        DISCOVER WITH BELOVED BRANDS
      </h2>
      <h1 className="font-rt text-xl text-center mt-3 font-normal max-w-full">
        Find your desired sneakers from immortalized shoe brands.
      </h1>
    </div>
  );
};

export default BrandsSection;
