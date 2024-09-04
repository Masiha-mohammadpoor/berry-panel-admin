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
import useMenu from "@/hooks/useMenu";
import useMenuMobile from "@/hooks/useMenuMobile";
import CloseIcon from "@mui/icons-material/Close";


const Sidebar = () => {

  const pathname = usePathname();
  const {openMenu , setOpenMenu} = useMenu();
  const {setOpenMenuMobile } = useMenuMobile();


  return (
    <section className="pl-5 pt-3 pr-2">
      <article className={`overflow-hidden flex ${openMenu ? "justify-between" : "justify-center"} items-center`}>
        <div className={`flex items-center gap-x-1 ${!openMenu && "hidden"}`}>
          <Image src="/images/logo.png" alt="LOGO" width={40} height={40} />
          <h3 className="font-bold text-2xl">BERRY</h3>
        </div>
        <div>
        <IconButton
            onClick={() => setOpenMenu(!openMenu)}
            className="rounded-md hidden lg:flex transition bg-primary-100 text-primary-800 p-2 hover:bg-primary-800 hover:text-primary-100"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
              onClick={() => setOpenMenuMobile(false)}
              className="rounded-md lg:hidden transition bg-error-100 text-error-800 p-1.5 hover:bg-error-800 hover:text-error-100"
            >
              <CloseIcon />
            </IconButton>
        </div>
      </article>
      <article className="mt-10">
        {/* 1 */}
        <div className="w-full">
          <h2 className={`mb-4 text-sm font-bold ${!openMenu && "hidden"}`}>Dashboard</h2>
          <div>
            <Link onClick={() => setOpenMenuMobile(false)} href="/dashboard/default">
            <IconButton
              variant="contained"
              className={`mx-auto transition mb-1 flex ${openMenu ? "w-full pl-5 py-3 gap-x-4 justify-start" : "p-3"} ${pathname ==="/dashboard/default" ?"bg-primary-100 text-primary-800": "bg-light"} hover:bg-primary-100 hover:text-primary-800 hover:shadow-none rounded-lg shadow-none text-black capitalize`}
            >
              <SpeedIcon />
              <span className={`${!openMenu && "hidden"} text-sm`}>Default</span>
            </IconButton>
            </Link>
            <Link onClick={() => setOpenMenuMobile(false)} href="/dashboard/analytics">
            <IconButton
              variant="contained"
              className={`mx-auto transition mb-1 flex ${openMenu ? "w-full pl-5 py-3 gap-x-4 justify-start" : "p-3"} ${pathname ==="/dashboard/analytics" ?"bg-primary-100 text-primary-800": "bg-light"} hover:bg-primary-100 hover:text-primary-800 hover:shadow-none rounded-lg shadow-none text-black capitalize`}
            >
              <QueryStatsOutlinedIcon />
              <span className={`${!openMenu && "hidden"} text-sm`}>Analytics</span>
            </IconButton>
            </Link>
          </div>
          <div className={`w-full border-[0.2px] mt-6 ${!openMenu && "hidden"}`}></div>
        </div>
        {/* 2 */}
        <div className={`w-full ${openMenu && "mt-5"}`}>
          <h2 className={`mb-4 text-sm font-bold ${!openMenu && "hidden"}`}>Widget</h2>
          <div>
          <Link onClick={() => setOpenMenuMobile(false)} href="/dashboard/statistics">
            <IconButton
              variant="contained"
              className={`mx-auto transition mb-1 flex ${openMenu ? "w-full pl-5 py-3 gap-x-4 justify-start" : "p-3"} ${pathname ==="/dashboard/statistics" ?"bg-primary-100 text-primary-800": "bg-light"} hover:bg-primary-100 hover:text-primary-800 hover:shadow-none rounded-lg shadow-none text-black capitalize`}
            >
              <DataSaverOffOutlinedIcon />
              <span className={`${!openMenu && "hidden"} text-sm`}>Statistics</span>
            </IconButton>
            </Link>
            <Link onClick={() => setOpenMenuMobile(false)} href="/dashboard/data">
            <IconButton
              variant="contained"
              className={`mx-auto transition mb-1 flex ${openMenu ? "w-full pl-5 py-3 gap-x-4 justify-start" : "p-3"} ${pathname ==="/dashboard/data" ?"bg-primary-100 text-primary-800": "bg-light"} hover:bg-primary-100 hover:text-primary-800 hover:shadow-none rounded-lg shadow-none text-black capitalize`}
            >
              <EditNoteOutlinedIcon />
              <span className={`${!openMenu && "hidden"} text-sm`}>Data</span>
            </IconButton>
            </Link>
            <Link onClick={() => setOpenMenuMobile(false)} href="/dashboard/chart">
            <IconButton
              variant="contained"
              className={`mx-auto transition mb-1 flex ${openMenu ? "w-full pl-5 py-3 gap-x-4 justify-start" : "p-3"} ${pathname ==="/dashboard/chart" ?"bg-primary-100 text-primary-800": "bg-light"} hover:bg-primary-100 hover:text-primary-800 hover:shadow-none rounded-lg shadow-none text-black capitalize`}
            >
              <BarChartOutlinedIcon />
              <span className={`${!openMenu && "hidden"} text-sm`}>Chart</span>
            </IconButton>
            </Link>
          </div>
          <div className={`w-full border-[0.2px] mt-6 ${!openMenu && "hidden"}`}></div>
        </div>

      </article>
    </section>
  );
};

export default Sidebar;
