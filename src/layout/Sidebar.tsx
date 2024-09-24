import logoImg from "../assets/book-square.png";
import TabsNavigate from "../components/TabsNavigate";

function Sidebar() {
  return (
    <div className="p-8 min-w-[256px]">
      <div className="logo flex items-start gap-x-3">
        <div className="flex h-[40px] w-[40px] flex-shrink-0">
          <img src={logoImg} height={40} width={40} alt="logo" />
        </div>
        <span className="text-[32px] text-[#141522] font-semibold leading-12">
          Nuegas
        </span>
      </div>
      <TabsNavigate/>
    </div>
  );
}

export default Sidebar;
