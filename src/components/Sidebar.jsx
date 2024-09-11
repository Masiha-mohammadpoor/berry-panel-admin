"use client";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedIcon from "@mui/icons-material/Speed";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useMenu from "@/hooks/useMenu";
import useMenuMobile from "@/hooks/useMenuMobile";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const { openMenu, setOpenMenu } = useMenu();
  const [menu, setMenu] = useState(true);
  const { setOpenMenuMobile } = useMenuMobile();

  useEffect(() => {
    setMenu(openMenu);
  }, [openMenu]);

  return (
    <section className="pl-5 pt-3 pr-2">
      <article
        className={`overflow-hidden flex ${
          menu ? "justify-between" : "justify-center"
        } items-center`}
      >
        <div className={`flex items-center gap-x-1 ${!menu && "hidden"}`}>
          <Image src="/images/logo.png" alt="LOGO" width={40} height={40} />
          <h3 className="font-bold text-2xl">BERRY</h3>
        </div>
        <div>
          <IconButton
            onClick={() => setOpenMenu(!menu)}
            className="rounded-md hidden lg:flex transition dark:text-primary-100 dark:bg-primary-800 bg-primary-100 text-primary-800 p-2 hover:bg-primary-800 hover:text-primary-100"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            onClick={() => setOpenMenuMobile(false)}
            className="rounded-md lg:hidden transition bg-error-100 text-error-800 dark:bg-error-800 dark:text-error-100 p-1.5 hover:bg-error-800 hover:text-error-100"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </article>
      <article className="mt-10">
        {/* 1 */}
        <div className="w-full">
          <h2 className={`mb-4 text-sm font-bold ${!menu && "hidden"}`}>
            Dashboard
          </h2>
          <div>
            <Link
              onClick={() => setOpenMenuMobile(false)}
              href="/dashboard/default"
            >
              <IconButton
                variant="contained"
                className={`mx-auto transition w-full mb-1 flex ${
                  menu ? "pl-5 py-3 gap-x-4 justify-start" : "p-3"
                } ${
                  pathname === "/dashboard/default"
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100"
                    : "bg-transparent"
                } hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-800 dark:hover:text-primary-100 hover:shadow-none rounded-lg shadow-none text-black dark:text-white capitalize`}
              >
                <SpeedIcon />
                <span className={`${!menu && "hidden"} text-sm`}>Default</span>
              </IconButton>
            </Link>
            <Link
              onClick={() => setOpenMenuMobile(false)}
              href="/dashboard/analytics"
            >
              <IconButton
                variant="contained"
                className={`mx-auto transition w-full mb-1 flex ${
                  menu ? "pl-5 py-3 gap-x-4 justify-start" : "p-3"
                } ${
                  pathname === "/dashboard/analytics"
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100"
                    : "bg-transparent"
                } hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-800 dark:hover:text-primary-100 hover:shadow-none rounded-lg shadow-none text-black dark:text-white capitalize`}
              >
                <QueryStatsOutlinedIcon />
                <span className={`${!menu && "hidden"} text-sm`}>
                  Analytics
                </span>
              </IconButton>
            </Link>
          </div>
          <div
            className={`w-full border-[0.2px] dark:border-gray-400 mt-6 ${
              !menu && "hidden"
            }`}
          ></div>
        </div>
        {/* 2 */}
        <div className={`w-full ${menu && "mt-5"}`}>
          <h2 className={`mb-4 text-sm font-bold ${!menu && "hidden"}`}>
            Widget
          </h2>
          <div>
            <Link
              onClick={() => setOpenMenuMobile(false)}
              href="/dashboard/statistics"
            >
              <IconButton
                variant="contained"
                className={`mx-auto transition w-full mb-1 flex ${
                  menu ? "pl-5 py-3 gap-x-4 justify-start" : "p-3"
                } ${
                  pathname === "/dashboard/statistics"
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100"
                    : "bg-transparent"
                } hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-800 dark:hover:text-primary-100 hover:shadow-none rounded-lg shadow-none text-black dark:text-white capitalize`}
              >
                <DataSaverOffOutlinedIcon />
                <span className={`${!menu && "hidden"} text-sm`}>
                  Statistics
                </span>
              </IconButton>
            </Link>
            <Link
              onClick={() => setOpenMenuMobile(false)}
              href="/dashboard/data"
            >
              <IconButton
                variant="contained"
                className={`mx-auto transition w-full mb-1 flex ${
                  menu ? "pl-5 py-3 gap-x-4 justify-start" : "p-3"
                } ${
                  pathname === "/dashboard/data"
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100"
                    : "bg-transparent"
                } hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-800 dark:hover:text-primary-100 hover:shadow-none rounded-lg shadow-none text-black dark:text-white capitalize`}
              >
                <EditNoteOutlinedIcon />
                <span className={`${!menu && "hidden"} text-sm`}>Data</span>
              </IconButton>
            </Link>
            <Link
              onClick={() => setOpenMenuMobile(false)}
              href="/dashboard/chart"
            >
              <IconButton
                variant="contained"
                className={`mx-auto transition w-full mb-1 flex ${
                  menu ? "pl-5 py-3 gap-x-4 justify-start" : "p-3"
                } ${
                  pathname === "/dashboard/chart"
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100"
                    : "bg-transparent"
                } hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-800 dark:hover:text-primary-100 hover:shadow-none rounded-lg shadow-none text-black dark:text-white capitalize`}
              >
                <BarChartOutlinedIcon />
                <span className={`${!menu && "hidden"} text-sm`}>Chart</span>
              </IconButton>
            </Link>
          </div>
          <div
            className={`w-full border-[0.2px] dark:border-gray-400 mt-6 ${
              !menu && "hidden"
            }`}
          ></div>
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
