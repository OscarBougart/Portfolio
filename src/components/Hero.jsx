import { useRef } from "react";
import { BackgroundCircles } from "./design/Hero";
import yoartlinebgerased from "../assets/Portfolio/yoartlinebgerased.png";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

const socials = [
  { id: 1, icon: <FaGithub />, url: "#", title: "GitHub", color: "#333" },
  { id: 2, icon: <FaTwitter />, url: "#", title: "Twitter", color: "#1DA1F2" },
  { id: 3, icon: <FaInstagram />, url: "#", title: "Instagram", color: "#C13584" },
  { id: 4, icon: <FaDiscord />, url: "#", title: "Discord", color: "#7289DA" },
  { id: 5, icon: <FaLinkedin />, url: "#", title: "LinkedIn", color: ""},
];



const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <div id="hero" className="relative">
      <div className="md:h-[700px] md:pt-[10rem] -mt-[5.25rem] relative">
        
        {/* === Left vertical social icons === */}
        <div className="hidden md:flex absolute left-6 mt-[5rem] flex-col items-center z-50 pointer-events-auto">
          <ul className="flex flex-col gap-5 mb-5">
            {socials.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.title}
                  className="group flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full border shadow-md
                             transform transition-all duration-300 hover:scale-110 hover:bg-ls-5 cursor-pointer"
                >
                  <span className="text-gray-700 group-hover:text-white text-2xl transition-colors">
                    {item.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="w-0.25 h-[10rem] bg-gray-400 mt-[1rem]" />
        </div>

        {/* === Right vertical email === */}
        <div className="hidden md:flex absolute right-[-5.5rem] mt-[20rem] flex-col items-center z-50 pointer-events-auto">
          <span style={{ letterSpacing: "0.2em" }} className="rotate-90 text-sm tracking-wide text-gray-700">
            oscar.bougart.dev@gmail.com
          </span>
          <div className="w-0.25 h-[20rem] bg-gray-400 mt-[8rem]" />
        </div>

        {/* === Main content === */}
        <div className="container relative h-[700px]" ref={parallaxRef}>
          <div className="flex flex-col md:flex-row justify-between max-w-[62rem] mx-[5rem] mb-[4rem] md:mb-20 lg:mb-[6rem] z-10 relative">
            {/* === Text + Buttons === */}
            <div className="my-10 mx-10">
              <h1 className="h1 mb-10 color">
                <div className="h5 text-1 tracking-tight font-grotesk inline-block text-left relative text-gray-900">
                  Hallo, ich bin{" "}
                  <span className="block h1 tracking-wide font-playfair text-4xl md:text-6xl">
                    Oscar Bougart
                  </span>
   <span className="block ml-4 mt-3 text-lg md:text-xl font-light text-gray-6k  w3 tracking-widest uppercase">
      Web Developer
    </span>                </div>
              </h1>

              {/* === Two Buttons === */}
              <div className="flex gap-5 mt-6">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-ls-8 text-ls-1 font-medium shadow hover:bg-ls-7 transition-all duration-300"
                >
                  Contact Info
                </a>
                <a
                  href="/CV.pdf"
                  download
                  className="px-6 py-3 rounded-full bg-ls-1 border border-2 border-ls-6 text-ls-9 font-medium shadow hover:bg-ls-7 hover:text-ls-2 transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* === Profile Image === */}
            <div className="relative translate-x-0 md:translate-x-15 z-10">
              <img
                src={yoartlinebgerased}
                alt="Oscar Bougart"
                className="w-[25rem] h-[25rem] bg-gray-200 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>

          {/* === Background Circles === */}
          <div className="-translate-y-[15rem] -translate-x-[5rem] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 z-0 relative">
            <BackgroundCircles parallaxRef={parallaxRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
