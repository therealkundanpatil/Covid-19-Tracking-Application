import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index.js"
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

function Chart() {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const receivedData = await fetchDailyData();
            setDailyData(receivedData)
        }

        fetchAPI();
    });

    const lineChart = (
        dailyData.length !== 0 ? (
            <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: "Infected",
                    borderColor: "#3333FF",
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: "rgba(255,0,0,0.5)",
                    fill: true,
                }],
            }}>
            </Line>) : null
    );


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
}

export default Chart;