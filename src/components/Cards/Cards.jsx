import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

function Cards( {data: { confirmed, recovered, deaths, lastUpdate }} ){

    if(!confirmed){
        return "Loading...";
    }
       
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbuttom="true">
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0} 
                            end={confirmed.value}
                            duration={2.5}
                            separator=","/>
                        </Typography>
                        <Typography color="textSecondary" >
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varaint="body2">
                            Number of Active Cases of Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbuttom="true">
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0} 
                            end={recovered.value}
                            duration={2.5}
                            separator=","/>
                        </Typography>
                        <Typography color="textSecondary" >
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varaint="body2">
                            Number of Recovered Cases of Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbuttom="true">
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0} 
                            end={deaths.value}
                            duration={2.5}
                            separator=","/>
                        </Typography>
                        <Typography color="textSecondary" >
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varaint="body2">
                            Number of Death Cases of Covid-19
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );
}

export default Cards;