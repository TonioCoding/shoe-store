import ExploreSection from "../components/homepage/ExploreSection";
import BrandCardsSection from "../components/homepage/BrandCardsSection";
import FeaturedSection from "../components/homepage/FeaturedSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main>
      <hr className="border-black my-20 h-px" />
      <ExploreSection />
      <hr className="border-black my-5 mt-20" />
      <BrandCardsSection />
      <hr className="border-black my-5 mb-10" />
      <FeaturedSection />
      <hr className="border-black my-5 mb-10" />
      {/*FOOTER MARK*/}
      <Footer />
    </main>
  );
};

export default HomePage;
