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
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SensorsIcon from "@mui/icons-material/Sensors";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <nav className="flex justify-between items-center lg:px-3 px-1 lg:pr-4">
      <div className="w-96 flex gap-x-3">
        <IconButton className="rounded-md lg:hidden transition bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100">
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={() => setOpenSearch(true)}
          className="rounded-md lg:hidden transition bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100"
        >
          <SearchIcon />
        </IconButton>
        <FormControl variant="outlined" className="w-full hidden lg:block">
          <OutlinedInput
            placeholder="search"
            className="pl-3 pr-2 rounded-lg flex justify-between items-center h-12"
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
                  className="rounded-md bg-primary-100 text-primary-800 p-1 hover:bg-primary-800 hover:text-primary-100"
                >
                  <TuneOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="lg:w-1/3 flex justify-between items-center gap-x-3">
        <IconButton className="rounded-md hidden lg:flex transition bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100">
          <SensorsIcon />
        </IconButton>
        <IconButton className="rounded-md hidden lg:flex transition bg-secondary-100 text-secondary-500 p-1.5 hover:bg-secondary-500 hover:text-white">
          <TranslateOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={() => setOpen(true)}
          className="rounded-md lg:hidden transition bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100"
        >
          <MoreVertIcon />
        </IconButton>
        <IconButton className="rounded-md transition bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton className="rounded-md lg:flex hidden transition bg-secondary-100 text-secondary-500 p-1.5 hover:bg-secondary-500 hover:text-white">
          <ZoomOutMapIcon />
        </IconButton>
        <Button
          variant="contained"
          className="p-2 shadow-none bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-white hover:shadow-none w-20 lg:w-24 flex justify-between items-center rounded-full"
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
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <div className=" flex justify-between items-center p-6">
          <div className="flex gap-x-3">
            <IconButton className="rounded-md transition bg-primary-100 text-primary-800 p-1.5 hover:bg-primary-800 hover:text-primary-100">
              <SensorsIcon />
            </IconButton>
            <IconButton className="rounded-md transition bg-secondary-100 text-secondary-500 p-1.5 hover:bg-secondary-500 hover:text-white">
              <TranslateOutlinedIcon />
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => setOpen(false)}
              className="rounded-md transition bg-error-100 text-error-800 p-1.5 hover:bg-error-800 hover:text-error-100"
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
        <div className="p-6">
          <FormControl variant="outlined" className="w-full">
            <OutlinedInput
              placeholder="search"
              className="pl-3 pr-2 rounded-lg flex justify-between items-center h-12"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="start">
                  <div className="flex gap-x-3">
                  <IconButton className="rounded-md bg-primary-100 text-primary-800 p-1 hover:bg-primary-800 hover:text-primary-100">
                    <TuneOutlinedIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => setOpenSearch(false)}
                    className="rounded-md transition bg-error-100 text-error-800 p-1 hover:bg-error-800 hover:text-error-100"
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
