"use client";
import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// const projects = [
//   { id: 1, category: "Data Science", title: "Sentiment Classifier" },
//   { id: 2, category: "Software Project", title: "Credit Risk App" },
//   { id: 3, category: "Data Science", title: "Clustering Visualizer" },
//   { id: 4, category: "Software Project", title: "Quiz Platform" },
// ];

const projects = [
  {
    id: 1,
    category: "Software Project",
    title: "Avento Origin",
    description:
      "Front End Developer and UI/UX Designer of Avento Origin, a web application for managing documents with QR Codes.",
    imageUrl: "/web_avento.png",
    websiteUrl: "https://avento-origin.vercel.app/",
    readMoreUrl: "Avento Origin.pdf",
  },
  {
    id: 2,
    category: "Software Project",
    title: "Personal Website",
    description:
      "My personal website project. A website. You're looking at it. Mission accomplished?",
    imageUrl: "/web_personal.png",
    websiteUrl: "/",
  },
  {
    id: 3,
    category: "Data Science",
    title: "Insurance Customer Churn Prediction",
    description: "An Insurance Customer Churn Prediction.",
    imageUrl: "/data_apap.png",
    readMoreUrl: "/Tim Projek APAP.pdf",
  },
  {
    id: 4,
    category: "Data Science",
    title: "Sentiment Classifier",
    description:
      "case study focuses on analyzing user behavior for Cyclistic, a fictional bike-share company based in Chicago",
    imageUrl: "/data_course.png",
    readMoreUrl: "https://github.com/shabhias",
  },
];

export default function ProjectSection() {
  const [category, setCategory] = useState("Software Project");

  const handleCategory = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string
  ) => {
    if (newCategory) setCategory(newCategory);
  };

  const filtered = projects.filter((p) => p.category === category);

  return (
    <section className="bg-[#111] text-white py-20 px-6">
      {/* Header with title and filter toggle */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center border-y border-gray-500 py-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest">
          MY PROJECT
        </h2>
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={handleCategory}
          aria-label="Category"
          sx={{
            backgroundColor: "#1f1f1f",
            borderRadius: "1px",
            overflow: "hidden",
            boxShadow: "inset 0 0 0 1px #333",
            "& .MuiToggleButton-root": {
              fontSize: "0.9rem",
              fontWeight: 400,
              fontFamily: "lexend exa",
              textTransform: "none",
              color: "#ccc",
              backgroundColor: "#1f1f1f",
              border: "0px solid #333",
              borderRadius: "0px", // kotak tajam
              padding: "9px 10px",
              transition: "all 0.2s ease-in-out",
              "&.Mui-selected": {
                backgroundColor: "#ffffff",
                color: "#111111",
                fontWeight: 400,
                boxShadow: "0 0 0 1px #fff",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              },
              "&:hover": {
                backgroundColor: "#2a2a2a",
                color: "#fff",
              },
            },
          }}
        >
          <ToggleButton value="Software Project">
            Software Development
          </ToggleButton>
          <ToggleButton value="Data Science">Data Science</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Cards list */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ delay: idx * 0.1, duration: 0.3, ease: "easeOut" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              websiteUrl={project.websiteUrl}
              readMoreUrl={project.readMoreUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
