import LogoSlider from "./BrandLogoSlider";
import SaleCard from "./SaleCard";

const BrandsSection = () => {
  return (
    <div>
      <div className="flex justify-around max-w-full m-5">
        <LogoSlider />
        <div className="flex flex-col mx-10">
          <h1 className="font-lt text-2xl mb-10">STYLE AND CULTURE = THE SHOE</h1>
          <h2 className="font-lt text-lg">Find a pair</h2>
          <SaleCard heading="Sales" text="Discover our current sales" />
          <SaleCard heading="Categories" text="Discover by various categories" />
        </div>
      </div>
      <h2 className="font-lt text-2xl text-center max-w-full mt-20">
        DISCOVER WITH BELOVED BRANDS
      </h2>
      <h1 className="font-rt text-xl text-center mt-3 font-normal max-w-full">
        Find your desired sneakers from immortalized shoe brands.
      </h1>
    </div>
  );
};

export default BrandsSection;
