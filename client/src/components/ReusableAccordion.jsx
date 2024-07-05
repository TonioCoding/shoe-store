import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { PropTypes } from "prop-types";

const ReusableAccordion = (props) => {
  const [open, setOpen] = useState(1);
  const values = props.values;
  const headerValue = props.value;
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1}>
      <AccordionHeader onClick={() => handleOpen(1)}>
        <Typography>{headerValue}</Typography>
      </AccordionHeader>
      <AccordionBody>
        <div className="">
          {values
            ? values.map((value, index) => {
                return <Button key={index}>{value}</Button>;
              })
            : null}
        </div>
      </AccordionBody>
    </Accordion>
  );
};

ReusableAccordion.propTypes = {
  values: PropTypes.array,
  value: PropTypes.string,
};

export default ReusableAccordion;
