import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  return (
    <section className="w-full">
      <h2 className="text-center font-lt max-w-full text-2xl mb-10">
        FEATURED
      </h2>
      <div className="flex flex-col justify-around mb-10 lg:flex-row">
        <FeaturedCard
          imgUrl="../src/assets/imgs/home-imgs/featured-img-1.webp"
          text="Protection and maintence products for your sneakers"
          heading="Protection"
        />
        <FeaturedCard
          imgUrl="../src/assets/imgs/home-imgs/featured-img-2.jpg"
          text="Express your style with various accessories"
          heading="Shoe accessories"
        />
        <FeaturedCard
          imgUrl="../src/assets/imgs/home-imgs/featured-img-3.jpg"
          text="See what shoes are trending"
          heading="Trending shoes"
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
