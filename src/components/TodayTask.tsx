function TodayTask() {
  return (
    <div className="p-5 bg-white mt-5 rounded-md">
      <div className="header flex justify-between">
        <h1 className="text-sm font-semibold">Task Today</h1>
        <div className="text-sm text-[#A3A3A3]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16667 8.33334C3.25 8.33334 2.5 9.08334 2.5 10C2.5 10.9167 3.25 11.6667 4.16667 11.6667C5.08333 11.6667 5.83333 10.9167 5.83333 10C5.83333 9.08334 5.08333 8.33334 4.16667 8.33334Z"
              fill="#141522"
              stroke="#141522"
            />
            <path
              d="M15.8333 8.33334C14.9167 8.33334 14.1667 9.08334 14.1667 10C14.1667 10.9167 14.9167 11.6667 15.8333 11.6667C16.75 11.6667 17.5 10.9167 17.5 10C17.5 9.08334 16.75 8.33334 15.8333 8.33334Z"
              fill="#141522"
              stroke="#141522"
            />
            <path
              d="M9.99999 8.33334C9.08333 8.33334 8.33333 9.08334 8.33333 10C8.33333 10.9167 9.08333 11.6667 9.99999 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10C11.6667 9.08334 10.9167 8.33334 9.99999 8.33334Z"
              fill="#141522"
              stroke="#141522"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TodayTask;
