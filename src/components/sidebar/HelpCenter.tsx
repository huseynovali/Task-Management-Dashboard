import questionIcon from "../../assets/questionIcon.png";
function HelpCenter() {
  return (
    <div className="helpService mt-2 ">
      <div className="w-[188px] bg-[#141522] relative rounded-[10px] pb-3 ">
        <div className="h-full w-full overflow-hidden absolute">
          <div className="circle-1 absolute w-[160px] h-[160px] rounded-full bg-white opacity-20 -top-[50%] -left-[50%]"></div>
          <div className="circle-2 absolute w-[160px] h-[160px] rounded-full bg-white opacity-20 -bottom-[50%] -right-[50%]"></div>
        </div>

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
  );
}

export default HelpCenter;
