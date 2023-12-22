import HomeCard from "../HomePageCard";

const BrandCards = () => {
  return (
    <div className="flex justify-between">
      <HomeCard src="https://thrivemyway.com/wp-content/uploads/2022/03/Adidas-Logo-Shoe-Brands.png" brandName="Adidas"/>
      <HomeCard src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Famous-Shoe-Logos/Nike.png" brandName="Nike" />
      <HomeCard src="https://cdn.inspireuplift.com/uploads/images/seller_products/1692242920_logo-06.png" brandName="Jordan"/>
    </div>
  );
};

export default BrandCards;
