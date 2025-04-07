import React from 'react';
import Chart from 'react-apexcharts';

const ChartArea = () => {
  return (
    <div>
        <Chart
        type="area"
        width={600}
        height={600}
        series={[
          {
            name: "Company1",
            data: [60,45,67,89,49,23],
            // color:"blue"
          },
        ]}

        options={{xaxis:{
            categories:["jan","feb","mar","apr","may","jun"]
        },
        yaxis:{
            categories:[0,20,40,60,80]
        }, 
        grid:{
            show:false
        },
        fill:{
            type:"gradient",
            gradient:{
                shade:"light",
                shadeIntensity:1,
                opacityFrom:0.7,
                opacityTo: 0.9,
                stops:[0,90,100]
                
                
                
            }
        }

        }}
        

      ></Chart>
    </div>
  )
}

export default ChartArea