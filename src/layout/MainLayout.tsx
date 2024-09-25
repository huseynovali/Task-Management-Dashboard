import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Account from "./Account";


function MainLayout() {
  return (
    <div>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="bg-[#fafafa] relative w-full py-8">
          <Account/>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
