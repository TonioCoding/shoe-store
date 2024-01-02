/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const LearnMoreButton = (props) => {
  return (
    <Button variant="text" className="flex items-center gap-2 bg-black text-white w-[10vw] b1:w-[20vw] sm:w-[25vw]">
      {props.text}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-[5vw] sm:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </Button>
  );
};

export default LearnMoreButton;
