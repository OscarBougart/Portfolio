import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#features",
  },
  {
    id: "1",
    title: "Skills",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
 {/*} {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
  */}

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
  id: "0",
  title: "Neural Voice Link",
  text: "Harness voice-driven commands that let you sync with the AI hands-free—smoother, faster, more human than ever.",
  date: "October 2023",
  status: "done",
  imageUrl: roadmap1,
  colorful: true,
},
{
  id: "1",
  title: "XP Systems",
  text: "Level up your sessions with badges, ranks, and leaderboards—turning interaction into a game of digital prestige.",
  date: "May 2023",
  status: "progress",
  imageUrl: roadmap2,
},
{
  id: "2",
  title: "Persona Mods",
  text: "Remix the AI’s look and behavior—reskin the future to match your world, from neon avatars to rogue constructs.",
  date: "May 2025",
  status: "done",
  imageUrl: roadmap3,
},
{
  id: "3",
  title: "Data Jack Integration",
  text: "Plug into live feeds—weather grids, news pulses, system streams—for intel that adapts in real time.",
  date: "May 2023",
  status: "progress",
  imageUrl: roadmap4,
},

];

export const collabText =
  "Fueled by neural automation and shielded by cyber-grade security—built for you.";

export const collabContent = [
  {
  id: "0",
  title: "Neural Integration",
  text: "Plug into systems effortlessly—AI syncs with your workflow like a digital uplink.",
},
{
  id: "1",
  title: "Autopilot Intelligence",
  text: "Automate the grind with machine precision—let the code run while you focus on creation.",
},
{
  id: "2",
  title: "Cybersecurity Shield",
  text: "Encrypted, fortified, and unbreakable—your data guarded in the neon grid.",
},

];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Unlock Knowledge",
    text: "Access instant answers powered by AI intelligence—no endless searching required.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
  id: "1",
  title: "Evolve Daily",
  text: "Neural processing refines every reply, delivering smarter, sharper insights each time.",
  backgroundUrl: "assets/benefits/card-2.svg",
  iconUrl: benefitIcon2,
  imageUrl: benefitImage2,
  light: true,
},
{
  id: "2",
  title: "Seamless Connection",
  text: "Stay linked to the AI grid anywhere, any device—always within reach.",
  backgroundUrl: "assets/benefits/card-3.svg",
  iconUrl: benefitIcon3,
  imageUrl: benefitImage2,
},
{
  id: "3",
  title: "Lightning Response",
  text: "Get rapid-fire answers, streamlined for clarity and precision in seconds.",
  backgroundUrl: "assets/benefits/card-4.svg",
  iconUrl: benefitIcon4,
  imageUrl: benefitImage2,
  light: true,
},
{
  id: "4",
  title: "Ask Without Limits",
  text: "From the simplest queries to the complex unknown—just ask, the AI responds.",
  backgroundUrl: "assets/benefits/card-5.svg",
  iconUrl: benefitIcon1,
  imageUrl: benefitImage2,
},
{
  id: "5",
  title: "Adaptive Intelligence",
  text: "An AI that learns, adapts, and upgrades with every interaction—built for the future.",
  backgroundUrl: "assets/benefits/card-6.svg",
  iconUrl: benefitIcon2,
  imageUrl: benefitImage2,
},
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
 
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];