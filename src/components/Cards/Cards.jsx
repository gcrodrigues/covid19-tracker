import React from 'react';
import { Grid, Card, CardContent, Typography  } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if(!confirmed) {
    return <h3>Loading...</h3>;
  }
  
  const covidData = [
      confirmed={
        value: confirmed.value,
        title: 'Infected',
        text:'Number of active cases of CoViD-19',
        class: styles.confirmed
      }, 
    
      recovered={
        value: recovered.value,
        title: 'Recovered',
        text:'Number of recovered people from CoViD-19',
        class: styles.recovered
      },
      
      deaths={
        value: deaths.value,
        title: 'Deaths',
        text:'Number of deaths by CoViD-19',
        class: styles.death
      }
    ]; 

  return(
    <div className={styles.container}>

    <Grid container spacing={3} justify="center" >
      {covidData.map((data, index) => (
        <Grid key={index} component={Card} xs={12} md={3} item className={cx(styles.card, `${data.class}`)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>{data.title}</Typography>
            <Typography variant="h5">
              <CountUp  start={0} end={data.value} duration={2.5} separator=',' />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">{data.text}</Typography>
          </CardContent>
        </Grid>
          
      ))}
    </Grid>
    </div>
      );
    }
    
export default Cards;