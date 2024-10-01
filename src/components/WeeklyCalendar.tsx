import { useState } from "react";
import { addDays, startOfWeek } from "date-fns";

function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const start = startOfWeek(currentDate, { weekStartsOn: 0 });
  const daysOfWeek = Array.from({ length: 7 }).map((_, index) =>
    addDays(start, index)
  );

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);
  };

  return (
    <div className="p-5 bg-white rounded-md overflow-x-auto">
      <div className="w-full mb-5 flex justify-between items-center px-2">
        <button
          onClick={() => setCurrentDate(addDays(currentDate, -7))}
          className="text-xl"
        >
          {"<"}
        </button>
        <h2 className="text-sm font-semibold">
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
          }).format(currentDate)}
        </h2>
        <button
          onClick={() => setCurrentDate(addDays(currentDate, 7))}
          className="text-xl"
        >
          {">"}
        </button>
      </div>
      <div className="flex justify-between md-[]">
        {daysOfWeek.map((date) => (
          <button
            key={formatDate(date)}
            className="calendar-day cursor-pointer"
            onClick={() => setCurrentDate(date)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setCurrentDate(date);
              }
            }}
          >
            <div
              className={`flex flex-col items-center  rounded-3xl p-1 transition-all  ${
                date.getDate() === currentDate.getDate()
                  ? "bg-[#141522] text-white"
                  : ""
              }`}
            >
              <span className="text-xs font-medium mb-3">
                {
                  date
                    .toLocaleDateString("en-US", { weekday: "short" })
                    .split("")[0]
                }
              </span>
              <span
                className={` h-[32px] w-[32px] rounded-full text-xs font-medium flex justify-center items-center transition-all ${
                  date.getDate() === currentDate.getDate()
                    ? "bg-[#546FFF] text-white"
                    : "bg-[#F5F5F7]"
                }`}
              >
                {formatDate(date)}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default WeeklyCalendar;
