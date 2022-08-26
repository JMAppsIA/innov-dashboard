import React from "react";
import ReactApexChart from "react-apexcharts";
import Button from "../Button/Button";
import Text from "../Text/Text";
import "./card.scss";

const MainCard = ({ translation, title, description, buttonTitle, image }) => {
  return (
    <div className="card__main">
      <div className="card__main__text__container">
        <Text title medium>{title}</Text>
        <Text
          body1
          small
          style={{
            paddingBottom: 40,
          }}
        >
          {description}
        </Text>
        <Button xs>{buttonTitle}</Button>
      </div>
      <div className="card__main__image__container">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default MainCard;

export const CardSlider = () => {
  return <>{`CardSlider`}</>;
};

export const SalesCard = ({ translation, title, description }) => {
  const series = [12244, 53345, 44313, 78343];

  const options = {
    type: "donut",
    width: "100%",
    height: 320,
    chart: {
      fontFamily: "Public Sans, sans-serif",
      foreColor: "#919EAB",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#C8FACD", "#5BE584", "#00AB55", "#007B55", "#2CD9C5", "#FF6C40"],
    dataLabels: { enabled: false },
    fill: {
      gradient: {
        type: "vertical",
        opacityForm: 0.4,
        opacityTo: 0,
        shadeIntensity: 0,
        stops: [0, 100],
      },
      opacity: 1,
    },
    grid: {
      borderColor: "rgba(145, 158, 171, 0.24)",
      strokeDashArray: 3,
    },
    labels: ["Mac", "Windows", "IOS", "Android"],
    legend: {
      show: true,
      floating: false,
      fontSize: 13,
      fontWeight: 500,
      horizontalAlign: "center",
      position: "bottom",
      itemMargin: {
        horizontal: 12,
      },
      labels: {
        colors: "#212B36",
      },
      markers: {
        radius: 12,
      },
    },
    markers: {
      size: 0,
      strokeColors: "#fff",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "28%",
      },
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              color: "#637381",
              fontSize: "0.875rem",
              fontWeight: 600,
              label: "Total",
              lineHeight: 1.5714285714285714,
              show: true,
            },
            value: {
              color: "#212B36",
              fontSize: "1.5rem",
              fontWeight: 700,
              lineHeight: 1.5,
              offsetY: 8,
            },
          },
          size: "90%",
        },
      },
      polarArea: {
        rings: {
          strokeColor: "rgba(145, 158, 171, 0.24)",
        },
        spokes: {
          connectorColors: "rgba(145, 158, 171, 0.24)",
        },
      },
      radar: {
        polygons: {
          connectorColors: `rgba(145, 158, 171, 0.24)`,
          fill: {
            colors: [`transparent`],
          },
          strokeColors: "rgba(145, 158, 171, 0.24)",
        },
      },
      radialBar: {
        dataLabels: {
          total: {
            color: "#637381",
            fontSize: "0.875rem",
            fontWeight: 600,
            formatter: ({ seriesIndex, dataPointIndex, w }) => {
              const data =
                w.globals.initialSeries[seriesIndex].data[dataPointIndex];
              return data;
            },
            label: "Total",
            lineHeight: 1.5714285714285714,
            show: true,
          },
          value: {
            color: "#212B36",
            fontSize: "1.5rem",
            fontWeight: 700,
            formatter: ({ seriesIndex, dataPointIndex, w }) => {
              const data =
                w.globals.initialSeries[seriesIndex].data[dataPointIndex];
              return data;
            },
            label: "Total",
            lineHeight: 1.5,
            offsetY: 8,
          },
        },
        track: {
          background: "rgba(145, 158, 171, 0.16)",
          strokeWidth: "100%",
        },
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "40%",
            },
          },
        },
      },
      {
        breakpoint: 900,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "32%",
            },
          },
        },
      },
    ],
    states: {
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
      hover: {
        filter: {
          type: `lighten`,
          value: 0.04,
        },
      },
    },
    stroke: {
      colors: ["#fff"],
      curve: "smooth",
      lineCap: "round",
      width: 3,
    },
    tooltip: {
      fillSeriesColor: false,
      x: { show: false },
      y: { show: false},
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      convertedCatToNumeric: false,
    },
  };

  return (
    <div className="card__sales">
      <div className="card__sales__header">
        <Text title medium>
        {title}
        </Text>
      </div>
      <div className="card__sales__body">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={`320`}
          width={`100%`}
        />
      </div>
    </div>
  );
};
