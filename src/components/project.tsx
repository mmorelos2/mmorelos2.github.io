import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type ProjectProps = {
  imgPath: string;
  title: string;
  aboutLink?: string;
  demoLink?: string;
  githubLink?: string;
};

export default function Project({
  imgPath,
  title,
  aboutLink,
  demoLink,
  githubLink,
}: ProjectProps) {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg mb-8">
      <img src={imgPath} alt={title} className="w-[270px] h-[300px]" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="mt-4 flex">
          {aboutLink && (
            <a
              href={aboutLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:glitch hover:scale-[1.05] text-[28px] transition duration-100 mr-2"
            >
              <div className="rounded hover:bg-blue-100 bg-gray-200 p-2 w-10 h-10 flex justify-center items-center">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:glitch hover:scale-[1.05] text-[28px] transition duration-100 mr-2"
            >
              <div className="rounded hover:bg-blue-100 bg-gray-200 p-2 w-10 h-10 flex justify-center items-center">
                <i className="fa-solid fa-play"></i>
              </div>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:glitch hover:scale-[1.05] text-[28px] transition duration-100 mr-2"
            >
              <div className="rounded hover:bg-blue-100 bg-gray-200 p-2 w-10 h-10 flex justify-center items-center">
                <i className="fa-brands fa-github"></i>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
