import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaDatabase,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion"


const gridContainerVariants = {
  hidden: { opacity:0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren:0.25,
    },
  },
}

const gridSquareVariants = {
  hidden: {opacity: 0 }, show: { opacity: 1 }
}

/* === Card Component for Skills === */
const SkillCard = ({ icon, label }) => (
  <div
    className="
      bg-white dark:bg-neutral-800 
      rounded-xl shadow-md hover:shadow-xl 
      hover:-translate-y-2 transform transition-all duration-300
      flex flex-col items-center justify-center p-6
    "
  >
    {icon}
    <p className="text-lg font-medium text-ls-7 mt-3">{label}</p>
  </div>
);

const MotionSkillCard = motion(SkillCard);


const PortAbout = () => {
  return (
    <section id="about" className="bg-ls-2 py-20">
      <div className="font-playfair max-w-6xl mx-auto px-6 flex flex-col items-center text-start">
        {/* === Intro Text === */}
        <h1 className="mt-10 h2 font-bold py-5 text-ls-8 mb-4">About Me</h1>
        <p className="max-w-3xl text-ls-7 font-thin tracking-wider font-merriweather leading-relaxed mb-6">
          I’m Oscar Bougart, a full-stack web developer passionate about
          building intuitive digital experiences. I specialize in web and app
          development, continuously learning new tools and refining my craft.
        </p>
        <p className="max-w-3xl text-ls-7 font-merriweather font-thin leading-relaxed mb-12">
          With a decade of hospitality experience, I bring a strong focus on
          teamwork, adaptability, and customer-centric thinking to every project.
          I thrive in collaborative environments and am always eager to explore
          new technologies to push my creativity further.
        </p>

        {/* === Stacks Section === */}
        <motion.div 
          variants = {{ gridContainerVariants }}
          initial= "hidden"
          animate= "show"
          className="w-full mb-16">
          <h2 className="text-3xl font-semibold text-ls-8 mb-8 text-center">Stacks</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<FaHtml5 className="text-5xl text-orange-500" />}
              label="HTML5"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<FaCss3Alt className="text-5xl text-blue-500" />}
              label="CSS3"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<SiJavascript className="text-5xl text-yellow-400" />}
              label="JavaScript"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<FaReact className="text-5xl text-sky-400" />}
              label="React"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<FaJava className="text-5xl text-orange-600" />}
              label="Java"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<SiTailwindcss className="text-5xl text-teal-400" />}
              label="Tailwind"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<FaPython className="text-5xl text-yellow-500" />}
              label="Python"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<SiDjango className="text-5xl text-green-700" />}
              label="Django"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<FaDatabase className="text-5xl text-purple-500" />}
              label="SQL"
            />
            <MotionSkillCard
              variants={{ gridSquareVariants }}
              icon={<FaGithub className="text-5xl text-gray-600" />}
              label="GitHub"
            />
          </div>
        </motion.div>

        {/* === Beyond the Code Section === */}
        <div className="w-full  rounded-xl p-8 flex flex-col justify-center items-center text-start">
          <div className="h2 font-semibold font-playfair text-ls-8 mb-6">
            Beyond the Code
          </div>
          <p className="max-w-3xl text-ls-7 leading-relaxed font-grotesk mb-4">
            Before tech, I spent a decade in hospitality where I honed
            collaboration, adaptability, and service excellence. These values
            guide my approach to development.
          </p>
          <p className="max-w-3xl text-ls-7 leading-relaxed font-grotesk">
            I’m also exploring game design with Unity and C#, experimenting with
            interactive and playful mechanics. Outside coding, I love cooking,
            drawing, and discovering new artistic mediums to inspire my work.
          </p>
        </div>
      </div>
    </section>
  );
};



export default PortAbout;
