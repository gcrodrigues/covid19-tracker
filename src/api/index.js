import axios from 'axios';

const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try{
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(baseUrl);
    
    const modifiedData = {
      confirmed, 
      recovered,
      deaths, 
      lastUpdate
    };

    return modifiedData;
  }catch(error){
    console.log(error);
  }
}

export const fetchDailyData = async () => {
  try{
    const { data } = await axios.get(`${baseUrl}/daily`);
    
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    
    return modifiedData;
  }catch(error){
    console.log(error)
  }
}

export const fetchCountries = async () =>{
  try{
    const { data:  { countries } } = await axios.get(`${baseUrl}/countries`);
  
    return countries.map(country => country.name);
  }catch(error){
    console.log(error);
  }

}
