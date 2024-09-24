import logoImg from "../assets/book-square.png";
import TabsNavigate from "../components/TabsNavigate";
import questionIcon from "../assets/questionIcon.png";
function Sidebar() {
  return (
    <div className="p-8 w-[256px]">
      <div className="logo flex items-start gap-x-3">
        <div className="flex h-[40px] w-[40px] flex-shrink-0">
          <img src={logoImg} height={40} width={40} alt="logo" />
        </div>
        <span className="text-[32px] text-[#141522] font-semibold leading-12">
          Nuegas
        </span>
      </div>
      <TabsNavigate />

      <div className="helpService">
        <div className="w-[188px] bg-[#141522] relative">
          <div className="absolute -top-6 left-[33%]">
            <div
              className="w-[52px] h-[52px] border-4 bg-black border-white rounded-full flex justify-center items-center"
              style={{
                boxShadow:
                  "0 -6px 10px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(255, 255, 255, 0.8)",
              }}
            >
              <img
                src={questionIcon}
                alt="Question Icon"
                className="w-[20px] h-[20px] rounded-full"
              />
            </div>
          </div>
<div></div>
          <h1>Help Center</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
