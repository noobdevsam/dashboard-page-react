import React from "react";

const projects = [
  { name: "Nelsa Web Dev", manager: "Om Prakash", due: "May 25, 2023", status: "Completed", progress: "100%" },
  { name: "Datascale AI", manager: "Neilsen Mando", due: "Jun 20, 2023", status: "Delayed", progress: "38%" },
];

const ProjectTable = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow mb-5 overflow-x-auto">
      <h3 className="text-lg font-bold">Project Summary</h3>
      <table className="w-full mt-3">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Manager</th>
            <th className="p-2">Due Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Progress</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(({ name, manager, due, status, progress }) => (
            <tr key={name} className="border-b hover:bg-gray-100 transition duration-300">
              <td className="p-2">{name}</td>
              <td className="p-2">{manager}</td>
              <td className="p-2">{due}</td>
              <td className={`p-2 ${status === "Completed" ? "text-green-500" : "text-yellow-500"}`}>{status}</td>
              <td className="p-2">{progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;