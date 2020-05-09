import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api'; 

class App extends React.Component{
  state = {
    data:{},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountry = async (country) => {
    this.setState({ data: await country });
    console.log(country)
  }

  render(){
    const { data } = this.state;    

    return(
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountry={this.handleCountry}/>
        <Chart />
      </div>
    );
  }
}

export default App;