import Experience from "../components/experience";
import {
  Cpp,
  Css,
  Git,
  Html,
  Javascript,
  Mongodb,
  Nodejs,
  Postgresql,
  Python,
  React,
  Ruby,
  Tailwind,
  Typescript,
} from "../components/skill-svg";

const workAmazon = {
  companyName: "Amazon",
  jobTitle: "Software Engineer",
  dateWorked: "May 2023 - Aug 2023",
  description: <>test description is very long and very cool</>,
};

export default function About() {
  return (
    <div className="flex flex-grow flex-col px-4 flex-wrap mt-8">
      <div className="mx-auto max-w-6xl w-full mb-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="ml-6">This is the about me section. Talking about me</p>
      </div>
      <div className="mx-auto max-w-6xl w-full mb-4">
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <ul className="list-none m-0 p-0">
          <Experience {...workAmazon} />
        </ul>
      </div>
      <div className="flex flex-col flex-wrap mx-auto max-w-6xl w-full">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <div className="flex flex-row flex-wrap">
          <Cpp />
          <Python />
          <Ruby />
          <Typescript />
          <React />
          <Tailwind />
          <Html />
          <Javascript />
          <Css />
          <Git />
          <Nodejs />
          <Mongodb />
          <Postgresql />
        </div>
      </div>
    </div>
  );
}
