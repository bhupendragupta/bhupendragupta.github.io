import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import "./App.css";
import { getCovid19Data } from "./api/index";

import coronaImage from './image/corona.jpg'

class App extends React.Component {

  state={
    data: {},
    country:''
  }

  async componentDidMount() {
    const fetchedData = await getCovid19Data();

    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) =>{
    
    const fetchedData = await getCovid19Data(country);
    this.setState({data:fetchedData,country:country});

    
  }
  render() {
    
    const {data,country} = this.state
    return (
      <div className="container">
        <img className='coronaImage' src='https://i.ibb.co/7QpKsCX/image.png' alt='Covid-19' />
        <Cards 
          data = {data}
        />
        <CountryPicker 
        handleCountryChange= {this.handleCountryChange}/>
         <Chart 
         data = {data}
         country= {country}/> 
      </div>
    );
  }
}

export default App;
