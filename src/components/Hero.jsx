import { curve, robot, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./design/Generating";
import Notification from "./design/Notification";
import CompanyLogos from "./design/CompanyLogos";
import { socials } from "../constants";
import ThreeScene from "../components/ThreeScene";
import yoartlinebgerased from "../assets/Portfolio/yoartlinebgerased.png";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <div className="relative h-700 pt-[10rem] -mt-[5.25rem]">
      {/* === Left vertical line with info === */}
      <div className="hidden md:flex absolute left-6 mt-[14rem] flex-col items-center ">
        {/* Social icons stacked vertically */}
        <ul className="flex flex-col gap-5 mb-5">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border rounded-full hover:bg-n-17/20 shadow-md  duration-200 hover:border-n-17/20 transition-colors"
              >
                <img
                  src={item.iconUrl}
                  width={25}
                  height={25}
                  alt={item.title}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="w-0.25 h-[10rem] bg-n-17/50 mt-[1rem]" />
      </div>

      {/* === Right vertical line with info ===   
            Make me a design very similar to this but for my About page
        */}
      <div className="hidden md:flex absolute right-[-5.5rem] mt-[20rem] flex-col items-center ">
        <span
          style={{ letterSpacing: "0.2em" }}
          className="space rotate-90 text-sm tracking-wide text-n-18 "
        >
          oscar.bougart.dev@gmail.com
        </span>
        <div className="w-0.25 h-[20rem] bg-n-17/50 mt-[8rem]" />
      </div>

      <div className="container relative h-[700px]" ref={parallaxRef}>
        <div className="flex flex-col md:flex-row justify-between z-1 max-w-[62rem] mx-[10rem] mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <div>
            <h1 className="h1 mb-8  color">
              <div className="h3 text-1 tracking-tight font-grotesk inline-block text-left relative text-ls-5">
                Hallo, ich bin{" "}
                <span className="block h1 tracking-wide   font-grotesk text-ls-6">
                  Oscar Bougart
                </span>
              </div>
            </h1>
            <p className="h6 max-w-[25rem] italic max-w-3xl  mb-6 font-sourcecode text-opacity-70 text-ls-6 lg:mb-8 text-left">
              Ich arbeite daran, Projekte mit Liebe zum Detail und
              Nutzerfreundlichkeit zu gestalten. Meine Webseiten sollen
              verständlich, einfach und angenehm zu benutzen sein
            </p>
          </div>
          <div className="">
            <img
              src={yoartlinebgerased}
              alt="Oscar Bougart"
              className="w-[25rem] h-[25rem] rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="relative max-w-[2 3rem] mx-auto md:max-w-5xl xl:mb-24">
          
            <BackgroundCircles parallaxRef={parallaxRef} />
       

          <div className="relative h-screen">
            <ThreeScene />
          </div>
        </div>
        <CompanyLogos className="hidden relative mt-20 lg:block z" />
      </div>
      <BottomLine />
    </div>
  );
};

export default Hero;
