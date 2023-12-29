import { useEffect, useState } from "react";
import { classNames } from "../utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-10">
      {" "}
      {/* Ensure a higher z-index */}
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-blue-600 hover:bg-blue-700 hover:ring-blue-500 inline-flex items-center rounded-full p-5 text-white shadow-sm transition-opacity hover:outline-none hover:ring-2 hover:ring-offset-2"
        )}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};
