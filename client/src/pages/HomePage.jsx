import BrandsSection from "../components/homepage/BrandsSection";
import BrandCards from "../components/homepage/BrandCards";

const HomePage = () => {
  return (
    <main>
      <BrandsSection />
      <div className="max-w-full mt-20">
        <h2 className="text-center font-lt max-w-full text-2xl">
          TRENDING BRANDS
        </h2>
        <hr className="border-black"/>
      </div>
      <BrandCards />
    </main>
  );
};

export default HomePage;
