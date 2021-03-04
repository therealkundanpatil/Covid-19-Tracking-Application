import React, { useEffect, useState } from "react";

import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";
import Header from "./components/Layout/HeaderSection/Header.jsx";
import Footer from "./components/Layout/FooterSection/Footer.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

import styles from "./App.module.css";
import { fetchData } from "./api/index.js";
import covidImage from "./images/covid-image.png";
import {Button} from "reactstrap";
import ThemeToggler from "./components/ThemeToggler.jsx";

function App() {

    const[data, setData] = useState({});
    const[country, setCountry] = useState("");

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setData(fetchedData);
        setCountry(country);
    }

    
    useEffect(() => {
        async function getData(){
            const fetchedData = await fetchData();
            setData(fetchedData);
        }   
        getData();      
    },[]);
    

    const themeHook = useState("light")

    return (
        <ThemeContext.Provider value = {themeHook}>
            <div className={styles.container}>
                <Header></Header>
                <section>
                    <Button>Click Me</Button>
                </section>
                <ThemeToggler></ThemeToggler>        
                <img className= {styles.image} src={covidImage} alt="COVID-19"></img>    
                <Cards data={data} />
                <CountryPicker handleCountryChange={handleCountryChange} />
                <Chart data={data} country={country} />
                <Footer></Footer>
            </div>
        </ThemeContext.Provider>
    );
    

}

export default App;