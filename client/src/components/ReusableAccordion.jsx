import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { PropTypes } from "prop-types";

const ReusableAccordion = (props) => {
  const [open, setOpen] = useState(0);
  const values = props.values;
  const headerValue = props.value;
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1}>
      <AccordionHeader onClick={() => handleOpen(1)}>
        <Typography className="font-lt">{headerValue}</Typography>
      </AccordionHeader>
      <AccordionBody>
        <div className="flex flex-col gap-y-5">
          <div className="">
            {values
              ? values.map((value, index) => {
                  return (
                    <div className="flex gap-x-2" key={index}>
                      <input type="checkbox" />
                      <Typography className="font-rt">{value}</Typography>
                    </div>
                  );
                })
              : null}
          </div>
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
