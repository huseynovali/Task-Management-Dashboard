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

      <div className="helpService mt-2">
        <div className="w-[188px] bg-[#141522] relative rounded-[10px] pb-3">
          <div className="absolute -top-6 left-[35%]">
            <div
              className="w-[52px] h-[52px] border-4 bg-black border-white rounded-full flex justify-center items-center"
              style={{
                boxShadow:
                  "0 -6px 10px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(255, 255, 255, 0.3)",
              }}
            >
              <img
                src={questionIcon}
                alt="Question Icon"
                className="w-[18px] h-[18px] rounded-full"
              />
            </div>
          </div>
          <div className="pt-16 flex flex-col items-center text-center">
            <h1 className="text-white font-semibold">Help Center</h1>
            <p className="text-white text-xs mt-3 px-3">
              Having Trouble in Learning. Please contact us for more questions.
            </p>
            <button className="text-xs mt-5 bg-white text-black px-5 py-2 rounded-md">
              Go To Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
