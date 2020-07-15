import React, { useState, useEffect } from "react";
import { getCovid19DailyData } from "../../api";
import {Line, Bar} from 'react-chartjs-2'

import './Chart.css'


const Chart = ({data:{confirmed,recovered,deaths},country}) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchDailyDatafromAPI = async () => {
      setDailyData(await getCovid19DailyData());
    }
    fetchDailyDatafromAPI();
  },[]);

 

  const LineChart = (
    dailyData.length ? (
    <Line
      data = {{
          labels: dailyData.map(({date}) => date),
          datasets: [{
              data:dailyData.map(({confirmed}) => confirmed),
              label:'Infected',
              fill:true,
              borderColor:'#3333ff'
          },{
            data:dailyData.map(({deaths}) => deaths),
            label:'Deaths',
            fill:true,
            borderColor:'#3333ff',
            backgroundColor: 'rgba(255,0,0,0.5)'
          }
        
        ]
      }}/>) :null

     
  );

console.log(confirmed,recovered,deaths)

  const BarChart = (
      confirmed?
      (<Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:[
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)'
                ],
                data:[confirmed.value,recovered.value,deaths.value]
                }]
        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`Current state in: ${country}`}

        }}
      />):null
  )

  return (
    <div className='container'>
        {country?BarChart:LineChart }

    </div>
    )
};

export default Chart;
