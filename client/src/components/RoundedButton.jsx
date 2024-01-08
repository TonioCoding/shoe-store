/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ButtonRounded = (props) => {
  return <Button className="hidden sm:inline-block text-center text-xs rounded-full w-[50%] bg-black">{props.text}</Button>;
};

export default ButtonRounded;
