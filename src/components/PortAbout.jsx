import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles, BottomLine } from "./design/Hero"; // reuse your hero bg elements
import CompanyLogos from "./design/CompanyLogos"; // optional if you want logos here too

const PortAbout = () => {
  const parallaxRef = useRef(null);

  return (
    <div id="about">
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

        {/* === About Section Content ===https://www.youtube.com/watch?v=4yBxb5RQxPs&ab_channel=SnippetsCode */}
        <div
          className="container relative grid-flow-row font-grotesk h-auto"
          ref={parallaxRef}
        >
          <h1 className="absolute  top-[25rem] font-rubik  -rotate-90 origin-left text-8xl text-ls-6 px-2">
            About Me
          </h1>
          <div className="flex-col z-1 max-w-5xl mx-auto mb-20 md:mb-32">
            <p className="text-ls-6 tracking-wide w-3/5 opacity-90 max-w-3xl text-left mb-8 pl-6 py-4 bg-ls-2/30 rounded-lg shadow-md leading-relaxed">
              I’m Oscar Bougart, a full-stack web developer driven by curiosity
              and growth. I turn ideas into functional digital projects using my
              experience in both web and app design, while constantly learning
              new tools and approaches to refine my craft. My goal is to create
              digital experiences that feel intuitive, consistent, and enjoyable
              for the people who use them.
            </p>

            <div className="  gap-10 mt-12">
              <div className="">
                <h3 className="text-xl font-semibold text-right text-ls-6 mb-4">
                  Beyond the Code
                </h3>
                <p className="text-ls-6 tracking-wide w-3/5 opacity-90 max-w-3xl text-left mb-8 pl-6 py-4 bg-ls-2/30 rounded-lg shadow-md leading-relaxed ml-auto">
                  Before moving into tech, I spent a decade working in
                  hospitality, where I learned the importance of service,
                  collaboration, and consistency. Those experiences continue to
                  shape how I approach development — focusing on teamwork,
                  adaptability, and understanding what people need. I’m also
                  beginning to explore game design with Unity and C#,
                  experimenting with small interactive ideas and playful
                  mechanics.
                </p>
              </div>
            </div>
          </div>

          {/* Background decorative element (reuse from Hero) */}
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"></div>

          {/* Optional logos or icons */}
          
        </div>

        
      </div>
    </div>
  );
};

export default PortAbout;
