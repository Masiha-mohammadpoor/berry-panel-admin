import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import InsertChartTwoToneIcon from "@mui/icons-material/InsertChartTwoTone";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import ThumbDownAltTwoToneIcon from "@mui/icons-material/ThumbDownAltTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import BugReportTwoToneIcon from "@mui/icons-material/BugReportTwoTone";
import FolderOpenTwoToneIcon from "@mui/icons-material/FolderOpenTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import EmojiEmotionsTwoToneIcon from "@mui/icons-material/EmojiEmotionsTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import AdjustTwoToneIcon from '@mui/icons-material/AdjustTwoTone';
import PanToolTwoToneIcon from '@mui/icons-material/PanToolTwoTone';

const Statistics = () => {
  return (
    <section className="flex flex-col gap-y-6">
      {/* 1 */}
      <article className="bg-light rounded-md flex justify-between p-4">
        <h2 className="text-lg font-semibold">Statistics</h2>
        <div className="flex items-center gap-x-4">
          <div>
            <IoHome className="text-primary-600" />
          </div>
          <div>
            <IoIosArrowForward className="text-gray-500" />
          </div>
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
          <div>
            <InsertChartTwoToneIcon className="w-10 h-10 text-primary-500" />
          </div>
        </div>
        <div className="bg-light rounded-md col-span-3 p-6 flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg font-semibold">145</h3>
            <p className="text-gray-600 font-light">Task</p>
          </div>
          <div>
            <CalendarTodayTwoToneIcon className="w-10 h-10 text-error-500" />
          </div>
        </div>
        <div className="bg-light rounded-md col-span-3 p-6 flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg font-semibold">290+</h3>
            <p className="text-gray-600 font-light">Page Views</p>
          </div>
          <div>
            <DescriptionTwoToneIcon className="w-10 h-10 text-success-500" />
          </div>
        </div>
        <div className="bg-light rounded-md col-span-3 p-6 flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg font-semibold">500</h3>
            <p className="text-gray-600 font-light">Downloads</p>
          </div>
          <div>
            <ThumbDownAltTwoToneIcon className="w-10 h-10 text-secondary-500" />
          </div>
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
            <div>
              <AccountCircleTwoToneIcon className="w-7 h-7 text-secondary-500" />
            </div>
            <p className="text-sm font-semibold">Visitors</p>
          </div>
          <div className="text-lg font-semibold text-gray-700">6035</div>
        </div>
        <div className="col-span-3 bg-light rounded-md p-6 flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <div>
              <DescriptionTwoToneIcon className="w-7 h-7 text-error-500" />
            </div>
            <p className="text-sm font-semibold">Invoices</p>
          </div>
          <div className="text-lg font-semibold text-gray-700">19</div>
        </div>
        <div className="col-span-3 bg-light rounded-md p-6 flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <div>
              <BugReportTwoToneIcon className="w-7 h-7 text-warning-500" />
            </div>
            <p className="text-sm font-semibold">Issues</p>
          </div>
          <div className="text-lg font-semibold text-gray-700">63</div>
        </div>
        <div className="col-span-3 bg-light rounded-md p-6 flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <div>
              <FolderOpenTwoToneIcon className="w-7 h-7 text-success-500" />
            </div>
            <p className="text-sm font-semibold">Projects</p>
          </div>
          <div className="text-lg font-semibold text-gray-700">95%</div>
        </div>
      </article>
      {/* 5 */}
      <article className="grid grid-cols-12 gap-x-6">
        <div className="flex items-center gap-x-4 col-span-3 bg-light rounded-md h-24 overflow-hidden">
          <div className="h-full w-16 bg-primary-500 flex justify-center items-center">
            <AccountCircleTwoToneIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold">2,672</p>
            <p className="text-sm font-light">Last week users</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 col-span-3 bg-light rounded-md h-24 overflow-hidden">
          <div className="h-full w-16 bg-secondary-500 flex justify-center items-center">
            <AccountBalanceWalletTwoToneIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold">$6391</p>
            <p className="text-sm font-light">Total earning</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 col-span-3 bg-light rounded-md h-24 overflow-hidden">
          <div className="h-full w-16 bg-success-500 flex justify-center items-center">
            <EmojiEmotionsTwoToneIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold">9,276</p>
            <p className="text-sm font-light">Today visitors</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 col-span-3 bg-light rounded-md h-24 overflow-hidden">
          <div className="h-full w-16 bg-error-500 flex justify-center items-center">
            <ShoppingCartTwoToneIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold">3,619</p>
            <p className="text-sm font-light">New order</p>
          </div>
        </div>
      </article>
      {/* 6 */}
      <article className="grid grid-cols-12 gap-x-6">
        <div className="col-span-3 p-6 bg-light rounded-md flex flex-col justify-center items-center gap-y-3">
          <p className="text-sm font-semibold">Total Paid Users</p>
          <div className="flex items-center gap-x-2">
            <ArrowDownwardTwoToneIcon className="text-error-500"/>
            <h3 className="text-lg font-semibold">7652</h3>
          </div>
          <p className="text-xs text-gray-600">8% less Last 3 Months</p>
        </div>
        <div className="col-span-3 p-6 bg-light rounded-md flex flex-col justify-center items-center gap-y-3">
          <p className="text-sm font-semibold">Order Status</p>
          <div className="flex items-center gap-x-2">
            <ArrowUpwardTwoToneIcon className="text-success-500"/>
            <h3 className="text-lg font-semibold">625</h3>
          </div>
          <p className="text-xs text-gray-600">6% From Last 3 Months</p>
        </div>
        <div className="col-span-3 p-6 bg-light rounded-md flex flex-col justify-center items-center gap-y-3">
          <p className="text-sm font-semibold">Unique Visitors</p>
          <div className="flex items-center gap-x-2">
            <ArrowDownwardTwoToneIcon className="text-error-500"/>
            <h3 className="text-lg font-semibold">6522</h3>
          </div>
          <p className="text-xs text-gray-600">10% From Last 6 Months</p>
        </div>
        <div className="col-span-3 p-6 bg-light rounded-md flex flex-col justify-center items-center gap-y-3">
          <p className="text-sm font-semibold">Monthly Earnings</p>
          <div className="flex items-center gap-x-2">
            <ArrowUpwardTwoToneIcon className="text-success-500"/>
            <h3 className="text-lg font-semibold">5963</h3>
          </div>
          <p className="text-xs text-gray-600">36% From Last 6 Months</p>
        </div>
      </article>
      {/* 7 */}
      <article className="grid grid-cols-12 gap-x-6">
        <div className="col-span-3 p-6 rounded-md bg-primary-500 flex justify-between items-center">
            <div className="text-white">
              <h3 className="text-lg font-bold">1165 +</h3>
              <p className="text-xs font-semibold">Facebook Users</p>
            </div>
            <div><FacebookIcon className="transition-all duration-300 w-10 h-10 text-white opacity-40 hover:opacity-100 hover:scale-125"/></div>
        </div>
        <div className="col-span-3 p-6 rounded-md bg-secondary-500 flex justify-between items-center">
            <div className="text-white">
              <h3 className="text-lg font-bold">780 +</h3>
              <p className="text-xs font-semibold">Twitter Users</p>
            </div>
            <div><TwitterIcon className="transition-all duration-300 w-10 h-10 text-white opacity-40 hover:opacity-100 hover:scale-125"/></div>
        </div>
        <div className="col-span-3 p-6 rounded-md bg-slate-800 flex justify-between items-center">
            <div className="text-white">
              <h3 className="text-lg font-bold">998 +</h3>
              <p className="text-xs font-semibold">Linked Users</p>
            </div>
            <div><LinkedInIcon className="transition-all duration-300 w-10 h-10 text-white opacity-40 hover:opacity-100 hover:scale-125"/></div>
        </div>
        <div className="col-span-3 p-6 rounded-md bg-rose-500 flex justify-between items-center">
            <div className="text-white">
              <h3 className="text-lg font-bold">650 +</h3>
              <p className="text-xs font-semibold">Youtube Videos</p>
            </div>
            <div><YouTubeIcon className="transition-all duration-300 w-10 h-10 text-white opacity-40 hover:opacity-100 hover:scale-125"/></div>
        </div>
      </article>
      {/* 8 */}
      <article className="grid grid-cols-12 gap-x-6">
          <div className="col-span-4 bg-light rounded-md p-6 flex justify-between items-center">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm font-semibold">Impressions</p>
              <h3 className="text-lg font-bold">1,563</h3>
              <p className="text-xs text-gray-600">May 23 - June 01 (2018)</p>
            </div>
            <div className="w-11 h-11 flex justify-center items-center rounded-full bg-secondary-200"><VisibilityTwoToneIcon className="w-6 h-6 text-secondary-600"/></div>
          </div>
          <div className="col-span-4 bg-light rounded-md p-6 flex justify-between items-center">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm font-semibold">Goal</p>
              <h3 className="text-lg font-bold">30,564</h3>
              <p className="text-xs text-gray-600">May 28 - June 01 (2018)</p>
            </div>
            <div className="w-11 h-11 flex justify-center items-center rounded-full bg-success-200"><AdjustTwoToneIcon className="w-6 h-6 text-success-600"/></div>
          </div>
          <div className="col-span-4 bg-light rounded-md p-6 flex justify-between items-center">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm font-semibold">Impact</p>
              <h3 className="text-lg font-bold">42.6%</h3>
              <p className="text-xs text-gray-600">May 30 - June 01 (2018)</p>
            </div>
            <div className="w-11 h-11 flex justify-center items-center rounded-full bg-warning-200"><PanToolTwoToneIcon className="w-6 h-6 text-warning-600"/></div>
          </div>
      </article>
    </section>
  );
};

export default Statistics;