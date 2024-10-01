import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Account from "./Account";

function MainLayout() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="bg-[#fafafa] relative w-full ">
        <Account />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
