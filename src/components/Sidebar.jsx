"use client";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedIcon from "@mui/icons-material/Speed";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {

  const pathname = usePathname();

  return (
    <section className="pl-5 pt-3 pr-2">
      <article className="flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <Image src="/images/logo.png" alt="LOGO" width={40} height={40} />
          <h3 className="font-bold text-2xl">BERRY</h3>
        </div>
        <div>
          <IconButton
            aria-label="delete"
            className="rounded-md transition bg-primary-100 text-primary-800 p-2 hover:bg-primary-800 hover:text-primary-100"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </article>
      <article className="mt-10">
        {/* 1 */}
        <div className="w-full">
          <h2 className="mb-4 text-sm font-bold">Dashboard</h2>
          <div>
            <Link href="/dashboard/default">
            <Button
              variant="contained"
              className={`transition mb-1 w-full flex justify-start gap-x-4 pl-5 ${pathname ==="/dashboard/default" ?"bg-primary-100 text-primary-800": "bg-light"} hover:bg-primary-100 hover:text-primary-800 hover:shadow-none py-3 rounded-lg shadow-none text-black capitalize`}
            >
              <SpeedIcon />
              <span>Default</span>
            </Button>
            </Link>
            <Link href="/dashboard/analytics">
            <Button
              variant="contained"
              className={`transition mb-1 w-full flex justify-start gap-x-4 pl-5 ${pathname ==="/dashboard/analytics" ?"bg-primary-100 text-primary-800": "bg-light"} hover:bg-primary-100 hover:text-primary-800 hover:shadow-none py-3 rounded-lg shadow-none text-black capitalize`}
            >
              <QueryStatsOutlinedIcon />
              <span>Analytics</span>
            </Button>
            </Link>
          </div>
          <div className="w-full border-[0.2px] mt-6"></div>
        </div>
        {/* 2 */}
        <div className="w-full mt-5">
          <h2 className="mb-4 text-sm font-bold">Widget</h2>
          <div>
            <Button
              variant="contained"
              className="transition mb-1 w-full flex justify-start gap-x-4 pl-5 bg-light hover:bg-primary-100 hover:text-primary-800 hover:shadow-none py-3 rounded-lg shadow-none text-black capitalize"
            >
              <DataSaverOffOutlinedIcon />
              <span>Statistics</span>
            </Button>
            <Button
              variant="contained"
              className="transition mb-1 w-full flex justify-start gap-x-4 pl-5 bg-light hover:bg-primary-100 hover:text-primary-800 hover:shadow-none py-3 rounded-lg shadow-none text-black capitalize"
            >
              <EditNoteOutlinedIcon />
              <span>Data</span>
            </Button>
            <Button
              variant="contained"
              className="transition mb-1 w-full flex justify-start gap-x-4 pl-5 bg-light hover:bg-primary-100 hover:text-primary-800 hover:shadow-none py-3 rounded-lg shadow-none text-black capitalize"
            >
              <BarChartOutlinedIcon />
              <span>Chart</span>
            </Button>
          </div>
          <div className="w-full border-[0.2px] mt-6"></div>
        </div>

      </article>
    </section>
  );
};

export default Sidebar;
