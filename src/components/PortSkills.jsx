import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import CompanyLogos from "./design/CompanyLogos";

// import icons from react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiJavascript } from "react-icons/si";

const PortSkills = () => {
  const parallaxRef = useRef(null);

  return (
    <div id="skills">
      <div className="relative pt-40 -mt-20">
        {/* === Left vertical line with socials === */}
        <div className="hidden md:flex absolute left-1 top-1/2 flex-col items-center ">
          <ul className="flex flex-col gap-5 mb-5">{/* optional */}</ul>
          <div className="w-0.25 h-[10rem] bg-n-17/50 mt-[1rem]" />
        </div>

        {/* === Right vertical line with email === */}
        <div className="hidden md:flex absolute right-[-3rem] top-1/2 flex-col items-center ">
          <span className="rotate-90 text-xs tracking-widest text-ls-6 mb-5">
            oscar.bougart.dev@gmail.com
          </span>
          <div className="w-0.25 h-[20rem] bg-n-17/50 mt-[8rem]" />
        </div>

        {/* === Skills Section Content === */}
        <div className="container relative h-auto" ref={parallaxRef}>
          <div className="relative z-1 max-w-5xl mx-auto mb-20 md:mb-32">
            <h2 className="text-ls-5 uppercase tracking-wider mb-4 text-left">
              Skills & Technologies
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-ls-6 mb-8">
              Building Modern, Scalable & Beautiful Web Experiences
            </h1>
            <p className="text-ls-6 opacity-80 max-w-3xl text-left mb-12">
              My core stack includes HTML, CSS, JavaScript, React, Tailwind CSS,
              Python/Django, SQL, and GitHub. Here are the technologies I use
              the most:
            </p>

            {/* === Icon Grid === */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <FaHtml5 className="text-6xl text-orange-500 mb-2" />
                <p className="text-sm text-ls-6">HTML5</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <FaCss3Alt className="text-6xl text-blue-500 mb-2" />
                <p className="text-sm text-ls-6">CSS3</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <SiJavascript className="text-6xl text-yellow-400 mb-2" />
                <p className="text-sm text-ls-6">JavaScript</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <FaReact className="text-6xl text-sky-400 mb-2" />
                <p className="text-sm text-ls-6">React</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <SiTailwindcss className="text-6xl text-teal-400 mb-2" />
                <p className="text-sm text-ls-6">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <FaPython className="text-6xl text-yellow-500 mb-2" />
                <p className="text-sm text-ls-6">Python</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <SiDjango className="text-6xl text-green-700 mb-2" />
                <p className="text-sm text-ls-6">Django</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <FaDatabase className="text-6xl text-purple-500 mb-2" />
                <p className="text-sm text-ls-6">SQL / Databases</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform">
                <FaGithub className="text-6xl text-gray-600 mb-2" />
                <p className="text-sm text-ls-6">GitHub</p>
              </div>
            </div>
          </div>

          {/* Background decorative element (reuse from Hero) */}
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <ScrollParallax container={parallaxRef.current}>
              <BackgroundCircles />
            </ScrollParallax>
          </div>

          <CompanyLogos className="hidden relative mt-20 lg:block z" />
        </div>

        <BottomLine />
      </div>
    </div>
  );
};

export default PortSkills;
