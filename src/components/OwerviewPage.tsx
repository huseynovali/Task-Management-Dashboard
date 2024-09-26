function OwerviewPage() {
  return (
    <div className="p-8 md:p-5  ">
      <div className="menu_icon  md:hidden border border-[#F5F5F7] rounded-full w-[44px] h-[44px] flex items-center justify-center">
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
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 12H21"
            stroke="#8E92BC"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 17H21"
            stroke="#8E92BC"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="line md:hidden w-full h-0 border border-[#F5F5F7] absolute left-0 bottom-32"></div>

      <div className="pt-16 md:pt-0">
        <h1 className="text-[24px] font-semibold text-[#141522]">
          Hi, Skylar Dias
        </h1>
        <p className="text-[16px] font-medium text-[#54577A]">
          Let's finish your task today!
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default OwerviewPage;
