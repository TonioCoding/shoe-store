import HomeCard from "../HomePageCard";

const BrandCards = () => {
  return (
    <div className="flex justify-between">
      <HomeCard src="https://thrivemyway.com/wp-content/uploads/2022/03/Adidas-Logo-Shoe-Brands.png" brandName="Adidas"/>
      <HomeCard src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Famous-Shoe-Logos/Nike.png" brandName="Nike" />
      <HomeCard src="https://customeazy.com/cdn/shop/products/JORDAN1winglogoironon_530x@2x.png?v=1666164933" brandName="Jordan"/>
    </div>
  );
};

export default BrandCards;
