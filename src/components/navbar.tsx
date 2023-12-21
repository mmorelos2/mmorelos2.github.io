import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // State to track active navbar item
  const location = useLocation(); // Get the current location from React Router

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Update activeItem state based on the current URL pathname
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveItem("home"); // Set activeItem to the corresponding section in the navbar
    } else if (pathname === "/about") {
      setActiveItem("about");
    } else if (pathname === "/projects") {
      setActiveItem("projects");
    } else if (pathname === "/contact") {
      setActiveItem("contact");
    }
  }, [location]);

  return (
    <nav className="text-black shadow-lg text-[2.2rem]">
      {/* Website Logo */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="hidden md:flex">
          {/* Desktop Logo */}
          <a href="." className="flex items-center py-4 px-2 hover:scale-[1.1] transition duration-100">
            {activeItem === "home" ? (
              <>
                <p className="glitch">
                  <span aria-hidden="true">M</span>M
                  <span aria-hidden="true">M</span>
                </p>
              </>
            ) : (
              <>
                <p className="glitch-inactive">M</p>
              </>
            )}
          </a>
        </div>
        {/* Mobile Logo */}
        <div className="md:hidden">
          <a href="." className="flex items-center py-4 px-2 hover:scale-[1.1] transition duration-100">

              <>
                <p className="glitch">
                  <span aria-hidden="true">M</span>M
                  <span aria-hidden="true">M</span>
                </p>
              </>
          </a>
        </div>
        {/* Desktop Navbar items */}
        <div className="hidden md:flex items-center space-x-1">
          <a
            href="/about"
            className={`py-4 px-2 font-semibold hover:scale-[1.1] transition duration-100`}
          >
            {activeItem === "about" ? (
              <>
                <p className="glitch">
                  <span aria-hidden="true">About</span>About
                  <span aria-hidden="true">About</span>
                </p>
              </>
            ) : (
              <>
                <p className="glitch-inactive">About</p>
              </>
            )}
          </a>
          <a
            href="/projects"
            className={`py-4 px-2 font-semibold hover:scale-[1.1] transition duration-100`}
          >
            {activeItem === "projects" ? (
              <>
                <p className="glitch">
                  <span aria-hidden="true">Projects</span>Projects
                  <span aria-hidden="true">Projects</span>
                </p>
              </>
            ) : (
              <>
                <p className="glitch-inactive">Projects</p>
              </>
            )}
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 text-gray-500 hover:text-green-500`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMenu ? "block" : "hidden"
        } mobile-menu dark:bg-darkBackground`}
      >
        <ul>
          <li>
            <a
              href="/about"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold dark:text-darkText"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 dark:hover:bg-darkBackground"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/test"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 dark:hover:bg-darkBackground"
            >
              Test
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
