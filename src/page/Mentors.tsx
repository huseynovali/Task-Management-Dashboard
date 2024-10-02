import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import constants from "../constants/constants";
import EmployeeCard from "../components/EmployeeCard";

function Mentors() {
  return (
    <div className="pb-8">
      <div className="p-8 bg-white">
        <h1 className="font-semibold text-[24px]">Explore Mentors</h1>

        <div className="pt-10 flex items-center justify-between">
          <div className="border border-[#F5F5F7] flex items-center rounded-[10px] pr-3">
            <input
              type="text"
              className="border-none outline-none pb-[14px] pt-[7px] px-[28px] w-full rounded-[10px] placeholder:text-xs placeholder:text-[#54577A] placeholder:leading-tight"
              placeholder="Search Mentors"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58332 17.5001C13.9556 17.5001 17.5 13.9557 17.5 9.58341C17.5 5.21116 13.9556 1.66675 9.58332 1.66675C5.21107 1.66675 1.66666 5.21116 1.66666 9.58341C1.66666 13.9557 5.21107 17.5001 9.58332 17.5001Z"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3333 18.3334L16.6667 16.6667"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="gap-x-3 hidden md:flex">
            <div className="flex items-center border rounded-[10px] px-7 py-[14px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z"
                  stroke="#8E92BC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z"
                  stroke="#8E92BC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z"
                  stroke="#8E92BC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-semibold ml-2">Category</span>
            </div>
            <div className="flex items-center border rounded-[10px] px-7 py-[14px]">
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 12H18"
                  stroke="#8E92BC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 17H14"
                  stroke="#8E92BC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="ml-2 text-xs font-semibold ">
                Sort By : Popular
              </span>
            </div>
          </div>

          <div className=" md:hidden flex items-center border rounded-[10px] px-7 py-[14px] ml-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.5H16"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6.5H2"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 17.5H18"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 17.5H2"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative px-8">
        <div className="flex justify-between items-center  absolute">
          <h2 className="text-2xl font-semibold  text-[#141522]">
            Recent Mentors
          </h2>
        </div>
        <div className="flex h-[200px] !overflow-hidden items-end relative mt-10 ">
          <div className=" max-[360px]:w-[290px] max-[395px]:w-[310px] w-[340px] md:w-[700px] lg:w-[1180px] h-full ">
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
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper w-full h-full relative "
            >
              {constants.monthlyMentors.map((employee, index) => (
                <SwiperSlide key={index}>
                  <EmployeeCard employee={employee} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="p-8  mt-8">
        <h2 className="font-semibold text-[24px]">Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {constants.mentors.map((mentor, index) => (
            <EmployeeCard key={index} employee={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
