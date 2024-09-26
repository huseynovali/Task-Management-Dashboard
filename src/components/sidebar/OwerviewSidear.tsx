import WeeklyCalendar from "../WeeklyCalendar";
import TodayTask from "../TodayTask";

function OwerviewSidear() {
  return (
    <div className="p-5 bg-[#F5F5F7] w-full">
      <WeeklyCalendar />
      <TodayTask />
    </div>
  );
}

export default OwerviewSidear;
