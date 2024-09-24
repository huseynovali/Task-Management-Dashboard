import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
