"use client";
import {
  areaCharOptionsInChartsPage,
  circleChartInChartPage,
} from "@/constants/chartOptions";
import Chart from "react-apexcharts";
import { IoIosArrowForward } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { IconButton } from "@mui/material";

const Charts = () => {
  return (
    <section className="flex flex-col gap-y-6">
      {/* 1 */}
      <article className="bg-light rounded-md flex justify-between p-4">
        <h2 className="text-lg font-semibold">Chart</h2>
        <div className="flex items-center gap-x-4">
          <div>
            <IoHome className="text-primary-600" />
          </div>
          <div>
            <IoIosArrowForward className="text-gray-500" />
          </div>
          <p className="font-semibold text-sm text-gray-500">Chart</p>
        </div>
      </article>
      {/* 2 */}
      <article className="w-full grid grid-cols-12 gap-x-6">
        <div className="col-span-3 rounded-md bg-secondary-500 flex flex-col gap-y-3 overflow-hidden">
          <div className="w-full flex justify-between items-start p-6">
            <div className="text-white">
              <p className="text-lg font-semibold">4000</p>
              <p className="text-sm">Total Sales</p>
            </div>
            <p className="text-white text-sm">42%</p>
          </div>
          <div className="w-full">
            <Chart
              type="area"
              height={100}
              options={areaCharOptionsInChartsPage}
              series={[
                {
                  name: "series1",
                  data: [0, 15, 10, 20, 30, 20, 25],
                },
              ]}
            />
          </div>
        </div>
        <div className="col-span-3 rounded-md bg-error-500 flex flex-col gap-y-3 overflow-hidden">
          <div className="w-full flex justify-between items-start p-6">
            <div className="text-white">
              <p className="text-lg font-semibold">2500</p>
              <p className="text-sm">Total Comment</p>
            </div>
            <p className="text-white text-sm">15%</p>
          </div>
          <div className="w-full">
            <Chart
              type="area"
              height={100}
              options={areaCharOptionsInChartsPage}
              series={[
                {
                  name: "series1",
                  data: [0, 15, 10, 40, 30, 20, 25],
                },
              ]}
            />
          </div>
        </div>
        <div className="col-span-3 rounded-md bg-success-500 flex flex-col gap-y-3 overflow-hidden">
          <div className="w-full flex justify-between items-start p-6">
            <div className="text-white">
              <p className="text-lg font-semibold">2500</p>
              <p className="text-sm">Total Status</p>
            </div>
            <p className="text-white text-sm">95%</p>
          </div>
          <div className="w-full">
            <Chart
              type="area"
              height={100}
              options={areaCharOptionsInChartsPage}
              series={[
                {
                  name: "series1",
                  data: [0, 15, 10, 50, 30, 20, 25],
                },
              ]}
            />
          </div>
        </div>
        <div className="col-span-3 rounded-md bg-primary-700 flex flex-col gap-y-3 overflow-hidden">
          <div className="w-full flex justify-between items-start p-6">
            <div className="text-white">
              <p className="text-lg font-semibold">12500</p>
              <p className="text-sm">Total Visitors</p>
            </div>
            <p className="text-white text-sm">75%</p>
          </div>
          <div className="w-full">
            <Chart
              type="area"
              height={100}
              options={areaCharOptionsInChartsPage}
              series={[
                {
                  name: "series1",
                  data: [0, 15, 10, 40, 10, 20, 40],
                },
              ]}
            />
          </div>
        </div>
      </article>
      {/* 3 */}
      <article className="grid grid-cols-7 gap-x-6">
        {/* 1 */}
        <div className="col-span-4 rounded-md">
          <div className="relative overflow-hidden bg-light rounded-md pt-8">
            <div className="px-5">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl">Market Share</h2>
                <div className="flex gap-x-2 text-xl">
                  <TrendingDownIcon className="text-3xl text-error-600" />
                  <p className="font-bold">27,695.65</p>
                </div>
              </div>
              <p className="text-sm mt-3">
                Department wise monthly sales report
              </p>
              <div className="mt-5 flex gap-x-6">
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
        </div>
        {/* 2 */}
        <div className="col-span-3 rounded-md bg-light">
          <h2 className="text-lg font-semibold p-5 border-b border-b-gray-200">
            Total Revenue
          </h2>
          <div className="p-6">
            <div>
              <Chart
                type="donut"
                height={240}
                options={circleChartInChartPage}
                series={[1200,900,500]}
              />
            </div>
          </div>
          <div className="w-full px-6 flex justify-between items-center">
          <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-semibold">youtube</p>
              <p className="text-error-600 text-sm font-semibold">+16.58%</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-semibold">Facebook</p>
              <p className="text-secondary-500 text-sm font-semibold">+45.36%</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-semibold">twitter</p>
              <p className="text-primary-600 text-sm font-semibold">-50.6%</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Charts;
