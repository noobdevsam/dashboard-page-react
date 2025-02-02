import React from "react";

const activities = [
  { time: "10:30 AM", user: "Alice", action: "Created a new task", project: "Nelsa Web Dev" },
  { time: "11:15 AM", user: "Bob", action: "Updated project status", project: "Datascale AI" },
  { time: "12:00 PM", user: "Charlie", action: "Commented on task", project: "Nelsa Web Dev" },
  { time: "1:45 PM", user: "David", action: "Assigned a new user", project: "Promage CRM" },
  { time: "3:10 PM", user: "Eve", action: "Completed a milestone", project: "Datascale AI" },
  { time: "4:25 PM", user: "Frank", action: "Reviewed a pull request", project: "Promage CRM" },
  { time: "5:30 PM", user: "Grace", action: "Deleted a task", project: "Nelsa Web Dev" },
];

const ProjectActivities = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow mb-5 overflow-hidden">
      <h3 className="text-lg font-bold mb-3">Recent Project Activities</h3>
      <div className="overflow-y-auto h-60">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">User</th>
              <th className="p-2 text-left">Action</th>
              <th className="p-2 text-left">Project</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="border-b hover:bg-gray-100 transition duration-300">
                <td className="p-2">{activity.time}</td>
                <td className="p-2">{activity.user}</td>
                <td className="p-2">{activity.action}</td>
                <td className="p-2">{activity.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectActivities;