import React from "react";
import ReactApexChart from "react-apexcharts";
import Text from "../Text/Text";
import "./widget.scss";

const Widget = ({ title, description, footer }) => {
  const series = [
    {
      data: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
  ];

  const options = {
    type: "bar",
    width: 60,
    height: 36,
    colors: ["#00AB55"],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "68%",
        borderRadius: 2,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        show: false,
      },
      marker: {
        show: false,
      },
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        return (
          `<div class="widget__tooltip">
          <span>
          ${data} 
          </span>
          </div>`
        );
      },
    },
  };

  return (
    <div className="widget mt">
      <div className="widget__header">
        <Text xSmall title>
          {title}
        </Text>
        <Text xSmall body2>
          {description}
        </Text>
        <Text title xLarge>
          {footer}
        </Text>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={`36`}
        width={`60`}
      />
      {/* <div className="widget__body">
      </div> */}
    </div>
  );
};

export default Widget;
