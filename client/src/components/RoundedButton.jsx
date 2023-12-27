/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ButtonRounded = (props) => {
  return <Button className="rounded-full w-[60%]">{props.text}</Button>;
};

export default ButtonRounded;
