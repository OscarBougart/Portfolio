import { FaLinkedin, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import yoartlinebgerased from "../assets/Portfolio/yoartlinebgerased.png";
import CopyEmail from "../components/CopyEmail";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-ls-1  text-ls-6 py-36 relative flex ">
      <div className="container font-grotesk px-6 max-w-3xl text-center h-full">
        <h1 className="text-4xl  font-normal mb-6">Let’s Connect</h1>
        <p className="opacity-80 h5 max-w-2xl mx-auto mb-10">
          I’d love to connect, collaborate, or chat about ideas. Here’s how you
          can reach me:
        </p>

        {/* IInfo card */}
        <div className="bg-ls-2 tracking-wide border flex-row flex  border-ls-4 rounded-2xl p-8 shadow-md   ">
          <ul className="space-y-2   mx-5 text-ls-6 opacity-90">
            <li className="h4">Oscar Bougart</li>

            <li>
              <a
                href="mailto:oscar.bougart.dev@gmail.com"
                className="text-ls-1  hover:bg-ls-1"
              >
                <CopyEmail />
              </a>
            </li>
            <li className="h5">Aachen, Germany</li>
            <div className="flex flex-flow gap-10 pt-8">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ls-6 hover:text-color-17 transition-transform hover:scale-110"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ls-6 hover:text-color-17 transition-transform hover:scale-110"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ls-6 hover:text-color-17 transition-transform hover:scale-110"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://discordapp.com/users/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ls-6 hover:text-color-17 transition-transform hover:scale-110"
              >
                <FaDiscord size={28} />
              </a>
            </div>
          </ul>
          <div className="relative translate-y-10 translate-x-24 z-10">
            <img
              src={yoartlinebgerased}
              alt="Oscar Bougart"
              className="w-[12rem] h-[12rem] bg-ls-2  rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
