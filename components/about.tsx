"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a third-year {" "}
        <span className="font-medium">Computer science student</span>, I have developed a solid foundation in programming
        languages such as C++, Python, and C#{" "}  I possess strong <br/>
        <span className="font-medium">analytical and problem-solving skills</span>.{" "}
        which I have applied to various problems in 
        <span className="italic">data structures and algorithms.</span> 
        Additionally, I have gained experience in building Web projects with
        <span className="underline"> ASP.NET MVC and ASP.NET API </span> as well as in team collaboration through 
        {" "}
        <span className="font-medium">
          group projects
        </span>
          .
          I am committed to continuous{" "}
        <span className="font-medium">learning and staying up-to-date </span> 
        with emerging technologies and industry trends
      </p>

    </motion.section>
  );
}
