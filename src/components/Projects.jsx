import React from "react";
import { motion } from "framer-motion";
import projects from "../components/Data/projects.json";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12 mt-10" id="projects">
      <motion.h1
        className="text-4xl font-bold  text-white dark:text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects 🚀
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((data) => (
          <div
            key={data.id}
            className=" backdrop-blur-lg shadow-xl rounded-lg overflow-hidden border border-yellow-200 shadow-lime-200"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img
              src={data.imageSrc}
              alt={data.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-white-800 ">
                {data.title}
              </h2>
              <p className="text-white dark:text-gray-300 mt-2">
                {data.description}
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={data.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={data.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
