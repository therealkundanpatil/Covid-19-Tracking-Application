import React from "react";

import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";

import styles from "./App.module.css";
import fetchData  from "./api/index.js";


function App(){

    const data =  fetchData();
    console.log(data);

    return(
        <div className={styles.container}>
            <Cards/>
            <CountryPicker/>
            <Chart/>
        </div>
        
    );
}

export default App;