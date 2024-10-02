import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Account from "./Account";
import { useState } from "react";
import SidebarMobile from "../components/sidebar/SidebarMobile";

function MainLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex ">
      <Sidebar />
      <div className="bg-[#fafafa] relative w-full ">
        <div className="pt-8 px-8 lg:p-5 w-full  bg-white">
          <button
            onClick={() => setOpen(!open)}
            className="menu_icon  lg:hidden border border-[#F5F5F7] rounded-full w-[44px] h-[44px] flex items-center justify-center"
          >
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
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            className={`${
              open ? "w-[200px] opacity-100" : "w-0 opacity-0 "
            } h-screen  bg-white absolute inset-0 lg:hidden z-50 transition-all duration-300 ease-in-out`}
          >
            <SidebarMobile open={open} setOpen={setOpen} />
          </div>
        </div>
        <Account />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
