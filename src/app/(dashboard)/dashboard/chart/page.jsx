
"use client"
import { areaCharOptionsInChartsPage } from "@/constants/chartOptions";
import Chart from "react-apexcharts";

const Charts = () => {
  return (
    <section className="flex flex-col gap-y-6">
      {/* 1 */}
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
                data: [0, 15, 10, 50, 30, 40, 25],
              }
            ]}/>
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
                data: [0, 15, 10, 50, 30, 40, 25],
              },
            ]}/>
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
                data: [0, 15, 10, 50, 30, 40, 25],
              },
            ]}/>
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
                data: [0, 15, 10, 50, 30, 40, 25],
              },
            ]}/>
          </div>
        </div>
      </article>
    </section>
  );
}
 
export default Charts;