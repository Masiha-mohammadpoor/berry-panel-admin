import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { FormLabel } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import { FiPlus } from "react-icons/fi";

const Data = () => {
  return (
    <section className="flex flex-col gap-y-6">
      {/* 1 */}
      <article className="bg-light rounded-md flex justify-between p-4">
        <h2 className="text-lg font-semibold">Data</h2>
        <div className="flex items-center gap-x-4">
          <div>
            <IoHome className="text-primary-600" />
          </div>
          <div>
            <IoIosArrowForward className="text-gray-500" />
          </div>
          <p className="font-semibold text-sm text-gray-500">Data</p>
        </div>
      </article>
      {/* 2 */}
      <article className="grid grid-cols-6 gap-x-6">
        {/* 1 */}
        <div className="rounded-md bg-light col-span-2">
          <h2 className="text-lg font-semibold p-5 border-b border-b-gray-200">
            To Do List
          </h2>
          <div className="px-6 py-6">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={<FormLabel>Check your Email</FormLabel>}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={<FormLabel>Make YouTube Video</FormLabel>}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={<FormLabel>Create Banner</FormLabel>}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={<FormLabel>Upload Project</FormLabel>}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={<FormLabel>Update Task</FormLabel>}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={<FormLabel>Task Issue</FormLabel>}
              />
            </FormGroup>
          </div>
          <div className="text-lg font-semibold p-5 border-t border-t-gray-200 w-full flex justify-end items-center">
            <IconButton aria-label="fingerprint" className="bg-secondary-600 p-3 text-white hover:bg-secondary-700">
              <FiPlus />
            </IconButton>
          </div>
        </div>
        {/* 2 */}
        <div className="rounded-md bg-light col-span-2">
          <h2 className="text-lg font-semibold p-5 border-b border-b-gray-200">
            Traffic Sources
          </h2>
          <div className="px-6 py-6 flex flex-col justify-between items-center gap-y-3">
          <div className="mb-4 w-full">
              <div className="w-full flex justify-between items-center mb-2">
                <p className="text-sm">Direct</p>
                <p className="text-sm">80%</p>
              </div>
              <LinearProgress variant="determinate" value={80}/>
            </div>
            <div className="mb-4 w-full">
              <div className="w-full flex justify-between items-center mb-2">
                <p className="text-sm">Social</p>
                <p className="text-sm">50%</p>
              </div>
              <LinearProgress variant="determinate" value={50} color="inherit" className="bg-primary-200 text-primary-500"/>
            </div>
            <div className="mb-4 w-full">
              <div className="w-full flex justify-between items-center mb-2">
                <p className="text-sm">Referral</p>
                <p className="text-sm">20%</p>
              </div>
              <LinearProgress variant="determinate" value={20}/>
            </div>
            <div className="mb-4 w-full">
              <div className="w-full flex justify-between items-center mb-2">
                <p className="text-sm">Bounce</p>
                <p className="text-sm">60%</p>
              </div>
              <LinearProgress variant="determinate" value={60} color="inherit" className="bg-primary-200 text-primary-500"/>
            </div>
            <div className="mb-4 w-full">
              <div className="w-full flex justify-between items-center mb-2">
                <p className="text-sm">Internet</p>
                <p className="text-sm">40%</p>
              </div>
              <LinearProgress variant="determinate" value={40}/>
            </div>
            <div className="mb-4 w-full">
              <div className="w-full flex justify-between items-center mb-2">
                <p className="text-sm">Social</p>
                <p className="text-sm">90%</p>
              </div>
              <LinearProgress variant="determinate" value={90} color="inherit" className="bg-primary-200 text-primary-500"/>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="rounded-md bg-light col-span-2">
          <h2 className="text-lg font-semibold p-5 border-b border-b-gray-200">
            Team Members
          </h2>
        </div>
      </article>
    </section>
  );
};

export default Data;
