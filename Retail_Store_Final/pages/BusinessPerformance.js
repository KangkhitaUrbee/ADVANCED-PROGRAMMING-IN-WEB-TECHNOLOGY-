import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart for client-side rendering
const DynamicReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BusinessPerformance = () => {
  const [month, setMonth] = useState("1");
  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const theme = useTheme();

  const optionscolumnchart = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: ["#6F42C1", "#E1BEE7"], // Purple-800 and Purple-200



    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
        "22/08",
        "23/08",
      ],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };

  const seriescolumnchart = [
    {
      name: "Eanings this month",
      data: [255, 290, 200, 250, 290, 80, 255, 290],
    },
    {
      name: "Expense this month",
      data: [180, 150, 125, 115, 150, 110, 180, 150],
    },
  ];

  return (
    <div>
      <Select
        labelId="month-dd"
        id="month-dd"
        value={month}
        size="small"
        onChange={handleChange}
      >
        <MenuItem value={1}>January 2023</MenuItem>
        <MenuItem value={2}>February 2023</MenuItem>
        <MenuItem value={3}>March 2023</MenuItem>
        <MenuItem value={4}>April 2023</MenuItem>
        <MenuItem value={5}>May 2023</MenuItem>
        <MenuItem value={6}>June 2023</MenuItem>
        <MenuItem value={7}>July 2023</MenuItem>
        <MenuItem value={8}>August 2023</MenuItem>
        <MenuItem value={9}>September 2023</MenuItem>
        <MenuItem value={10}>October 2023</MenuItem>
        <MenuItem value={11}>November 2023</MenuItem>
        <MenuItem value={12}>December 2023</MenuItem>
      </Select>

      {/* Use DynamicReactApexChart for client-side rendering */}
      <DynamicReactApexChart
        // @ts-ignore
        options={optionscolumnchart}
        series={seriescolumnchart}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default BusinessPerformance;
