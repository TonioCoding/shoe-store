/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import ButtonRounded from "./RoundedButton";

const HomeCard = (props) => {
  return (
    <Card className="w-[55vw] m-5 lg:w-[25vw] rounded-none" id="card">
      <CardHeader
        floated={false}
        className="lg:h-[35vh] flex items-center justify-center rounded-none shadow-none"
      >
        <img
          src={props.src}
          alt="picture"
          className="object-cover object-center"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="black" className="mb-2 font-lt">
          {props.brandName}
        </Typography>
        <ButtonRounded text="Shop now!" className="text-center" />
      </CardBody>
    </Card>
  );
};

export default HomeCard;
