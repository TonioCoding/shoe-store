import BrandsSection from "../components/homepage/BrandsSection";
import BrandCards from "../components/homepage/BrandCards";
import MultiLongCards from "../components/homepage/MultiLongCards";

const HomePage = () => {
  return (
    <main>
      <BrandsSection />
      <div className="max-w-full mt-20">
        <h2 className="text-center font-lt max-w-full text-2xl">
          TRENDING BRANDS
        </h2>
        <hr className="border-black my-5"/>
      </div>
      <BrandCards />
      <hr className="border-black my-5 mb-20"/>
      <h2 className="text-center font-lt max-w-full text-2xl mb-10">Featured</h2>
      <MultiLongCards/>
    </main>
  );
};

export default HomePage;
