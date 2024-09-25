import { useState } from "react";
import taskImg1 from "../assets/task-image.png";
import TaskEmp from "./TaskEmp";
function TodayTask() {
  const [progress, setProgress] = useState(70);

  return (
    <div className="p-5 bg-white mt-5 rounded-md">
      <div className="header flex justify-between">
        <h1 className="text-sm font-semibold">Task Today</h1>
        <div className="text-sm text-[#A3A3A3]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16667 8.33334C3.25 8.33334 2.5 9.08334 2.5 10C2.5 10.9167 3.25 11.6667 4.16667 11.6667C5.08333 11.6667 5.83333 10.9167 5.83333 10C5.83333 9.08334 5.08333 8.33334 4.16667 8.33334Z"
              fill="#141522"
              stroke="#141522"
            />
            <path
              d="M15.8333 8.33334C14.9167 8.33334 14.1667 9.08334 14.1667 10C14.1667 10.9167 14.9167 11.6667 15.8333 11.6667C16.75 11.6667 17.5 10.9167 17.5 10C17.5 9.08334 16.75 8.33334 15.8333 8.33334Z"
              fill="#141522"
              stroke="#141522"
            />
            <path
              d="M9.99999 8.33334C9.08333 8.33334 8.33333 9.08334 8.33333 10C8.33333 10.9167 9.08333 11.6667 9.99999 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10C11.6667 9.08334 10.9167 8.33334 9.99999 8.33334Z"
              fill="#141522"
              stroke="#141522"
            />
          </svg>
        </div>
      </div>
      <div className="my-5">
        <img src={taskImg1} alt="" className="w-full" />
      </div>
      <div>
        <h2>Creating Awesome Mobile Apps</h2>
        <p className=" text-xs text-[#54577A]">UI /UX Designer</p>
      </div>
      <div className="my-5">
        <h2>Progress</h2>
        <div className="progress-bar h-2 w-full bg-[#BAC8FF] mt-3 rounded-md relative">
          <div
            style={{ width: `${progress}%` }}
            className={`progress absolute  bg-[#546FFF] inset-0 rounded-md`}
          >
            <div className="dote w-4 h-4 border-2 border-white rounded-full absolute right-0 -top-1 bg-[#546FFF]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.2498 10.0005C19.2498 15.1095 15.1088 19.2505 9.9998 19.2505C4.8908 19.2505 0.749802 15.1095 0.749802 10.0005C0.749802 4.89149 4.8908 0.750488 9.9998 0.750488C15.1088 0.750488 19.2498 4.89149 19.2498 10.0005Z"
              stroke="#54577A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4314 12.9429L9.6614 10.6939V5.84686"
              stroke="#54577A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="text-[16px] text-[#141522] ml-2">1 Hour</div>
        </div>
        <TaskEmp />
      </div>
    </div>
  );
}

export default TodayTask;
