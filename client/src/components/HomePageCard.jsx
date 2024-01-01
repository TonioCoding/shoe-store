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
    <Card className="w-[35%] m-5 md:w-[65%]">
      <CardHeader floated={false} className="h-full">
        <img src={props.src} alt="picture" className="text-center"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="black" className="mb-2 font-lt">
          {props.brandName}
        </Typography>
        <ButtonRounded text="Shop now!" className="text-center"/>
      </CardBody>
    </Card>
  );
};

export default HomeCard;
