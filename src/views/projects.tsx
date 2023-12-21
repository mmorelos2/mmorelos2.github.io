import Project from "../components/project";

const calculatorProject = {
  imgPath: "images/projects-calculator.png",
  title: "Calculator App",
  description: "A simple calculator app with basic arithmetic functions.",
  aboutLink: "https://example.com/about",
  demoLink: "https://example.com/demo",
  githubLink: "https://github.com/example/calculator",
};

export default function Projects() {
  const projects = [
    calculatorProject,
    calculatorProject,
    calculatorProject,
    calculatorProject,
    calculatorProject,
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
