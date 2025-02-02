import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white p-5 flex flex-col space-y-5 fixed h-full">
      <h1 className="text-xl font-bold">ProjectX</h1>
      <button className="bg-orange-500 p-3 rounded-lg hover:bg-orange-600 transition duration-300">
        + Create New Project
      </button>
      <nav className="flex flex-col space-y-2">
        {["Dashboard", "Projects", "Tasks", "Time Log", "Users"].map((item) => (
          <a
            key={item}
            href="#"
            className="p-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;