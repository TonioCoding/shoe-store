import ExploreSection from "../components/homepage/ExploreSection";
import BrandCardsSection from "../components/homepage/BrandCardsSection";
import FeaturedSection from "../components/homepage/FeaturedSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main>
      <hr />
      <ExploreSection />
      <hr />
      <BrandCardsSection />
      <hr />
      <FeaturedSection />
      <hr />
      {/*FOOTER MARK*/}
      <Footer />
    </main>
  );
};

export default HomePage;
