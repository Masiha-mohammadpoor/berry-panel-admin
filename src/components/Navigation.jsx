"use state";
import { Search } from "@mui/icons-material";
import {
  Button,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Image from "next/image";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SensorsIcon from "@mui/icons-material/Sensors";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import useMenuMobile from "@/hooks/useMenuMobile";
import DarkmodeToggle from "./DarkmodeToggle";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme: darkmode } = useTheme();
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const { setOpenMenuMobile } = useMenuMobile();

  useEffect(() => {
    setTheme(darkmode);
  }, [darkmode]);

  return (
    <nav className="flex justify-between items-center lg:px-3 px-0 lg:pr-4">
      <div className="w-96 flex gap-x-3">
        <IconButton
          onClick={() => setOpenMenuMobile(true)}
          className="rounded-md lg:hidden transition bg-primary-100 dark:bg-primary-800 dark:text-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100"
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={() => setOpenSearch(true)}
          className="rounded-md lg:hidden transition bg-primary-100 dark:bg-primary-800 dark:text-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100"
        >
          <SearchIcon />
        </IconButton>
        <FormControl
          labelStyle={theme == "dark" && { color: "#ff0000" }}
          sx={
            theme == "dark" && {
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }
          }
          variant="outlined"
          className="w-full hidden lg:block "
        >
          <OutlinedInput
            placeholder="search"
            className="pl-3 pr-2 rounded-lg flex justify-between items-center h-12 dark:text-white"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Search fontSize="small" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="delete"
                  className="rounded-md dark:bg-primary-800 dark:text-primary-100 bg-primary-100 text-primary-800 p-1 hover:bg-primary-800 hover:text-primary-100"
                >
                  <TuneOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="lg:w-2/5 flex justify-between items-center gap-x-1 sm:gap-x-3">
        <DarkmodeToggle />
        <IconButton className="rounded-md hidden lg:flex transition dark:bg-primary-800 dark:text-primary-100 bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100">
          <SensorsIcon />
        </IconButton>
        <IconButton className="rounded-md hidden lg:flex transition dark:text-secondary-100 dark:bg-secondary-500 bg-secondary-100 text-secondary-500 p-1.5 hover:bg-secondary-500 hover:text-white">
          <TranslateOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={() => setOpen(true)}
          className="rounded-md lg:hidden transition dark:bg-primary-800 dark:text-primary-100 bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100"
        >
          <MoreVertIcon />
        </IconButton>
        <IconButton className="rounded-md hidden lg:flex transition dark:bg-primary-800 dark:text-primary-100 bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton className="rounded-md lg:flex hidden transition dark:text-secondary-100 dark:bg-secondary-500 bg-secondary-100 text-secondary-500 p-1.5 hover:bg-secondary-500 hover:text-white">
          <ZoomOutMapIcon />
        </IconButton>
        <Button
          variant="contained"
          className="ml-1 sm:ml-0 p-2 shadow-none dark:text-secondary-200 dark:bg-secondary-500 bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-white hover:shadow-none w-20 lg:w-24 flex justify-between items-center rounded-full"
        >
          <Image
            src="/images/user.svg"
            alt="user"
            width={35}
            height={35}
            className="rounded-full"
          />
          <SettingsOutlinedIcon />
        </Button>
      </div>
      <Drawer
        className="dark:bg-dark-900"
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className=" flex justify-between items-center p-6 dark:bg-dark-800">
          <div className="flex gap-x-3">
            <IconButton className="rounded-md transition dark:bg-primary-800 dark:text-primary-100 bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100">
              <SensorsIcon />
            </IconButton>
            <IconButton className="rounded-md transition dark:text-secondary-100 dark:bg-secondary-500 bg-secondary-100 text-secondary-500 p-1.5 hover:bg-secondary-500 hover:text-white">
              <TranslateOutlinedIcon />
            </IconButton>
            <IconButton className="rounded-md transition dark:bg-primary-800 dark:text-primary-100 bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100">
              <NotificationsOutlinedIcon />
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => setOpen(false)}
              className="rounded-md transition dark:text-error-100 dark:bg-error-800 bg-error-100 text-error-800 p-1.5 hover:bg-error-800 hover:text-error-100"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </Drawer>
      <Drawer
        anchor="top"
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      >
        <div className="p-6 dark:bg-dark-800">
          <FormControl
            labelStyle={theme == "dark" && { color: "#ff0000" }}
            sx={
              theme == "dark" && {
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(228, 219, 233, 0.25)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(228, 219, 233, 0.25)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(228, 219, 233, 0.25)",
                },
                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }
            }
            variant="outlined"
            className="w-full"
          >
            <OutlinedInput
              placeholder="search"
              className="pl-3 pr-2 rounded-lg flex justify-between items-center h-12 dark:text-white"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="start">
                  <div className="flex gap-x-3">
                    <IconButton className="rounded-md dark:bg-primary-800 dark:text-primary-100 bg-primary-100 text-primary-800 p-1 hover:bg-primary-800 hover:text-primary-100">
                      <TuneOutlinedIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => setOpenSearch(false)}
                      className="rounded-md transition dark:text-error-100 dark:bg-error-800 bg-error-100 text-error-800 p-1 hover:bg-error-800 hover:text-error-100"
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navigation;
