"use client";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PaymentIcon from "@mui/icons-material/Payment";
import OutboundIcon from "@mui/icons-material/Outbound";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import {
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import Chart from "react-apexcharts";
import { useState } from "react";

const lineChartOptions = {
  stroke: {
    curve: "smooth",
    width: 3,
    colors: ["#fff"],
  },
  colors: ["#fff"],
  chart: {
    toolbar: { show: false },
    height: "100",
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: { show: false },
  tooltip: {
    fillSeriesColor: false,
    theme: "dark",
    style: {},
    marker: {
      show: false,
    },
    x: { show: false },
    y: {
      title: {
        formatter: (seriesName) => `Total Order`,
      },
    },
  },
};

const barChartOptions = {
  chart: {
    type: "bar",
    stacked: true,
    toolbar: {
      offsetX: -15,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
      },
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last",
      columnWidth: 20, // 'all', 'last'
      dataLabels: {
        total: {
          enabled: false,
        },
      },
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  legend: {
    position: "bottom",
    offsetY: 10,
    markers: {
      size: 10,
      shape: "circle",
      offsetX: -5,
    },
    itemMargin: {
      horizontal: 15,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
};

const Dashboard = () => {
  const [time, setTime] = useState("Today");
  return (
    <section>
      <article className="grid grid-cols-6 gap-x-6">
        {/* 1 */}
        <div className="col-span-2 bg-primary-700 rounded-lg p-4 relative overflow-hidden">
          <div className="absolute bottom-24 left-28 bg-primary-800 w-52 h-52 rounded-full"></div>
          <div className="absolute bottom-14 left-44 bg-primary-900 w-52 h-52 rounded-full"></div>
          <div className="w-full h-12 flex justify-between items-start relative">
            <IconButton className="absolute bottom-0 flex justify-center items-center cursor-pointer p-2.5 rounded-md bg-primary-900 hover:bg-primary-900 text-light">
              <PaymentIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="delete"
              className="absolute top-0 right-0 rounded-md transition bg-primary-700 text-primary-300 p-1.5 hover:bg-primary-700"
            >
              <MoreHorizIcon />
            </IconButton>
          </div>
          <div className="flex gap-x-1 mt-3">
            <h1 className="text-light text-4xl font-semibold">$500.00</h1>
            <IconButton className="text-primary-300 hover:text-primary-300 relative -top-1">
              <OutboundIcon />
            </IconButton>
          </div>
          <p className="text-primary-300 font-semibold mt-4 mb-3">
            Total Earning
          </p>
        </div>
        {/* 2 */}
        <div className="col-span-2 bg-secondary-500 rounded-lg p-4 relative overflow-hidden">
          <div className="absolute bottom-24 left-28 bg-secondary-600 w-52 h-52 rounded-full"></div>
          <div className="absolute bottom-14 left-44 bg-secondary-700 w-52 h-52 rounded-full"></div>
          <div className="w-full h-12 flex justify-between items-start relative">
            <IconButton className="absolute bottom-0 flex justify-center items-center cursor-pointer p-2.5 rounded-md bg-secondary-700 hover:bg-secondary-700 text-light">
              <ShoppingBagOutlinedIcon fontSize="small" />
            </IconButton>
            <div className="absolute right-0 top-0">
              <Button
                size="small"
                variant="text"
                className="capitalize shadow-none text-light"
              >
                Month
              </Button>
              <Button
                size="small"
                variant="contained"
                className="capitalize bg-secondary-500 shadow-none hover:shadow-none hover:bg-secondary-600"
              >
                Year
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-x-1 mt-3">
            <div className="flex flex-col gap-x-1">
              <div className="flex gap-x-1">
                <h1 className="text-light text-4xl font-semibold">$961</h1>
                <IconButton className="text-secondary-300 relative -top-1 rotate-180">
                  <OutboundIcon />
                </IconButton>
              </div>
              <p className="text-secondary-200 font-semibold mt-4 mb-3">
                Total Order
              </p>
            </div>
            <div className="z-30 w-40 h-20 p-0 flex items-center">
              <Chart
                options={lineChartOptions}
                series={[
                  {
                    data: [35, 44, 9, 54, 45, 66, 41, 69],
                  },
                ]}
                type="line"
                height={100}
              />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="col-span-2 rounded-lg grid grid-rows-2 gap-y-4">
          <div className="relative bg-secondary-500 rounded-lg flex items-center px-4 overflow-hidden">
            <div className="absolute w-28 h-28 rounded-full bg-secondary-400 opacity-50 -right-8 bottom-10"></div>
            <div className="absolute w-28 h-28 rounded-full bg-secondary-400 opacity-50 -right-14 top-3"></div>
            <IconButton className="mr-4 flex justify-center items-center cursor-pointer p-3 rounded-md bg-secondary-700 text-light hover:bg-secondary-700">
              <PaymentIcon />
            </IconButton>
            <div className="text-light">
              <p className="font-bold">$203k</p>
              <p className="text-xs">Total Income</p>
            </div>
          </div>
          <div className="relative bg-light rounded-lg flex items-center px-4 overflow-hidden">
            <div className="absolute w-28 h-28 rounded-full bg-warning-300 opacity-50 -right-14 top-3"></div>
            <div className="absolute w-28 h-28 rounded-full bg-warning-300 opacity-50 -right-8 bottom-10"></div>
            <IconButton className="mr-4 flex justify-center items-center cursor-pointer p-3 rounded-md bg-warning-100 text-warning-400 hover:bg-warning-100">
              <StorefrontTwoToneIcon />
            </IconButton>
            <div>
              <p className="font-bold">$203k</p>
              <p className="text-xs">Total Income</p>
            </div>
          </div>
        </div>
      </article>
      {/* chart */}
      <article className="grid grid-cols-6 gap-x-6 mt-6">
        {/* Total Growth */}
        <div className="col-span-4 bg-light rounded-lg p-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-y-2">
              <p className="text-xs text-gray-600">Total Growth</p>
              <h2 className="font-semibold text-xl">$2,324.00</h2>
            </div>
            <div>
              <FormControl fullWidth>
                <Select
                  className="rounded-md h-12 font-semibold text-sm"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <MenuItem value="Today" className="text-sm">
                    Today
                  </MenuItem>
                  <MenuItem value="Month" className="text-sm">
                    This Month
                  </MenuItem>
                  <MenuItem value="Years" className="text-sm">
                    This Years
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="mt-4 pr-5 p-4 h-auto">
            <Chart
              options={barChartOptions}
              series={[
                {
                  name: "Investment",
                  data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 12, 75],
                  color: "#93c5fd",
                },
                {
                  name: "Loss",
                  data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75],
                  color: "#3b82f6",
                },
                {
                  name: "Profit",
                  data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
                  color: "#7c3aed",
                },
                {
                  name: "Maintenance",
                  data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0],
                  color: "#ddd6fe",
                },
              ]}
              height={450}
              type="bar"
            />
          </div>
        </div>
        {/* Popular Stocks */}
        <div className="col-span-2 bg-light rounded-lg p-4"></div>
      </article>
    </section>
  );
};

export default Dashboard;
