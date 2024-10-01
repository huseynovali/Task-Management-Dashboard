import constants from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import TaskCard from "./TaskCart";

function UpcomingTaskSlide() {
  return (
    <div className=" max-[360px]:w-[290px] max-[395px]:w-[310px] w-[340px] md:w-[700px] lg:w-[790px] h-full ">
      <Swiper
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="mySwiper w-full h-full relative "
      >
        {constants.upcomingTasks.map((upcomingTask, index) => (
          <SwiperSlide key={index}>
            <TaskCard data={upcomingTask} /> {/* Correctly pass data */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UpcomingTaskSlide;
