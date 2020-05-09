import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';


const CountryPicker = ({ handleCountry }) => {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    const fetchedApi = async () => {
      setCountries(await fetchCountries())
    }
    fetchedApi();
  }, [])
  
  return(
    <FormControl className={styles.container}>
      <NativeSelect defaultValue='' onChange={(e)=>{handleCountry(e.target.value)}}>
        <option value="">Global</option>
        {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;