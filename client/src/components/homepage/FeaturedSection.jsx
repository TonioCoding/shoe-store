import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  return (
    <div>
      <h2 className="text-center font-lt max-w-full text-2xl mb-10">
        Featured
      </h2>
      <div className="flex flex-col justify-around mb-20">
        <FeaturedCard imgUrl="https://www.originalfook.com/cdn/shop/products/814CCE65-D048-4900-9E7C-C451E87C36A6_grande.jpg?v=1582554774" text="Protection" heading="Protection"/>
        <FeaturedCard imgUrl="https://blankarchive.com/wp-content/uploads/2022/04/AF1-Barb-04.jpg" text="Shoe accessories" heading="Shoe accessories"/>
        <FeaturedCard imgUrl="https://i.pinimg.com/474x/d9/72/74/d97274552c4927cf090d62b4d7034464.jpg" text="trending shoes" heading="Trending shoes"/>
      </div>
    </div>
  );
};

export default FeaturedSection;
