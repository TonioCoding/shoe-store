import ExploreSection from "../components/homepage/ExploreSection";
import BrandCardsSection from "../components/homepage/BrandCardsSection";
import FeaturedSection from "../components/homepage/FeaturedSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main>
      <hr className="my-20" />
      <ExploreSection />
      <hr className="my-20" />
      <BrandCardsSection />
      <hr className="my-20" />
      <FeaturedSection />
      <hr className="my-20" />
      {/*FOOTER MARK*/}
      <Footer />
    </main>
  );
};

export default HomePage;
