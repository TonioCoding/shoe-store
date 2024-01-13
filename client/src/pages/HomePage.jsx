import ExploreSection from "../components/homepage/ExploreSection";
import BrandCardsSection from "../components/homepage/BrandCardsSection";
import FeaturedSection from "../components/homepage/FeaturedSection";
import MembershipSection from "../components/homepage/MembershipSection";
import RedirectSection from "../components/homepage/RedirectSection";
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
      <MembershipSection />
      <hr className="my-10" />
      <RedirectSection />
      <hr className="my-10" />
      {/*FOOTER MARK*/}
      <Footer />
    </main>
  );
};

export default HomePage;
