import React from "react";

import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";


function App(){
    return(
        <div>
            <div>
                <h1>
                    App
                </h1>
            </div>
            <Cards/>
            <CountryPicker/>
            <Chart/>
        </div>
        
    );
}

export default App;