import HomeCard from "../HomePageCard";

const BrandCards = () => {
  return (
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
  );
};

export default BrandCards;
