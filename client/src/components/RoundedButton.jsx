/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ButtonRounded = (props) => {
  return <Button className=" text-center text-xs rounded-full w-[80%] h-[50%] bg-black">{props.text}</Button>;
};

export default ButtonRounded;
