import React from "react";
import Chart from "react-apexcharts";

const ChartArea1 = () => {
  return (
    <div >
      <Chart
        type="area"
        width={300}
        height={300}
        series={[
          {
            data: [60, 55, 67, 61, 78, 98],
            color: "orange",
          },
        ]}
        options={{
          // stroke:{
          // show:false},
          dataLabels: {
            enabled: false,
          },

          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          xaxis: {
            categories: ["jan", "feb", "mar", "apr", "may", "jun"],
          },
          grid: {
            show: false,
          },
          yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
          },

          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#FFA500",
                  opacity: 1,
                },
                {
                  offset: 100,
                  color: "#FFFFFF",
                  opacity: 1,
                },
              ],
            },
          },
          //   tooltip: {
          //     enabled: false,
          //   },
        }}
      ></Chart>
    </div>
  );
};

export default ChartArea1;
