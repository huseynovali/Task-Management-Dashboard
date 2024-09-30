import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "S", tasks: 1 },
  { day: "M", tasks: 2 },
  { day: "T", tasks: 1.5 },
  { day: "W", tasks: 2.5 },
  { day: "T", tasks: 2 },
  { day: "F", tasks: 1.8 },
  { day: "S", tasks: 2.2 },
];

import { TooltipProps } from "recharts";

const CustomTooltip = ({ active, payload }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#2D2D2D",
          color: "#FFF",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        <p>{`${payload[0].value} Task`}</p>
      </div>
    );
  }

  return null;
};

const TaskLineChart = () => {
  return (
    <ResponsiveContainer
      height={130}
      className={"bg-white rounded-lg p-3"}
    >
      <LineChart data={data}>
        {" "}
        <CartesianGrid strokeDasharray="0" horizontal={false} vertical={true} />
        <XAxis dataKey="day" />
        <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="tasks"
          stroke="#141522"
          strokeWidth={3}
          dot={{ stroke: "#546FFF", strokeWidth: 3, r: 5, fill: "#fff" }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TaskLineChart;
