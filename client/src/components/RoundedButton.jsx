/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ButtonRounded = (props) => {
  return (
    <Button
      className="text-center text-sm rounded-full inline-block bg-black btn-hover transition-all ease-in duration-500 border-2 focus:border-black hover:border-black"
      color="black"
    >
      {props.text}
    </Button>
  );
};

export default ButtonRounded;
