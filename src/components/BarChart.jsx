import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  return (
    <div className="p-6">
    <h2 className="text-lg font-semibold mb-2">Training Name</h2>
    <div className=" relative bg-gray-200 rounded-lg h-8 p-1">
    <div className="absolute top-0 left-0 w-full h-full">
    <Chart
    type="bar"
    height={34}
    series={[{
      data:[75],
    },
    ]}
    options={{
      chart:{
        type:'bar',
        height:40,
        sparkline:{enabled:true},
      },
      plotOptions:{
        bar:{
          horizontal:true,
          barHeight:'100%',
          borderRadius:7,
        },
      },
      fill:{
        type:'gradient',
        gradient:{
          shade:'light',
          type:'horizontal',
          gradientToColors:['#F97316'],
          stops:[0,100],
        }
      },
      
      colors:['#F8C583'],
      xaxis:{
        max:100,
      },
      tooltip:{
        show:false
      },
      grid:{
        show:false,
      },
      dataLabels:{
        show:false,
      }
    }}

    >

    </Chart>

    </div>
    </div>
    </div>
    // {/* <div className="bg-gray-200 rounded-full h-8 p-1">
    //   <Chart
    //     type="bar"
    //     width={550}
    //     height={110}
    //     series={[
    //       {
    //         name: "Training name",
    //         data: [70],
            
    //       },
    //       {
    //         name: "Remaining",
    //         data: [30],
    //       },
    //     ]}
    //     options={{
    //       colors: ["orange", "#CCDFDC"],

    //       fill:{
    //         type:["gradient","solid"],
            
    //         gradient:{
    //           inverseColors:false,
    //           opacityFrom:0.7,
    //           opacityTo:0.2,
    //           colorStops:[
    //             {
    //               offset: 0,
    //               color: "#F8C583",
    //               opacity: 1,
    //             },
    //             {
    //               offset: 100,
    //               color: "#FFA500",
    //               opacity: 1,
    //             },
    //           ]

    //         }
    //       },

    //       plotOptions: {
    //         bar: {
    //           horizontal: true,
    //           borderRadius: 10,
    //         },
    //       },
    //       grid: {
    //         show: false,
    //       },
    //       chart: {
    //         stacked: true,
    //         toolbar: {
    //           show: false,
    //         },
    //       },

    //       xaxis: {
    //         show: false,
    //         axisBorder: {
    //           show: false,
    //         },
    //         axisTicks: {
    //           show: false,
    //         },
    //         labels: {
    //           show: false,
    //         },
    //       },
    //       yaxis: {
    //         show: false,
    //       },

    //       legend:{
    //         show:false
    //       }

    //       //   title: {
    //       //     text: "Training Name",
    //       //   },
    //     }}
    //   ></Chart>
    // </div> */}
  );
};

export default BarChart;
