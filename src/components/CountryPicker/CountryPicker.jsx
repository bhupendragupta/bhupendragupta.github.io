import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { getCountryData } from "../../api";
import "./CountryPicker.css";

const CountryPicker = ({handleCountryChange}) => {
  const [fetchCountries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      setFetchCountries(await getCountryData());
    };
    fetchCountriesFromAPI();
  }, [setFetchCountries]);
  return (
    <FormControl className="form-control">
      <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
