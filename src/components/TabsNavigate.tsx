import constants from "../constants/constants";
import { useLocation } from "react-router";

function TabsNavigate() {
  const params = useLocation();
  const activeTab = params.pathname.split("/")[1];

  return (
    <div className="py-8">
      {constants.sidebarLinks.map((link) => (
        <div
          className={
            "flex items-center px-[20px] py-[10px] gap-x-2 active:bg-[#F5F5F7] rounded-[10px] my-[16px]"
          }
        >
          <div className=" h-[24px] w-[24px] text-yellow-900">
            <img src={link.icon} alt="" />
          </div>
          <span
            className={`"text-[12px] font-semibold leading-12"   ${
              activeTab == link.title ? "text-[#141522]" : "text-[#8E92BC]"
            }`}
          >
            {link.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TabsNavigate;
