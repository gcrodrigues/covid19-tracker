import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    }
   
    fetchApi();
  }, []);

  const lineChart = (
    dailyData.length // 0 - false
      ?(<Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({confirmed}) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true
            },
            {
              data: dailyData.map(({deaths}) => deaths),
              label: 'Deaths',
              borderColor: '#ff3333',
              backgroundColor: 'rgba(255,0,0,.5)',
              fill: true
            }
          ]
        }}
      />) : null
  )

  return(
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;