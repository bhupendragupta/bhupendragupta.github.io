import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import classNames from 'classnames/bind';
import styles from  "./Cards.css";

let cx = classNames.bind(styles);

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..";
  }
  return (
    <div className="conatiner">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className='card infected'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="body2">
              Number of confirmed cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className='card recovered'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>

            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={5}
                separator=","
              />
            </Typography>

            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="body2">Number of actives</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className='card deaths'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={5}
                separator=","
              />
            </Typography>

            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="body2">Number of recovered</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
