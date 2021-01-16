import React from "react";

import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";

import styles from "./App.module.css";
import { fetchData } from "./api/index.js";


class App extends React.Component {
    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    async handleCountryChange(country){
        console.log(country);
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart />
            </div>
        )
    }

}

export default App;