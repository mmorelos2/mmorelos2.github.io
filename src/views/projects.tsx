import Project from "../components/project";

const calculatorProject = {
  imgPath: "images/projects-calculator.png",
  title: "Calculator App",
  githubLink: "https://github.com/mmorelos2/SimpleCalculator",
};

const snakeProject = {
  imgPath: "images/projects-snake.png",
  title: "Snake Clone",
  demoLink: "https://replit.com/@MarioMorelos1/Snake?v=1",
  githubLink: "https://github.com/mmorelos2/Snake",
};

const jwtProject = {
  imgPath: "images/projects-JWT.png",
  title: "JWT Generator",
  githubLink: "https://github.com/mmorelos2/JWT-Basic-App",
};

const todoListProject = {
  imgPath: "images/projects-todo.png",
  title: "To-Do List",
  githubLink: "https://github.com/mmorelos2/To-Do-List",
};

export default function Projects() {
  const projects = [
    todoListProject,
    jwtProject,
    calculatorProject,
    snakeProject,
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
