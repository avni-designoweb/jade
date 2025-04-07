import React from 'react';
import Chart from 'react-apexcharts';

const Donut = () => {
  return (
    <div>
        <Chart
        type="radialBar"
        width={400}
        height={400}

        series={[70]}  
        options={{
            labels:["Agents"],
            colors:["red"],
            plotOptions:{
                radialBar:{
                    hollow:{
                        size:"40%"
                    },
                    dataLabels:{
                        show:true,
                        value:{
                            show:true,
                            fontSize:'22px',
                            offsetY:-30,
                            color:"black",
                            formatter: function(val){
                                return val;
                            }   
                        },
                        name:{
                            offsetY:10,
                            fontSize:'22px',
                            color:"black",
                        }
                    }
                }              
            },

        }}  
        ></Chart>
    </div>
  )
}

export default Donut