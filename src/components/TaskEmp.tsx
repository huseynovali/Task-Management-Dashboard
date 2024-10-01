
interface Employee {
  img: string;
  name: string;
  position: string;
}


function TaskEmp({ employees }: Readonly<{ employees: Employee[] }>) {
  return (
    <div className="flex">
      {employees.map((emp, index) => (
        <div className="relative group" key={index}>
          <img
            src={emp.img}
            alt=""
            className="w-[24px] h-[24px] rounded-full relative hover:z-10 hover:scale-110 transition-all"
            style={{ left: `${index * -5}px` }}
          />

          <div className="hover-box w-[150px] -left-[150px] bg-white absolute hidden group-hover:block p-3 rounded-md shadow-lg border">
            <h1 className="text-sm">{emp.name}</h1>
            <p className="text-xs text-[#54577A]">{emp.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskEmp;
