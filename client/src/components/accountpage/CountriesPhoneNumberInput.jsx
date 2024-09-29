import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React from "react";
import { useCountries } from "use-react-countries";

const CountriesPhoneNumberInput = () => {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  return (
    <div className="relative flex w-full">
      <Menu placement="bottom-start" open={false}>
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img
              src={flags.svg}
              alt={name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {countries.map(({ name, flags, countryCallingCode }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => setCountry(index)}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        type="tel"
        label="Country/Region"
        placeholder="e.g. 124"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900 w-[65%]"
        labelProps={{
          className: "before:content-none after:content-none !text-black ml-2",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
};

export default CountriesPhoneNumberInput;
