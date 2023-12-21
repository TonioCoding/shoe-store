import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const HomeCard = (props) => {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img
          src={props.src}
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.brandName}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
    </Card>
  );
}

export default HomeCard