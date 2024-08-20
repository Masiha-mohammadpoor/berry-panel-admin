"use client"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PaymentIcon from "@mui/icons-material/Payment";
import OutboundIcon from "@mui/icons-material/Outbound";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { Button, IconButton } from "@mui/material";

const Dashboard = () => {

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
            <Button size="small" variant="text" className="capitalize shadow-none text-light">Month</Button>
            <Button size="small" variant="contained" className="capitalize bg-secondary-500 shadow-none hover:shadow-none hover:bg-secondary-600">Year</Button>
            </div>
          </div>
          <div className="flex gap-x-1 mt-3">
            <h1 className="text-light text-4xl font-semibold">$961</h1>
            <IconButton className="text-secondary-300 relative -top-1 rotate-180">
              <OutboundIcon />
            </IconButton>
          </div>
          <p className="text-secondary-200 font-semibold mt-4 mb-3">
            Total Order
          </p>
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
      <article></article>
    </section>
  );
};

export default Dashboard;
