import BrandsSection from "../components/homepage/Categories&SaleSection";
import BrandCards from "../components/homepage/BrandCardsSection";
import FeaturedSection from "../components/homepage/FeaturedSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main>
      <hr className="border-black my-20 h-px" />
      <BrandsSection />
      <hr className="border-black my-5" />
      <BrandCards />
      <hr className="border-black my-5 mb-10" />
     <FeaturedSection/>
      {/*FOOTER MARK*/}
      <Footer />
    </main>
  );
};

export default HomePage;
