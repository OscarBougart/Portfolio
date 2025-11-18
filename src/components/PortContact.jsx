import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import yoartlinebgerased from "../assets/Portfolio/yoartlinebgerased.png";
import CopyEmail from "../components/CopyEmail";

const socials = [
  { id: 1, icon: <FaGithub />, url: "#", title: "GitHub", color: "#333" },
  { id: 2, icon: <FaTwitter />, url: "#", title: "Twitter", color: "#1DA1F2" },
  {
    id: 3,
    icon: <FaInstagram />,
    url: "#",
    title: "Instagram",
    color: "#C13584",
  },
  { id: 4, icon: <FaDiscord />, url: "#", title: "Discord", color: "#7289DA" },
  { id: 5, icon: <FaLinkedin />, url: "#", title: "LinkedIn", color: "" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-ls-1  text-ls-8 py-10  relative flex ">
      <div className="container font-grotesk px-6 max-w-3xl text-center h-full">
        <h1 className="text-4xl  font-normal mb-6">Let’s Connect</h1>
        <p className="opacity-80 tracking-wide h5 max-w-2xl mx-auto mb-10">
          I’d love to connect, collaborate, or chat about ideas. Here’s how you
          can reach me:
        </p>

        {/* IInfo card */}
        <div className="bg-ls-4 tracking-wide border flex-row flex  border-ls-4 rounded-2xl p-8 shadow-md   ">
          <ul className="space-y-2   mx-5 text-ls-9 opacity-90">
            <li className="h4 font-merriweather tracking-wider">
              Oscar Bougart
            </li>

            <li>
              <a
                href="mailto:oscar.bougart.dev@gmail.com"
                className="text-ls-1   hover:bg-ls-1"
              >
                <CopyEmail />
              </a>
            </li>
            <li className="h5">Aachen, Germany</li>
            <ul className="flex gap-5 mb-5">
              {socials.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="group flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full border shadow-md
                             transform transition-all duration-300 hover:scale-110 hover:bg-ls-5 cursor-pointer"
                  >
                    <span className="text-gray-700 group-hover:text-white text-2xl transition-colors">
                      {item.icon}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </ul>
          <div className="relative mx-15 my-2 z-10">
            <img
              src={yoartlinebgerased}
              alt="Oscar Bougart"
              className="w-[12rem] h-[12rem] bg-ls-1  rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
