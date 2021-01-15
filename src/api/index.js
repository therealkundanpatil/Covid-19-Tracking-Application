import axios from "axios";

const url = "https://covid19.mathdro.id/api";

async function fetchData(){
    try{
        const response = await axios.get(url);
        const data = response.data;
        
        const modifiedData = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate,
        }

        console.log(modifiedData);
        return modifiedData;
    }
    catch(error){
        console.error(error)
    }
}

export default fetchData;