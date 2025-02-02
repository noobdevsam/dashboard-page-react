import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverviewCards from "./components/OverviewCards";
import ProjectTable from "./components/ProjectTable";
import ProjectActivities from "./components/ProjectActivities";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-5 ml-64 overflow-y-auto h-screen">
        <Header />
        <OverviewCards />
        <ProjectTable />
        <ProjectActivities />
      </main>
    </div>
  );
};

export default App;

/**
 * 
 * Get generated static css file from tailwind css
 * npx tailwind --watch -i ./src/index.css -o ./dist/output.css --minify
 */