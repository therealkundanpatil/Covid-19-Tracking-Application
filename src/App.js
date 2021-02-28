import React from "react";

import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";
import Header from "./components/Layout/HeaderSection/Header.jsx";
import Footer from "./components/Layout/FooterSection/Footer.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

import styles from "./App.module.css";
import { fetchData } from "./api/index.js";
import covidImage from "./images/covid-image.png";

class App extends React.Component {
    state = {
        data: {},
        country: "",
        theme: "",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    

    render() {
        const { data, country, theme } = this.state;

        return (
            <ThemeContext.Provider value = {theme}>
                <div className={styles.container}>
                    <Header></Header>
                    
                    <img className= {styles.image} src={covidImage} alt="COVID-19"></img>
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                    <Footer></Footer>
                </div>
            </ThemeContext.Provider>
        );
    }

}

export default App;