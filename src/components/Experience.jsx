import React from "react";
import experience from "../components/Data/experience.json";

export default function Experience() {
  return (
    <div className="flex items-center justify-center p-4" id="experience">
      <div className="container ex w-full max-w-4xl mt-10">
        <h1 className="text-3xl font-black text-center">Experience</h1>
        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className="ex-items flex flex-col md:flex-row items-center md:justify-between gap-6 m-6 p-6 rounded-md shadow-xl shadow-lime-200 bg-black text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="lefts w-full md:w-1/3 flex justify-center">
                <img
                  className="w-24 h-24"
                  src={`/assets/${data.imageSrc}`}
                  alt=""
                />
              </div>
              <div className="right w-full md:w-2/3 text-white">
                <h2 className="text-2xl font-semibold">{data.role}</h2>
                <h4 className="text-xl font-semibold">
                  <span className="text-lime-400">
                    {data.startDate} - {data.endDate}
                  </span>
                  <span className="text-yellow-200"> {data.location}</span>
                </h4>
                <h5 className="text-xl text-yellow-200">
                  {data.experiences[0]}
                </h5>
                <h5 className="text-xl text-yellow-200">
                  {data.experiences[1]}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
