import HomeCard from "../HomePageCard";

const BrandCards = () => {
  return (
    <div>
      <h2 className="text-center font-lt max-w-full text-2xl my-5 mt-10">
        TRENDING BRANDS
      </h2>
      <div className=" flex justify-center md:flex-wrap ">
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
