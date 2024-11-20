"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { blogsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Blog from "./blog";

export default function Blogs() {
  const { ref } = useSectionInView("Articles", 0.5);

  return (
    <section ref={ref} id="article" className="scroll-mt-28 mb-28 container mx-auto">
      <SectionHeading>My Articles</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center">
        {blogsData.map((blog, index) => (
          <React.Fragment key={index}>
            <Blog {...blog} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
