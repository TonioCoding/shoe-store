import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";

function CountriesInput(props) {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags } = countries[country];
  const handleLocationState = props.handleLocationState;

  useEffect(() => {
    for (let i = 0; i < countries.length; i++) {
      let countryName = countries[i].name;
      if (countryName === userInfo.location) {
        setCountry(i);
      }
    }
  }, []);

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex min-w-fit h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img
              src={flags.svg}
              alt={name}
              className="w-7 h-7 rounded-full object-cover border border-gray-500"
            />
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {countries.map(({ name, flags }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => {
                  setCountry(index);
                  handleLocationState(name);
                }}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                {name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        type="button"
        value={name}
        placeholder="United States"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
}

CountriesInput.propTypes = {
  handleLocationState: PropTypes.func,
};

export default CountriesInput;
