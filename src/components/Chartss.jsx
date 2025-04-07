import React from "react";
import Chart from "react-apexcharts";

const Chartss = () => {
  return (
    <div>
      Charts
      {/* <Chart
        type="bar"
        width={600}
        height={600}
        series={[
          {
            name: "Company1",
            data: [1000, 2000, 2345, 4567, 5678, 2345],
            color:"blue"
          },
          {
            name: "Company2",
            data: [100, 200, 245, 4400, 5650, 2345],
            color:"black"
          },
        ]}
        // options={{
        //   colors:["red"]
        // }}
         options={{
          // colors:["red","green"]
          theme:{
            mode:'dark'
          },
          chart:{
            stacked:true,
            background:'green'
          },

          plotOptions:{
            bar:{
              borderRadius:14,
              columnWidth:60,
            dataLabels:{
              orientation:"horizontal"
            }
            }

          },

          noData:{
            text:"Empty Chart!",
          },
          tooltip:{
            followCursor:true
          },
          dataLabels:{
            formatter:(val)=>{
              return `$${val}`
            },
            style:{
              colors:["red","blue"],
              fontSize:16
            }
          },
          yaxis:{
            labels:{
              formatter:(val)=>{
              return `$${val}`
            },
            style:{
              colors:["red"]
            },     
            }
            
          },

          xaxis:{
            tickPlacement:'on',
            categories:["jan","feb","mar","april","may","june"],
            title:{
              text:"Months",
              style:{
                color:"green"
              }
            }
          
          },

          legend:{
            show:true,
            position:'bottom'
            
          },
          title:{
            text:'bar chart'
          },
          subtitle:{
            text:'Data of comapnies'
          },

          grid:{
            borderColor:"yellow"
          }
        }}

      ></Chart> */}
      {/* <Chart
        type="radialBar"
        width={600}
        height={600}
        series={[70]}
        options={{
          labels: ["Agents"],
          colors:["red"]

        }}
      ></Chart>
      <Chart
        type="donut"
        width={600}
        height={600}
        series={[1000, 2000, 2345, 4567, 5678, 2345]}
        options={{
          labels: ["jan", "feb", "mar", "april", "may", "june"],
          colors:["red"],
          tooltip: {
            y: {
              formatter: (val) => {
                return `$${val}`;
              },
            },
          },
          title: {
            text: "pie Chart",
          },
        }}
      ></Chart> */}

      <Chart
      type="bar"
      width={600}
      height={600}
      
      
      ></Chart>
    </div>
  );
};

export default Chartss;
