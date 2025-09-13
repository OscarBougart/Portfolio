import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles, BottomLine } from "./design/Hero"; // reuse hero bg elements
import CompanyLogos from "./design/CompanyLogos"; // optional logos/icons

const PortProjects = () => {
  const parallaxRef = useRef(null);

  return (
    <div id="projects">
      <div className="relative pt-40 -mt-20">
        {/* === Left vertical line === */}
        <div className="hidden md:flex absolute left-1 top-1/2 flex-col items-center">
          <div className="w-0.25 h-[10rem] bg-n-17/50 mt-[1rem]" />
        </div>

        {/* === Right vertical line === */}
        <div className="hidden md:flex absolute right-[-3rem] top-1/2 flex-col items-center">
          <span className="rotate-90 text-xs tracking-widest text-ls-6 mb-5">
            oscar.bougart.dev@gmail.com
          </span>
          <div className="w-0.25 h-[20rem] bg-n-17/50 mt-[8rem]" />
        </div>

        {/* === Projects Section Content === */}
        <div className="container relative h-auto" ref={parallaxRef}>
          <div className="relative z-1 max-w-5xl mx-auto mb-20 md:mb-32">
            <h2 className="text-ls-5 uppercase tracking-wider mb-4 text-left">
              Projects
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-ls-6 mb-8">
              Showcasing My Work & Creative Solutions
            </h1>
            <p className="text-ls-6 opacity-80 max-w-3xl text-left mb-8">
              Here’s a selection of my favorite projects — from full-stack web
              apps to creative design experiments. Each project reflects my
              approach to clean code, strong visuals, and user-centered
              experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
              <div className="bg-ls-1/50 p-8 rounded-2xl border border-ls-4">
                <h3 className="text-xl font-semibold text-ls-6 mb-4">
                  Featured Projects
                </h3>
                <ul className="space-y-2 text-ls-6 opacity-80">
                  <li>🌐 Portfolio Website – React + Tailwind</li>
                  <li>📱 Price Tracker App – Full-stack Django + React</li>
                  <li>🎨 Interactive Art Showcase – Three.js</li>
                </ul>
              </div>
              <div className="bg-ls-1/50 p-8 rounded-2xl border border-ls-4">
                <h3 className="text-xl font-semibold text-ls-6 mb-4">
                  My Approach
                </h3>
                <p className="text-ls-6 opacity-80">
                  Each project is an opportunity to combine functionality with
                  aesthetic appeal. I focus on performance, accessibility, and
                  scalability while also experimenting with new technologies and
                  ideas to push creative boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* Background decorative element */}
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <ScrollParallax container={parallaxRef.current}>
              <BackgroundCircles />
            </ScrollParallax>
          </div>

          {/* Optional logos or icons */}
          <CompanyLogos className="hidden relative mt-20 lg:block z" />
        </div>

        <BottomLine />
      </div>
    </div>
  );
};

export default PortProjects;
