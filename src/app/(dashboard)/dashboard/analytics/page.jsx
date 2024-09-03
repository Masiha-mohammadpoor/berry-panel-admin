"use client";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import Chart from "react-apexcharts";
import { GoShareAndroid } from "react-icons/go";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineSensors } from "react-icons/md";
import { TbChartCircles } from "react-icons/tb";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const revenueData = [
  {
    id: 1,
    name: "Bitcoin",
    profit: true,
    amount: 145.85,
  },
  {
    id: 2,
    name: "Ethereum",
    profit: false,
    amount: 6.368,
  },
  {
    id: 3,
    name: "Ripple",
    profit: true,
    amount: 458.63,
  },
  {
    id: 4,
    name: "Neo",
    profit: false,
    amount: 5.631,
  },
  {
    id: 5,
    name: "Ethereum",
    profit: false,
    amount: 6.368,
  },
  {
    id: 6,
    name: "Ripple",
    profit: true,
    amount: 458.63,
  },
  {
    id: 7,
    name: "Neo",
    profit: false,
    amount: 5.631,
  },
  {
    id: 8,
    name: "Ethereum",
    profit: false,
    amount: 6.368,
  },
  {
    id: 9,
    name: "Ripple",
    profit: true,
    amount: 458.63,
  },
  {
    id: 10,
    name: "Neo",
    profit: false,
    amount: 5.631,
  },
];

const customersData = [
  {
    id: 1,
    name: "John Deo",
    country: "Brazil",
    flag: "https://flagcdn.com/br.svg",
    average: 25.3,
  },
  {
    id: 2,
    name: "Angelina Jolly",
    country: "USA",
    flag: "https://flagcdn.com/us.svg",
    average: 56.5,
  },
  {
    id: 3,
    name: "Jenifer Vintage",
    country: "Germany",
    flag: "https://flagcdn.com/de.svg",
    average: 10.4,
  },
  {
    id: 4,
    name: "Lori Moore",
    country: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    average: 10.02,
  },
  {
    id: 5,
    name: "Allianz Dacron",
    country: "Australia",
    flag: "https://flagcdn.com/au.svg",
    average: 5.2,
  },
  {
    id: 6,
    name: "John Deo",
    country: "Brazil",
    flag: "https://flagcdn.com/br.svg",
    average: 25.3,
  },
  {
    id: 7,
    name: "Angelina Jolly",
    country: "USA",
    flag: "https://flagcdn.com/us.svg",
    average: 56.5,
  },
  {
    id: 8,
    name: "Jenifer Vintage",
    country: "Germany",
    flag: "https://flagcdn.com/de.svg",
    average: 10.4,
  },
  {
    id: 9,
    name: "Lori Moore",
    country: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    average: 10.02,
  },
  {
    id: 10,
    name: "Allianz Dacron",
    country: "Australia",
    flag: "https://flagcdn.com/au.svg",
    average: 5.2,
  },
];

const Analytics = () => {
  return (
    <section className="w-full">
      {/*  */}
      <article className="grid grid-cols-6 gap-6">
        {/* 1 */}
        <div className="relative overflow-hidden col-span-6 lg:col-span-4 bg-light rounded-md pt-8 row-span-6">
          <div className="px-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-3">
              <h2 className="font-semibold text-xl">Market Share</h2>
              <div className="flex gap-x-2 text-xl">
                <TrendingDownIcon className="text-3xl text-error-600" />
                <p className="font-bold">27,695.65</p>
              </div>
            </div>
            <p className="text-sm mt-3">Department wise monthly sales report</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-x-2">
                <IconButton className="flex justify-center items-center p-2 rounded-lg bg-primary-200 text-primary-600 hover:bg-primary-200">
                  <LuFacebook />
                </IconButton>
                <p className="font-bold">+ 45.36%</p>
              </div>
              <div className="flex items-center gap-x-2">
                <IconButton className="flex justify-center items-center p-2 rounded-lg bg-secondary-200 text-secondary-600 hover:bg-secondary-200">
                  <FiTwitter />
                </IconButton>
                <p className="font-bold">- 50.69%</p>
              </div>
              <div className="flex items-center gap-x-2">
                <IconButton className="flex justify-center items-center p-2 rounded-lg bg-error-200 text-error-600 hover:bg-error-200">
                  <FiYoutube />
                </IconButton>
                <p className="font-bold">+ 16.85%</p>
              </div>
            </div>
          </div>
          {/* chart */}
          <div className="mt-16">
            <Chart
              height={170}
              options={{
                chart: {
                  toolbar: {
                    show: false,
                  },
                  height: 100,
                  type: "area",
                  sparkline: {
                    enabled: true,
                  },
                },
                colors: ["#5b21b6", "#3b82f6", "#f43f5e"],
                grid: {
                  show: false,
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: "smooth",
                  width: 2,
                },
                xaxis: {
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
                  labels: {
                    show: false,
                  },
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 0,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                  },
                },
              }}
              series={[
                {
                  name: "Facebook",
                  data: [10, 90, 65, 85, 40, 80, 30],
                },
                {
                  name: "Twitter",
                  data: [50, 30, 25, 15, 55, 10, 25],
                },
                {
                  name: "Youtube",
                  data: [5, 50, 40, 55, 20, 40, 20],
                },
              ]}
              type="area"
            />
          </div>
        </div>
        {/* 2 */}
        <div className="col-span-6 lg:col-span-2 row-span-2 rounded-md bg-light grid grid-cols-2 grid-rows-2">
          <div className="col-span-2 row-span-1 border-b border-b-gray-200 grid grid-cols-2">
            <div className="flex justify-start items-center gap-x-2 pl-5 py-5">
              <div className="text-primary-600 bg-secondary-200 rounded-md w-10 h-10 flex justify-center items-center text-2xl">
                <GoShareAndroid />
              </div>
              <div>
                <p className="font-semibold text-sm">1000</p>
                <p className="text-gray-600 text-xs">SHARES</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-start items-center py-5 gap-x-2 pl-5 border-l border-l-gray-200">
              <div className="text-primary-600 bg-secondary-200 rounded-md w-10 h-10 flex justify-center items-center text-2xl">
                <MdOutlineSensors />
              </div>
              <div>
                <p className="font-semibold text-sm">600</p>
                <p className="text-gray-600 text-xs">NETWORK</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-1 grid grid-cols-2">
            <div className="col-span-1 flex justify-start items-center gap-x-2  pl-5  py-5">
              <div className="text-primary-600 bg-secondary-200 rounded-md w-10 h-10 flex justify-center items-center text-2xl">
                <TbChartCircles />
              </div>
              <div>
                <p className="font-semibold text-sm">3550</p>
                <p className="text-gray-600 text-xs">RETURNS</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-start items-center gap-x-2 pl-5 py-5 border-l border-r-gray-200">
              <div className="text-primary-600 bg-secondary-200 rounded-md w-10 h-10 flex justify-center items-center text-2xl">
                <CiCreditCard1 />
              </div>
              <div>
                <p className="font-semibold text-sm">100%</p>
                <p className="text-gray-600 text-xs">ORDER</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="rounded-md col-span-6 lg:col-span-2 bg-light row-span-7">
          <h2 className="text-lg font-semibold p-5 border-b border-b-gray-200">
            Total Revenue
          </h2>
          <div className="h-[25rem] overflow-y-auto revenueList">
            {revenueData.map((r) => {
              return (
                <div
                  key={r.id}
                  className={`flex justify-between items-center p-4 ${
                    r.id !== revenueData.length && "border-b border-b-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-x-3">
                    {r.profit ? (
                      <IoMdArrowDropup className="text-success-500 text-lg" />
                    ) : (
                      <IoMdArrowDropdown className="text-error-600 text-lg" />
                    )}
                    <p className="text-sm">{r.name}</p>
                  </div>
                  <div>
                    {r.profit ? (
                      <p className="text-success-500 text-sm">+ {r.amount}</p>
                    ) : (
                      <p className="text-error-600 text-sm">- {r.amount}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* 4 */}
        <div className="col-span-6 lg:col-span-4 row-span-2 grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1 flex justify-between items-center pl-6 pr-5 py-2 rounded-md bg-primary-700">
            <div className="text-white flex flex-col gap-y-1">
              <p className="text-sm font-bold">Revenue</p>
              <h3 className="text-lg font-semibold">$42,562</h3>
              <p className="text-xs">$50,032 Last Month</p>
            </div>
            <div>
              <MonetizationOnTwoToneIcon className="w-24 h-24 text-primary-400" />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 flex justify-between items-center pl-6 pr-5 py-2 rounded-md bg-secondary-500">
            <div className="text-white flex flex-col gap-y-1">
              <p className="text-sm font-bold">Orders Received</p>
              <h3 className="text-lg font-semibold">486</h3>
              <p className="text-xs">20% Increase</p>
            </div>
            <div>
              <AccountCircleTwoToneIcon className="w-24 h-24 text-secondary-300" />
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="bg-light rounded-md col-span-6 lg:col-span-4 row-span-9">
          <h2 className="text-lg font-semibold p-5 border-b border-b-gray-200">
            Latest Customers
          </h2>
          <TableContainer sx={{ maxHeight: "24rem" }} className="revenueList">
            <Table stickyHeader sx={{ minWidth : "500px"}}>
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold" align="left">
                    #
                  </TableCell>
                  <TableCell className="font-bold" align="left">
                    Country
                  </TableCell>
                  <TableCell className="font-bold" align="left">
                    Name
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Average
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customersData.map((c) => {
                  return (
                    <TableRow key={c.id}>
                      <TableCell align="left" className="w-fit">
                        <div>
                        <Image
                          src={c.flag}
                          alt={c.country}
                          width={30}
                          height={30}
                        />
                        </div>
                      </TableCell>
                      <TableCell align="left">{c.country}</TableCell>
                      <TableCell align="left">{c.name}</TableCell>
                      <TableCell align="center">{c.average}%</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="p-5 border-t-2 border-b-gray-200 flex justify-end items-center">
            <Button variant="text" className="capitalize text-sm">
              View All Latest Customers
            </Button>
          </div>
        </div>
        {/* 6 */}
        <div className="col-span-6 lg:col-span-2 w-full grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 relative overflow-hidden flex justify-center items-center bg-primary-700 rounded-md p-8">
            <div className="absolute -left-4 -bottom-5">
              <AccountCircleTwoToneIcon className="w-24 h-24 text-primary-400 rotate-[35deg]" />
            </div>
            <div className="flex flex-col justify-center items-center text-white">
              <h3 className="font-bold">1,658</h3>
              <p className="text-sm">Daily user</p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 relative overflow-hidden flex justify-center items-center bg-secondary-500 rounded-md p-8">
            <div className="absolute -left-4 -bottom-5">
              <DescriptionOutlinedIcon className="w-24 h-24 text-secondary-300 rotate-[35deg]" />
            </div>
            <div className="flex flex-col justify-center items-center text-white">
              <h3 className="font-bold">1K</h3>
              <p className="text-sm">Daily page view</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Analytics;
