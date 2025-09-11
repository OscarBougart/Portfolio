import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles, BottomLine } from "./design/Hero"; // reuse your hero bg elements
import CompanyLogos from "./design/CompanyLogos"; // optional if you want logos here too

const PortAbout = () => {
  const parallaxRef = useRef(null);

  return (
    <div className="relative pt-40 -mt-20">
      {/* === Left vertical line with socials === */}
      <div className="hidden md:flex absolute left-1 top-1/2 flex-col items-center ">
        <ul className="flex flex-col gap-5 mb-5">
          {/* optional social links here */}
        </ul>
        <div className="w-0.25 h-[10rem] bg-n-17/50 mt-[1rem]" />
      </div>

      {/* === Right vertical line with email === */}
      <div className="hidden md:flex absolute right-[-3rem] top-1/2 flex-col items-center ">
        <span className="rotate-90 text-xs tracking-widest text-ls-6 mb-5">
          oscar.bougart.dev@gmail.com
        </span>
        <div className="w-0.25 h-[20rem] bg-n-17/50 mt-[8rem]" />
      </div>

      {/* === About Section Content === */}
      <div className="container relative h-auto" ref={parallaxRef}>
        <div className="relative z-1 max-w-5xl mx-auto mb-20 md:mb-32">
          <h2 className="text-ls-5 uppercase tracking-wider mb-4 text-left">
            About Me
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-ls-6 mb-8">
            Passionate Developer, Designer & Creator
          </h1>
          <p className="text-ls-6 opacity-80 max-w-3xl text-left mb-8">
            I’m Oscar Bougart, a full-stack web developer who blends clean code
            with thoughtful design. My background spans web development,
            graphic design, and creative projects — I love building experiences
            that are understandable, fast, and user-friendly. Outside of coding,
            I’m passionate about art, philosophy, and technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="bg-ls-1/50 p-8 rounded-2xl border border-ls-4">
              <h3 className="text-xl font-semibold text-ls-6 mb-4">
                Skills & Tools
              </h3>
              <ul className="space-y-2 text-ls-6 opacity-80">
                <li>HTML, CSS, JavaScript, React, Tailwind</li>
                <li>Python, Django, SQL</li>
                <li>Graphic Design & UI/UX</li>
              </ul>
            </div>
            <div className="bg-ls-1/50 p-8 rounded-2xl border border-ls-4">
              <h3 className="text-xl font-semibold text-ls-6 mb-4">
                Beyond the Code
              </h3>
              <p className="text-ls-6 opacity-80">
                I enjoy creating simple and organized solutions. My interests in
                architecture, art, and philosophy shape how I approach
                problem-solving and aesthetics. When I’m not coding, I’m drawing
                layouts, learning new languages, or exploring new ideas.
              </p>
            </div>
          </div>
        </div>

        {/* Background decorative element (reuse from Hero) */}
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
  );
};

export default PortAbout;
