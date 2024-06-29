import { Typography } from "@material-tailwind/react";

const ShoeCard = (name, colors, price, onSale) => {
  return (
    <div className="w-[33%]  m-10">
      <img
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f373480a-1ebc-4435-92d6-575bff0a0058/attack-mens-shoes-lvkCWb.png"
        className="object-cover border-2 border-gray-400"
      />
      <div className="mx-4 my-4">
        <Typography className="font-lt text-[1.5rem]">Nike Air Max</Typography>
        <Typography className="font-rt">Nike Air Max</Typography>
        <Typography className="font-lt">Nike Air Max</Typography>
      </div>
    </div>
  );
};

export default ShoeCard;
