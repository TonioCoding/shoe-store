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
    <Card className="w-[75vw] m-5 lg:w-[35vw]">
      <CardHeader floated={false} className="h-full flex items-center justify-center">
        <img src={props.src} alt="picture" className=""/>
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
