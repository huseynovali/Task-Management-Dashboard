import constants from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function MonthMentorSlide() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      slidesPerView={2}
      className="mySwiper w-full h-full relative "
    >
      {constants.monthlyMentors.map((employee, index) => (
        <SwiperSlide key={index}>
          <div className="p-5  w-full flex items-end bg-white rounded-[10px] mx-5">
            <div className="flex">
              <img
                src={employee.img}
                alt=""
                className="w-[48px] h-[48px] rounded-full"
              />
              <div className="mx-1">
                <h2 className="font-semibold text-[16px]">{employee.name}</h2>
                <p className="text-xs text-[#54577A]">{employee.position}</p>
              </div>
              <button className="text-[#546FFF]">+ Follow</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MonthMentorSlide;
