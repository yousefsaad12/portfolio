import React from "react";
import { useState, useEffect } from "react";
import { Twitter, Linkedin, Mail, FileText } from "lucide-react";

const Solopreneur: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Cairo",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="solopreneur" className="py-8 container mb-16">
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-medium">Solopreneur</h2>
          <p className="text-xs text-neutral-400">{time} in Cairo, Egypt</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/Youseffsaadx"
            className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs transition-colors hover:bg-neutral-900"
          >
            <span className="h-4 w-4 flex items-center justify-center">
              <Twitter className="h-4 w-4" />
            </span>
            <span>X</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/yousefsaad1/"
            className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs transition-colors hover:bg-neutral-900"
          >
            <span className="h-4 w-4 flex items-center justify-center">
              <Linkedin className="h-4 w-4" />
            </span>
            <span>LinkedIn</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1JLV5fQ8wi-mbpVT-r6m523eTmaQKvPCL/view?usp=sharing"
            className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs transition-colors hover:bg-neutral-900"
          >
            <span className="h-4 w-4 flex items-center justify-center">
              <FileText className="h-4 w-4" />
            </span>
            <span>CV</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ysaad.dev@gmail.com"
            className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs transition-colors hover:bg-neutral-900"
          >
            <span className="h-4 w-4 flex items-center justify-center">
              <Mail className="h-4 w-4" />
            </span>
            <span>Get in Touch</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-neutral-400">
          © 2025 Yousef Saad. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Solopreneur;
