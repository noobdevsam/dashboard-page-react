import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-5">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <input
        type="text"
        placeholder="Search for anything..."
        className="p-2 border rounded-lg w-full md:w-1/3 mt-3 md:mt-0"
      />
      <div className="flex items-center space-x-3 mt-3 md:mt-0">
        <span>Alex Meian</span>
        <img src="src/assets/user.png" className="rounded size-16" />
      </div>
    </header>
  );
};

export default Header;