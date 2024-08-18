import { Search } from "@mui/icons-material";
import {
  Button,
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
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-3">
      <div className="w-1/2 pr-16">
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
      <div className="w-1/3 flex justify-between items-center">
        <IconButton
          aria-label="delete"
          className="rounded-md transition bg-primary-100 text-primary-800 p-2 hover:bg-primary-800 hover:text-primary-100"
        >
          <GraphicEqOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          className="rounded-md transition bg-secondary-100 text-secondary-500 p-2 hover:bg-secondary-500 hover:text-white"
        >
          <TranslateOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          className="rounded-md transition bg-primary-100 text-primary-800 p-2 hover:bg-primary-800 hover:text-primary-100"
        >
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          className="rounded-md transition bg-secondary-500 text-secondary-100 p-2 hover:bg-secondary-500"
        >
          <ZoomInMapOutlinedIcon />
        </IconButton>
        <Button
          variant="contained"
          className="px-2 py-2 shadow-none bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-white w-24 flex justify-between items-center rounded-full"
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
    </nav>
  );
};

export default Navigation;
