import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-red-100">
          <Sidebar />
        </div>
        <div className="grid-cols-10">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
