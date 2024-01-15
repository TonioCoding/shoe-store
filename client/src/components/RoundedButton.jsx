/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ButtonRounded = (props) => {
  return <Button className="text-center text-sm rounded-full inline-block bg-black transition ease-linear duration-500 hover:rounded-sm" color="black">{props.text}</Button>;
};

export default ButtonRounded;
