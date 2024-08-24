"use client";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { IconButton } from "@mui/material";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import Chart from "react-apexcharts";
import SensorsIcon from "@mui/icons-material/Sensors";
import { GoShareAndroid } from "react-icons/go";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineSensors } from "react-icons/md";
import { TbChartCircles } from "react-icons/tb";

const Analytics = () => {
  return (
    <section>
      {/*  */}
      <article className="grid grid-cols-6 gap-6 grid-rows-6">
        {/* 1 */}
        <div className="relative overflow-hidden col-span-4 bg-light rounded-md pt-8 row-span-6">
          <div className="px-5">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">Market Share</h2>
              <div className="flex gap-x-2 text-xl">
                <TrendingDownIcon className="text-3xl text-error-600" />
                <p className="font-bold">27,695.65</p>
              </div>
            </div>
            <p className="text-sm mt-3">Department wise monthly sales report</p>
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
        <div className="col-span-2 rounded-lg bg-light row-span-3 grid grid-cols-2 grid-rows-2">
          <div className="col-span-2 row-span-1 border-b border-b-gray-200 grid grid-cols-2">
            <div className="flex justify-center items-center gap-x-2">
              <div className="text-primary-600 bg-secondary-200 rounded-md w-10 h-10 flex justify-center items-center text-2xl">
                <GoShareAndroid />
              </div>
              <div>
                <p className="font-semibold text-sm">1000</p>
                <p className="text-gray-600 text-xs">SHARES</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center gap-x-2 border-l border-l-gray-200">
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
            <div className="col-span-1 flex justify-center items-center gap-x-2 ">
              <div className="text-primary-600 bg-secondary-200 rounded-md w-10 h-10 flex justify-center items-center text-2xl">
                <TbChartCircles />
              </div>
              <div>
                <p className="font-semibold text-sm">3550</p>
                <p className="text-gray-600 text-xs">RETURNS</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center gap-x-2 border-l border-r-gray-200">
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
        <div className="bg-red-200 col-span-2 row-span-6">3</div>
        <div className="bg-red-200 col-span-4 row-span-2">4</div>
      </article>
    </section>
  );
};

export default Analytics;
