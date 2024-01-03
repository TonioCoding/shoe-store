import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  return (
    <div>
      <h2 className="text-center font-lt max-w-full text-2xl mb-10">
        Featured
      </h2>
      <div className="flex justify-around">
        <FeaturedCard imgUrl="https://www.originalfook.com/cdn/shop/products/814CCE65-D048-4900-9E7C-C451E87C36A6_grande.jpg?v=1582554774" />
        <FeaturedCard imgUrl="https://cdn.myshoptet.com/usr/www.sneakergear.eu/user/shop/detail/171-7_af1-metal-plate-special.jpg?65118278" />
        <FeaturedCard imgUrl="https://cdn.myshoptet.com/usr/www.sneakergear.eu/user/shop/detail/171-7_af1-metal-plate-special.jpg?65118278" />
      </div>
    </div>
  );
};

export default FeaturedSection;
