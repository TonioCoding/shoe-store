/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaRegSnowflake } from "react-icons/fa";

const SaleCard = (props) => {
  return (
    <Card className="mt-6 w-full cursor-pointer">
      <CardBody>
        <Typography variant="h5" color="black" className="mb-2 font-lt">
          {props.heading}
        </Typography>
        <Typography color="black" className="font-rt">{props.text}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link className="inline-block">
          <Button
            size="sm"
            variant="text"
            className="flex items-center gap-2 text-white bg-black rounded-md btn-hover" 
          >
            Shop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SaleCard;
