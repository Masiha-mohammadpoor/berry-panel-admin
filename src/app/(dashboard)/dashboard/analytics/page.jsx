"use client";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { IconButton } from "@mui/material";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import Chart from "react-apexcharts";

const Analytics = () => {
  return (
    <section>
      {/*  */}
      <article className="grid grid-cols-6 gap-6">
        {/* 1 */}
        <div className="relative overflow-hidden col-span-4 bg-light rounded-md pt-8">
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
        <div className="col-span-2 rounded-lg bg-light">2</div>
        <div className="bg-red-200 col-span-4">3</div>
        <div className="bg-red-200 col-span-2">4</div>
      </article>
    </section>
  );
};

export default Analytics;
