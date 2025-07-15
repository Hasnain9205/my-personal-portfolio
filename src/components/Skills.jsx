import React from "react";
import skills from "../components/Data/skills.json";

export default function Skills() {
  return (
    <div className="flex items-center justify-center p-4" id="skills">
      <div className="container skills mt-10 w-full max-w-4xl">
        <h1 className="text-3xl font-black ">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {skills.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-md shadow-xl shadow-lime-200 bg-black text-center my-5"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img
                className="w-16 h-16"
                src={`./assets/${data.imageSrc}`}
                alt=""
              />
              <h3 className="text-xl font-bold text-white">{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
