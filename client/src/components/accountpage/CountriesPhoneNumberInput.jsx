import {
  Button,
  Card,
  Input,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useCountries } from "use-react-countries";

const CountriesPhoneNumberInput = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);

  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const [showCountriesList, setShowCountriesList] = useState(false);
  const countriesRef = useRef(
    <Card className="absolute top-12 border border-gray-400 w-fit h-[50vh] overscroll-contain overflow-y-scroll">
      <List className="max-w-fit">
        {countries.map(({ name, flags, countryCallingCode }, index) => {
          return (
            <ListItem
              onClick={() => {
                setCountry(index);
                setShowCountriesList(false);
              }}
              key={index}
              className="inline-flex justify-between items-center gap-x-2 w-full text-center"
            >
              <img src={flags.svg} className="w-6 h-7" />
              <Typography>{name}</Typography>
              <Typography>{countryCallingCode}</Typography>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );

  function handleCountriesList() {
    showCountriesList === false
      ? setShowCountriesList(true)
      : setShowCountriesList(false);
  }

  useEffect(() => {
    for (let i = 0; i < countries.length; i++) {
      let countryName = countries[i].name;
      if (countryName === userInfo.location) {
        setCountry(i);
      }
    }
  }, []);

  return (
    <div className="relative flex w-full">
      <Button
        onClick={handleCountriesList}
        ripple={false}
        variant="text"
        color="blue-gray"
        className={
          name === userInfo.location
            ? "flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 text-gray-800"
            : "flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-green-300 pl-3 text-gray-800"
        }
      >
        <img
          src={flags.svg}
          alt={name}
          className="h-4 w-4 rounded-full object-cover"
        />
        {countryCallingCode}
      </Button>
      {showCountriesList === true ? countriesRef.current : null}
      <Input
        value={countryCallingCode}
        type="tel"
        label="Country/Region"
        placeholder="e.g. 124"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900 w-[55%]"
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
