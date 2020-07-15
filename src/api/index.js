import  axios from 'axios'


const url  = 'https://covid19.mathdro.id/api';

export const getCovid19Data = async (country) => {
    let newURL = url
    if(country){
        newURL = `${url}/countries/${country}`
    }

    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(newURL)
        return{ confirmed, recovered, deaths, lastUpdate };
        
    }
    catch(e){
        console.log(e.message)
    }
}


export const getCovid19DailyData = async () => {
    try {
        const {data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map ((dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate

        })))
        
        return modifiedData
        
    }
    catch(e){
        console.log(e.message)
    }
}


export const getCountryData = async () => {

    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)

        return countries.map((country)=> country.name)
        }
    catch (e){
        console.log(e.message)
    }
}

