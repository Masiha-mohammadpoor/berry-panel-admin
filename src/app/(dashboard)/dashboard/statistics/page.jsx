import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';

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
        <div><InsertDriveFileTwoToneIcon className="w-10 h-10 text-success-500"/></div>
      </div>
      <div className="bg-light rounded-md col-span-3 p-6 flex justify-between items-center">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg font-semibold">500</h3>
          <p className="text-gray-600 font-light">Downloads</p>
        </div>
        <div><ThumbDownAltTwoToneIcon className="w-10 h-10 text-secondary-500"/></div>
      </div>
      </article>
    </section>
  );
};

export default Statistics;
