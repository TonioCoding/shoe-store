import LogoSlider from "./BrandLogoSlider";
import SaleCard from "./SaleCard";

const BrandsSection = () => {
  return (
    <div>
      <div className="flex justify-around max-w-full m-5 bs1:flex-wrap">
        <LogoSlider />
        <div className="flex flex-col mx-10">
          <h1 className="font-lt text-2xl mb-10 m-5"><span className="text-red-600">STYLE </span> AND CULTURE = THE SHOE</h1>
          <h2 className="font-lt text-lg text-center">Find a pair</h2>
          <SaleCard heading="Sales" text="Discover our current sales" />
          <SaleCard heading="Categories" text="Discover by various categories" />
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
