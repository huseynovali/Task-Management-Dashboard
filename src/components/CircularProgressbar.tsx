import React from "react";

const CircularProgressBar = ({ percentage }) => {
  const radius = 40;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      style={{ transform: "rotate(0deg)" }} // Daireyi yukarıdan başlaması için döndürme
    >
      <circle
        stroke="#1A1E38"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#546FFF"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{
          transition: "stroke-dashoffset 0.35s",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize="18px"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
