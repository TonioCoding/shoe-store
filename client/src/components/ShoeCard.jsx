import { Typography } from "@material-tailwind/react";

const ShoeCard = (name, colors, price, onSale) => {
  return (
    <div className="w-[30%] cursor-pointer my-3 mb-[5rem]">
      <img
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f373480a-1ebc-4435-92d6-575bff0a0058/attack-mens-shoes-lvkCWb.png"
        className="object-scale-down border-2 border-gray-400 min-h-fit"
      />
      <div className="mx-4 my-4">
        <Typography className="font-lt text-[1.5rem]">Nike Air Max</Typography>
        <Typography className="font-rt">5 colors</Typography>
        <Typography className="font-lt">$120</Typography>
      </div>
    </div>
  );
};

export default ShoeCard;
