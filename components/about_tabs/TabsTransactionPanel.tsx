"use client";

import React, { useState } from "react";
import { TransitionPanel } from "../motion-primitives/transition-panel";

export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const ITEMS = [
    {
      title: "Education",
      subtitle: "Academic Background",
      content: (
        <>
          Bachelor of{" "}
          <span className="font-semibold text-gray-600">Computer Science</span>{" "}
          at Universitas Indonesia.
        </>
      ),
    },
    {
      title: "Skill",
      subtitle: "Technical Proficiencies",
      content: (
        <>
          Proficient in{" "}
          <span className="font-semibold text-gray-600">Python</span>,{" "}
          <span className="font-semibold text-gray-600">SQL</span>,{" "}
          <span className="font-semibold text-gray-600">JavaScript</span>, and{" "}
          <span className="font-semibold text-gray-600">R</span>. Experienced
          with libraries such as{" "}
          <span className="font-semibold text-gray-600">Pandas</span>,{" "}
          <span className="font-semibold text-gray-600">NumPy</span>,{" "}
          <span className="font-semibold text-gray-600">Scikit-learn</span>, and
          visualization tools like{" "}
          <span className="font-semibold text-gray-600">Matplotlib</span> and{" "}
          <span className="font-semibold text-gray-600">Seaborn</span>, and have
          a strong foundation in{" "}
          <span className="font-semibold text-gray-600">Machine Learning</span>.
          Skilled in <span className="font-semibold text-gray-600">UI/UX</span>{" "}
          design using{" "}
          <span className="font-semibold text-gray-600">Figma</span>, and
          frontend development using{" "}
          <span className="font-semibold text-gray-600">Next.js</span>. Also
          experienced with backend development using{" "}
          <span className="font-semibold text-gray-600">Django</span>.
        </>
      ),
    },
    {
      title: "Certification",
      subtitle: "Professional Credentials",
      content: (
        <>
          Completed{" "}
          <a
            href="https://www.coursera.org/professional-certificates/google-data-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            certifications
          </a>{" "}
          in{" "}
          <span className="font-semibold text-gray-600">
            Google Data Analytics
          </span>{" "}
          (Coursera). Continuously exploring new skills through online
          platforms.
        </>
      ),
    },
  ];

  return (
    <div className="max-w-4xl px-2 mt-2 justify-center mx-auto min-h-[300px]">
      {/* Tab Buttons — tetap di tengah */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 overflow-auto ">
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeIndex === index
                ? "bg-[#171D29] text-white shadow-md"
                : "bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-100 dark:text-zinc-800 dark:hover:bg-zinc-300"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Tab Content — rata kiri dan sejajar teks sebelumnya */}
      <div className="py-2 px-4 sm:px-6 md:px-0">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -30, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0)" },
            exit: { opacity: 0, y: 30, filter: "blur(4px)" },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className="py-3 px-4 sm:px-6 md:px-20">
              <h3 className="mb-2 text-lg font-semibold text-black text-left">
                {item.subtitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[16px] text-justify">
                {item.content}
              </p>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
