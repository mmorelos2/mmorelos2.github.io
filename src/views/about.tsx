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
  jobTitle: "Software Development Engineer Intern",
  dateWorked: "May 2023 - Aug 2023",
  description: (
    <>
      During my Amazon internship, I engaged in a comprehensive exploration of
      the <b>software development lifecycle</b>. Over <b>12 weeks</b>, I led a
      project that heavily relied on extensive <b>cross-team collaboration</b>.
      Employing the <b>Amazon SDK v2</b> and <b>Kotlin</b>, I orchestrated the{" "}
      <b>creation</b> and <b>administration</b> of <b>S3</b>,<b>Lambda</b>, and{" "}
      <b>DynamoDB</b> resources. This experience illuminated the paramount
      significance of robust <b>design documentation</b> and{" "}
      <b>transparent communication</b>
      in ensuring project alignment and success.
    </>
  ),
};

const workBaptist = {
  companyName: "CSCE 430: Software Engineering",
  jobTitle: "Software Engineer",
  dateWorked: "Aug 2023 - Dec 2023",
  description: (
    <p>
      As part of a <b>four-person team</b>, I contributed to a{" "}
      <b>four-month project</b> aimed at creating a platform for Texas A&M
      University alumni to engage with the Association of Baptist Students.
      During the project, I assumed the role of
      <b> project owner</b> for a month and spearheaded the implementation of a
      Prayer Request feature while integrating the association's Google Calendar
      using
      <b> Ruby on Rails</b>, <b>CI/CD</b>, <b>Git/Github</b>, <b>Heroku</b>,{" "}
      <b>Brakeman</b>, <b>RSpec</b>, and <b>SimpleCov</b>. Our <b>Agile</b>{" "}
      workflow, coupled with regular communication with the association's
      president, ensured alignment with their vision, despite initial challenges
      in defining test cases, which we swiftly resolved.
    </p>
  ),
};

const workPos = {
  companyName: "CSCE 315: Programming Studio",
  jobTitle: "Backend/Frontend Software Engineer",
  dateWorked: "Aug 2022 - Dec 2022",
  description: (
    <>
      In the CSCE 315: Programming Studio course, our team embarked on creating
      a mock POS system for a Pizza company, exploring both <b>Waterfall</b> and{" "}
      <b>Agile </b>
      methodologies in two versions. As a <b>backend</b> developer in version
      one, I implemented simple <b>PostgreSQL</b> queries for data retrieval.
      Transitioning to a <b>frontend</b> role in version two, I focused on{" "}
      <b>React</b> components facilitating item selection and checkout on a{" "}
      <b>dynamic</b> page.
    </>
  ),
};

export default function About() {
  return (
    <div className="flex flex-grow flex-col px-4 flex-wrap mt-8">
      <div className="mx-auto max-w-6xl w-full mb-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="flex justify-between flex-wrap-reverse">
          <div className="w-[530px]">
            <p className="ml-6">
              Hey there! 👋 I'm Mario Morelos, currently pursuing a computer
              science degree at Texas A&M University, set to graduate in May
              2024. For me, Computer Science is akin to solving mind-bending
              puzzles – each challenge is an opportunity to delve into the
              exhilarating world of problem-solving.
            </p>
            <br />
            <p className="ml-6">
              My primary focus lies in software development, though I'm also
              captivated by the field of cybersecurity. Exploring this interest
              led me to delve into a fascinating course, 'Software Reverse
              Engineering,' where I delved into binary exploitation techniques,
              concealing code and unraveling such complexities using tools like
              Ghidra.
            </p>
            <br />
            <p className="ml-6">
              When I'm not crafting code or debugging, you'll find me indulging
              in my love for exotic fruits or scaling new
              heights—literally—through my passion for rock climbing. Join me on
              this exhilarating journey through the ever-evolving landscape of
              technology and beyond!
            </p>
          </div>
          <div className="flex flex-grow items-center justify-center w-1/3">
            <img
              src="images/about-me-pic.jpg"
              alt="About Me Picture"
              className="rounded-lg shadow-md mb-4"
              style={{ width: "auto", height: "360px" }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl w-full mb-4">
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <ul className="list-none m-0 p-0">
          <Experience {...workBaptist} />
          <Experience {...workAmazon} />
          <Experience {...workPos} />
        </ul>
      </div>
      <div className="flex flex-col flex-wrap mx-auto max-w-6xl w-full mb-4">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <div className="flex flex-row flex-wrap ml-4">
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
