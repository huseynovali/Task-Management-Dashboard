import { useEffect, useState } from "react";
import CircularProgressBar from "./CircularProgressbar";
import TaskLineChart from "./TaskLineChart";
import MonthMentorSlide from "./MonthMentorSlide";
import UpcomingTaskSlide from "./UpcomingTaskSlide";

function OwerviewPage() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(45);
  }, []);

  return (
    <div className="p-8 lg:p-5 w-full ">
      <div className="menu_icon  lg:hidden border border-[#F5F5F7] rounded-full w-[44px] h-[44px] flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7H21"
            stroke="#8E92BC"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 12H21"
            stroke="#8E92BC"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 17H21"
            stroke="#8E92BC"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="line md:hidden w-full h-0 border border-[#F5F5F7] absolute left-0 bottom-32"></div>

      <div className="pt-16 lg:pt-0">
        <h1 className="text-[24px] font-semibold text-[#141522]">
          Hi, Skylar Dias
        </h1>
        <p className="text-[16px] font-medium text-[#54577A]">
          Let's finish your task today!
        </p>
      </div>
      <div className="pt-16 md:flex ">
        <div className="p-5 bg-[#141522] text-white rounded-[10px] lg:w-[200px] flex md:flex-col justify-between mb-3 lg:mb-0">
          <div>
            <h2>Running Task</h2>
            <p className="py-4 text-[32px]">65</p>
          </div>
          <div className="flex items-center">
            <CircularProgressBar percentage={percentage} />
            <div className="ml-3">
              <p className="text-[20px] font-semibold">100</p>
              <p className="text-[#8E92BC] text-sm font-medium">Task</p>
            </div>
          </div>
        </div>
        <div className="md:pl-10 w-full">
          <div className="bg-[#F5F5F7] p-5 rounded-[10px]">
            <div>
              <div className="flex justify-between items-center pb-5">
                <h2 className="text-[20px] font-semibold">Activity</h2>
                <select name="" id="" className="bg-transparent outline-none">
                  <option value="" className="text-xs">
                    This Week
                  </option>
                </select>
              </div>
            </div>
            <TaskLineChart />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-between items-center  absolute">
          <h2 className="text-2xl font-semibold  text-[#141522]">
            Monthly Mentors
          </h2>
        </div>
        <div className="flex h-[200px] !overflow-hidden items-end relative mt-10 ">
          <MonthMentorSlide />
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-between items-center  absolute">
          <h2 className="text-2xl font-semibold  text-[#141522]">
            Upcoming Task
          </h2>
        </div>
        <div className="flex h-[350px] !overflow-hidden items-end relative mt-10 ">
          <UpcomingTaskSlide />
        </div>
      </div>
    </div>
  );
}

export default OwerviewPage;
