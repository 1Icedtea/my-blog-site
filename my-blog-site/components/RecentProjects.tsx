import { projects } from "@/data";
import React from "react";
import "./style.css";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="project-card">
        {projects.map((project) => (
          <div>{project.title}</div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
