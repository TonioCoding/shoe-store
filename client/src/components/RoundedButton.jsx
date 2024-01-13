/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ButtonRounded = (props) => {
  return <Button className="text-center text-xs rounded-full inline-block bg-black" color="black">{props.text}</Button>;
};

export default ButtonRounded;
