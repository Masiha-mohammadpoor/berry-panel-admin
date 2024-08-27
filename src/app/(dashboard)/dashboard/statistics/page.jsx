import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';



const Statistics = () => {
  return (
    <section className="flex flex-col gap-y-6">
      {/* 1 */}
      <article className="bg-light rounded-md flex justify-between p-4">
        <h2 className="text-lg font-semibold">Statistics</h2>
        <div className="flex items-center gap-x-4">
          <div><IoHome className="text-primary-600"/></div>
          <div><IoIosArrowForward className="text-gray-500"/></div>
          <p className="font-semibold text-sm text-gray-500">Statistics</p>
        </div>
      </article>
      {/* 2 */}
      <article className="grid grid-cols-12 gap-x-6">
      <div className="bg-light rounded-md col-span-3 p-6 flex justify-between items-center">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg font-semibold">$30200</h3>
          <p className="text-gray-600 font-light">All Earnings</p>
        </div>
        <div><InsertChartTwoToneIcon className="w-10 h-10 text-primary-500"/></div>
      </div>
      <div className="bg-light rounded-md col-span-3 p-6 flex justify-between items-center">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg font-semibold">145</h3>
          <p className="text-gray-600 font-light">Task</p>
        </div>
        <div><CalendarTodayTwoToneIcon className="w-10 h-10 text-error-500"/></div>
      </div>
      <div className="bg-light rounded-md col-span-3 p-6 flex justify-between items-center">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg font-semibold">290+</h3>
          <p className="text-gray-600 font-light">Page Views</p>
        </div>
        <div><DescriptionTwoToneIcon className="w-10 h-10 text-success-500"/></div>
      </div>
      <div className="bg-light rounded-md col-span-3 p-6 flex justify-between items-center">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg font-semibold">500</h3>
          <p className="text-gray-600 font-light">Downloads</p>
        </div>
        <div><ThumbDownAltTwoToneIcon className="w-10 h-10 text-secondary-500"/></div>
      </div>
      </article>
      {/* 3 */}
      <article className="grid grid-cols-12 gap-x-6">
      <div className="h-32 col-span-4 flex justify-between items-center pl-6 pr-5 py-2 rounded-md bg-primary-700">
            <div className="text-white flex flex-col gap-y-1">
              <p className="text-sm font-bold">Revenue</p>
              <h3 className="text-lg font-semibold">$42,562</h3>
              <p className="text-xs">$50,032 Last Month</p>
            </div>
            <div>
              <MonetizationOnTwoToneIcon className="w-24 h-24 text-primary-400" />
            </div>
          </div>
          <div className="h-32 col-span-4 flex justify-between items-center pl-6 pr-5 py-2 rounded-md bg-secondary-500">
            <div className="text-white flex flex-col gap-y-1">
              <p className="text-sm font-bold">Orders Received</p>
              <h3 className="text-lg font-semibold">486</h3>
              <p className="text-xs">20% Increase</p>
            </div>
            <div>
              <AccountCircleTwoToneIcon className="w-24 h-24 text-secondary-300" />
            </div>
          </div>
          <div className="h-32 col-span-4 flex justify-between items-center pl-5 pr-5 py-2 rounded-md bg-error-600">
            <div className="text-white flex flex-col gap-y-1">
              <p className="text-sm font-bold">Total Sales</p>
              <h3 className="text-lg font-semibold">1641</h3>
              <p className="text-xs">$1,055 Revenue Generated</p>
            </div>
            <div>
              <ShoppingBagTwoToneIcon className="w-24 h-24 text-error-300" />
            </div>
          </div>
      </article>
      {/* 4 */}
      <article className="grid grid-cols-12 gap-x-6">
          <div className="col-span-3 bg-light rounded-md p-6 flex justify-between items-center">
            <div className="flex flex-col gap-y-1">
              <div><AccountCircleTwoToneIcon className="w-7 h-7 text-secondary-500"/></div>
              <p className="text-sm font-bold">Visitors</p>
            </div>
            <div className="text-lg font-semibold text-gray-700">6035</div>
          </div>
          <div className="col-span-3 bg-light rounded-md p-6 flex justify-between items-center">
            <div className="flex flex-col gap-y-1">
            <div><DescriptionTwoToneIcon className="w-7 h-7 text-error-500"/></div>
            <p className="text-sm font-bold">Invoices</p>
            </div>
            <div className="text-lg font-semibold text-gray-700">19</div>
          </div>
          <div className="col-span-3 bg-light rounded-md p-6 flex justify-between items-center">
            <div className="flex flex-col gap-y-1">
            <div><BugReportTwoToneIcon className="w-7 h-7 text-warning-500"/></div>
            <p className="text-sm font-bold">Issues</p>
            </div>
            <div className="text-lg font-semibold text-gray-700">63</div>
          </div>
          <div className="col-span-3 bg-light rounded-md p-6 flex justify-between items-center">
            <div className="flex flex-col gap-y-1">
            <div><FolderOpenTwoToneIcon className="w-7 h-7 text-success-500"/></div>
            <p className="text-sm font-bold">Projects</p>
            </div>
            <div className="text-lg font-semibold text-gray-700">95%</div>
          </div>
      </article>
    </section>
  );
};

export default Statistics;
