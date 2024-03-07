"use client";
import "./home.module.css";
import "./globals.css";
import Projects from "@/components/Projects";
import React from "react";

const SectionMyLatestProject = () => {
  return (
    <div>
      <div>
        <h1 className="heading-PP gradient-text">My Latest Projects</h1>
        <p className="sectionDescription descr">
          Take a Look at something I've Worked On, SUch as a Case Study, Real
          Projects And More
        </p>
      </div>
      <Projects />
    </div>
  );
};

export default SectionMyLatestProject;
