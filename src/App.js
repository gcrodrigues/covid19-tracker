import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api'; 

const App = () => {
  
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
     const fetchedData = async() => {
       setData(await fetchData())
     }

     fetchedData();
  }, []); 
  

  const handleCountry = async (country) => {
    setData(await fetchData(country));
    setCountry(country);
  } 

    return(
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountry={handleCountry}/>
        <Chart data={data} country={country}/>
      </div>
    );
  
}

export default App;