import LogoSlider from "./BrandLogoSlider";
import SaleCard from "./SaleCard";

const ExploreSection = () => {
  return (
    <div className="w-full">
      <h1 className="font-lt text-3xl text-center mb-20">EXPLORE</h1>
      <div className="flex justify-around max-w-full m-5 flex-wrap lg:flex">
        <LogoSlider />
        <div className="flex flex-col mx-10">
          <h1 className="font-lt text-2xl mb-10 m-5 mt-10"><span className="text-red-600">STYLE </span> AND CULTURE = THE SHOE</h1>
          <h2 className="font-lt text-xl text-center">Find a pair</h2>
          <SaleCard heading="Sales" text="Discover our current sales" />
          <SaleCard heading="Categories" text="Discover by various categories" />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
