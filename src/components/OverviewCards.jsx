import React from "react";

const data = [
  { label: "Total Revenue", value: "$53,00989" },
  { label: "Projects", value: "95 / 100" },
  { label: "Time Spent", value: "1022 / 1300 Hrs" },
  { label: "Resources", value: "101 / 120" },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
      {data.map(({ label, value }) => (
        <div
          key={label}
          className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <p className="text-gray-500">{label}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;