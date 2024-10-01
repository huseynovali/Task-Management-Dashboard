import TaskEmp from "./TaskEmp";

interface TaskCardProps {
  data: {
    img: string;
    name: string;
    team: string;
    progress: number;
    date: string;
    taskEmployes: {
      img: string;
      name: string;
      position: string;
    }[];
  };
}

function TaskCard({ data }: Readonly<TaskCardProps>) {
  return (
    <div>
      <div className="my-5">
        <img src={data.img} alt="" className="w-full" />
      </div>
      <div>
        <h2>{data.name}</h2>
        <p className=" text-xs text-[#54577A]">{data.team}</p>
      </div>
      <div className="my-5">
        <div className="flex justify-between items-center">
          <h2>Progress</h2>
          <p className=" text-[16px] text-[#546FFF]">{data.progress}%</p>
        </div>

        <div className="progress-bar h-2 w-full bg-[#BAC8FF] mt-3 rounded-md relative">
          <div
            style={{ width: `${data.progress}%` }}
            className={`progress absolute  bg-[#546FFF] inset-0 rounded-md`}
          >
            <div className="dote w-4 h-4 border-2 border-white rounded-full absolute right-0 -top-1 bg-[#546FFF]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.2498 10.0005C19.2498 15.1095 15.1088 19.2505 9.9998 19.2505C4.8908 19.2505 0.749802 15.1095 0.749802 10.0005C0.749802 4.89149 4.8908 0.750488 9.9998 0.750488C15.1088 0.750488 19.2498 4.89149 19.2498 10.0005Z"
              stroke="#54577A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.4314 12.9429L9.6614 10.6939V5.84686"
              stroke="#54577A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-[16px] text-[#141522] ml-2">{data.date}</div>
        </div>
        <TaskEmp employees={data.taskEmployes} />
      </div>
    </div>
  );
}

export default TaskCard;
