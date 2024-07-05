import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons/lib";

const ReusableAccordion = (props) => {
  const [open, setOpen] = useState(0);
  const values = props.values;
  const headerValue = props.value;
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1}>
      <AccordionHeader onClick={() => handleOpen(1)}>
        <IconContext.Provider value={{ size: "1vw", color: "black" }}>
          <div className="flex items-center justify-between w-full">
            <Typography className="font-lt text-black text-lg">
              {headerValue}
            </Typography>
            <IoIosArrowDown />
          </div>
        </IconContext.Provider>
      </AccordionHeader>
      <AccordionBody>
        <div className="flex flex-col gap-y-5">
          <div className="">
            {values
              ? values.map((value, index) => {
                  return (
                    <div className="flex gap-x-2" key={index}>
                      <input type="checkbox" />
                      <Typography className="font-rt text-black text-[1.1vw]">
                        {value}
                      </Typography>
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
