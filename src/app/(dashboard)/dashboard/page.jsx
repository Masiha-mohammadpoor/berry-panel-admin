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
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import Chart from "react-apexcharts";
import { useState } from "react";
import { lineChartOptions, barChartOptions, areaCharOptions } from "@/constants/chartOptions";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const stocksData = [
  {
    id: 1,
    name: "Bajaj Finery",
    profit: true,
    percent: 10,
    amount: 1839.0,
  },
  {
    id: 2,
    name: "TTML",
    profit: false,
    percent: 10,
    amount: 100.0,
  },
  {
    id: 3,
    name: "Reliance",
    profit: true,
    percent: 10,
    amount: 200.0,
  },
  {
    id: 4,
    name: "TTML",
    profit: false,
    percent: 10,
    amount: 189.0,
  },
  {
    id: 5,
    name: "Stolon",
    profit: false,
    percent: 10,
    amount: 189.0,
  },
];

const Dashboard = () => {
  const [time, setTime] = useState("Today");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <div className="col-span-2 bg-light rounded-lg p-4">
          <div className="w-full flex justify-between items-center">
            <h2 className="font-semibold">Popular Stocks</h2>
            <div>
              <div className="relative">
                <IconButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="text-secondary-400 hover:bg-light"
                >
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  className="absolute -left-20"
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem className="text-sm" onClick={handleClose}>
                    Today
                  </MenuItem>
                  <MenuItem className="text-sm" onClick={handleClose}>
                    This Month
                  </MenuItem>
                  <MenuItem className="text-sm" onClick={handleClose}>
                    This Year
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
          <div className="mt-3 w-full bg-primary-200 rounded-lg pt-3">
            <div className="px-3 flex justify-between items-start">
              <div>
                <p className="text-primary-700 text-sm font-semibold mb-1">
                  Bajaj Finery
                </p>
                <p className="text-xs">10% Profit</p>
              </div>
              <p className="font-semibold text-sm">$1839.00</p>
            </div>
            {/* chart */}
            <div className="mt-4">
              <div className="ml-2">
                <Chart
                  type="area"
                  height={100}
                  options={areaCharOptions}
                  series={[
                    {
                      name: "series1",
                      data: [0, 15, 10, 50, 30, 40, 25],
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          {/* list */}
          <div className="mt-8">
            {/* child */}
            {stocksData.map((s) => {
              return (
                <div
                  key={s.id}
                  className={`mb-3 w-full flex justify-between items-start pb-3 ${
                    s.id !== stocksData.length && "border-b border-b-gray-200"
                  } `}
                >
                  <div>
                    <p className="text-sm font-semibold mb-1">{s.name}</p>
                    <p
                      className={`text-xs ${
                        s.profit ? "text-success-500" : "text-error-600"
                      }`}
                    >
                      {s.percent}% {s.profit ? "profit" : "loss"}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="text-sm font-semibold">${s.amount.toFixed(2)}</p>
                    <span
                      className={`w-5 h-5 flex justify-center items-center rounded-md ${
                        s.profit
                          ? "bg-success-200 text-success-500"
                          : "bg-error-200 text-error-600"
                      }`}
                    >
                      {s.profit ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="w-full flex justify-center">
              <Button variant="text" className="capitalize" size="medium">
                View All <NavigateNextIcon />
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Dashboard;
