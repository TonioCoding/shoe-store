import HomeCard from "../HomePageCard";

const BrandCards = () => {
  return (
    <div className="w-full" id="section">
      <div className="mb-20">
        <h2 className="font-lt text-2xl text-center max-w-full mt-20">
          DISCOVER WITH BELOVED BRANDS
        </h2>
        <h1 className="font-rt text-xl text-center mt-3 font-normal max-w-full">
          Find your desired sneakers from immortalized shoe brands.
        </h1>
      </div>
      <h2 className="text-center font-lt max-w-full text-2xl my-5 mt-10 underline">
        TRENDING BRANDS
      </h2>
      <div className="flex flex-col items-center justify-center sm:flex-wrap lg:flex-row w-full">
        <HomeCard
          src="https://static.vecteezy.com/system/resources/previews/010/994/239/original/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
          brandName="Adidas"
        />
        <HomeCard
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Famous-Shoe-Logos/Nike.png"
          brandName="Nike"
        />
        <HomeCard
          src="https://cdn.inspireuplift.com/uploads/images/seller_products/1692242920_logo-06.png"
          brandName="Jordan"
        />
      </div>
    </div>
  );
};

export default BrandCards;
