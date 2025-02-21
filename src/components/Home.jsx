import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Hasnain Ahmed - Resume (1).pdf";
import img from "../assets/Adobe Express - file.png";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Md.Hasnain Ahmed",
        "I'm full stack developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="container home flex flex-col md:flex-row justify-around h-auto md:h-96 items-center p-6"
      id="home"
    >
      <div
        className="left w-full md:w-[650px] text-center p-8 border-2 border-yellow-200 rounded-md shadow-xl shadow-lime-200 bg-black mb-6 md:mb-0"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <h1 ref={typedRef} className="p-4 text-2xl md:text-4xl"></h1>
        <a
          href={pdf}
          download="Resume.pdf"
          className="btn p-2 border-2 border-yellow-200 font-black hover:bg-lime-800   transition duration-300  rounded-md"
        >
          Download Resume
        </a>
      </div>
      <div className="right flex justify-center items-center">
        <div
          className="img flex justify-center items-center"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <img className="w-48 md:w-64" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
