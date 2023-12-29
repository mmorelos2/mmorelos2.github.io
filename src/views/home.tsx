export default function Home() {
  return (
    <div className="flex flex-grow items-center justify-around px-4 flex-wrap-reverse mx-auto max-w-7xl w-full">
      <section className="w-full md:w-5/12 px-4 py-8 md:py-0">
        {/* Left Section */}
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to My Personal Website!
        </h1>
        <p className="text-lg">
          I'm passionate about creating innovative software solutions that make
          a difference. Explore my projects and skills to learn more about what
          I can offer.
        </p>
      </section>
      <section className="w-full md:w-5/12 px-4 py-8 md:py-0 flex flex-col items-center">
        {/* Right Section */}
        <img
          src="images/profile-pic.jpg"
          alt="Profile Picture"
          className="rounded-lg shadow-md"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="mt-2 flex space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mario-morelos/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:glitch text-[32px] hover:scale-[1.15]"
            style={{ transition: "transform 0.1s ease-in-out" }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mmorelos2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:glitch text-[32px] hover:scale-[1.15]"
            style={{ transition: "transform 0.1s ease-in-out" }}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          {/* Email */}
          <a
            href="mailto:morelos.marioluis@gmail.com"
            className="hover:glitch text-[32px] hover:scale-[1.15]"
            style={{ transition: "transform 0.1s ease-in-out" }}
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
