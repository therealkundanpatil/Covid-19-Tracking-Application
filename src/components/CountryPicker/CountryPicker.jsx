import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/index.js";


function CountryPicker({handleCountryChange}) {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const receivedCountries = await fetchCountries();
            setFetchedCountries(receivedCountries);
        }
        fetchAPI();
    }, [])


    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect default="" onChange={(event) => handleCountryChange(event.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) => 
                    <option key={index} value={country}>
                        {country}
                    </option>
                    )}

            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;