import { navigation } from "../constants";
import { useEffect, useState } from "react";
import { enablePageScroll } from "scroll-lock";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  // 🔹 Added state to keep track of the current visible section
  const [activeSection, setActiveSection] = useState("#home");

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  // 🔹 Added IntersectionObserver logic
  useEffect(() => {
    // Select all sections with an ID (so they match your navigation URLs)
    const sections = document.querySelectorAll("section[id]");

    // Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If a section is visible, update activeSection
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`); // 🔹 This sets the currently visible section
          }
        });
      },
      {
        root: null,
        threshold: [ 0.5]// 🔹 Only triggers when 60% of the section is visible
      }
    );

    // Attach observer to all sections
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer when component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl">
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:px-4">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={handleClick}
          className="tracking-wider font-light h4 font-playfair uppercase text-ls-7"
        >
          Oscar Bougart
        </a>

        {/* Nav Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                // 🔹 Conditional text color depending on activeSection
                className={`p-4 m-5 tracking-wider block relative  font-bold font-grotesk  transition-colors 
                  ${
                    activeSection === item.url
                      ? "text-ls-9" // 🔹 Active link color
                      : "text-ls-6"
                  } hover:text-color-17`}
              >
                {item.title}
                {/* 🔹 Dot indicator below the active nav link */}
                <span
                  className={`absolute -bottom-1 left-1/2 w-2 h-2 bg-ls-6 rounded-full transform -translate-x-1/2 transition-opacity 
                    ${
                      activeSection === item.url
                        ? "opacity-100" // 🔹 Dot is visible on active link
                        : "opacity-0" // 🔹 Dot hidden otherwise
                    }`}
                ></span>
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu button example */}
        <button
          className="ml-auto lg:hidden"
          onClick={() => setOpenNavigation(!openNavigation)}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
