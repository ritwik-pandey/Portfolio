const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "files.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "firefox.png",
    canOpen: true,
  },
  // {
  //   id: "photos",
  //   name: "Gallery", 
  //   icon: "photos.png",
  //   canOpen: true,
  // },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Competitive Programming",
    title: "LeetCode Profile",
    image: "/images/leetcode.png",
    link: "https://leetcode.com/u/bhagwanbharose",
  },
  {
    id: 2,
    date: "Competitive Programming",
    title: "CodeChef Profile",
    image: "/images/codechef.jpeg",
    link: "https://www.codechef.com/users/ritwik200",
  },
  {
    id: 3,
    date: "Competitive Programming",
    title: "Codeforces Profile",
    image: "/images/codeforces.jpeg",
    link: "https://codeforces.com/profile/ritwik--pandey",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript"],
  },

  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Postman"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ritwik-pandey",
  },
  {
    id: 2,
    text: "Gmail",
    icon: "/icons/gmail.svg",
    bg: "#1a73e8",
    link: "mailto:ritwikmni@gmail.com",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/ritwik_pandey01",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ritwik-pandey-817b571a9/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "PostNet Website Application",
      icon: "/images/files.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-20", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "PostNet.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PostNet is a modern web platform designed to simplify how users create, manage, and share posts in a clean and organized way.",
            "Rather than just a basic posting tool, it offers a smooth and engaging experience with intuitive navigation, real-time updates, and a minimal yet powerful interface.",
            "Think of it as your personal digital space where ideas, updates, and content flow effortlessly.",
            "Built using a robust tech stack, PostNet focuses on performance, responsiveness, and a seamless user experience across devices.",
          ],
        },
        {
          id: 2,
          name: "Github",
          icon: "/images/firefox.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ritwik-pandey/postnet",
          position: "top-10 right-20",
        }
        // {
        //   id: 4,
        //   name: "nike.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "/images/project-1.png",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Let's Leet",
      icon: "/images/files.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[22vh] left-20",
      children: [
        {
          id: 1,
          name: "about.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A Chrome extension designed to enhance LeetCode problem-solving by integrating real-time insights and peer solution comparisons.",
            "Enables users to analyze multiple approaches to the same problem, improving algorithmic thinking and optimization skills.",
            "Includes intelligent hint generation and error detection to guide users without exposing complete solutions.",
            "Built for seamless integration, ensuring minimal latency and a smooth user experience within the LeetCode platform.",
          ],
        },
        {
          id: 2,
          name: "Github",
          icon: "/images/firefox.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ritwik-pandey/leetcode-extension",
          position: "top-20 left-20",
        },
        // {
        //   id: 4,
        //   name: "ai-resume-analyzer.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 left-80",
        //   imageUrl: "/images/project-2.png",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Globe Quest",
      icon: "/images/files.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[38vh] left-20",
      children: [
        {
          id: 1,
          name: "about.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "GlobeQuest is an interactive web app designed to make exploring the world fun, engaging, and educational.",
            "Instead of just reading about places, users can discover countries, learn interesting facts, and challenge themselves through interactive features and quizzes.",
            "Think of it like a virtual journey around the globe—right from your screen, where learning meets exploration.",
            "Built with modern web technologies, GlobeQuest delivers a smooth, responsive experience with a clean and visually engaging interface.",
          ],
        },
        {
          id: 2,
          name: "Github",
          icon: "/images/firefox.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ritwik-pandey/globequest",
          position: "top-10 right-20",
        }

      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    // {
    //   id: 1,
    //   name: "me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-5",
    //   imageUrl: "/images/adrian.jpg",
    // },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "About Me!",

      description: [
        "Hey! I’m Ritwik 👋, a developer who enjoys building practical and impactful web applications that actually solve real problems.",
        "I work with JavaScript, Node.js, React, and Firebase—focused on creating fast, responsive, and scalable projects.",
        "I like keeping things simple: clean UI, efficient logic, and code that’s easy to understand and maintain.",
        "Most of the time, I’m either building something new, improving my problem-solving skills on LeetCode, or figuring out how to make my projects just a bit better every day 🚀",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  // children: [
  //   {
  //     id: 1,
  //     name: "trash1.png",
  //     icon: "/images/image.png",
  //     kind: "file",
  //     fileType: "img",
  //     position: "top-10 left-10",
  //     imageUrl: "/images/trash-1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "trash2.png",
  //     icon: "/images/image.png",
  //     kind: "file",
  //     fileType: "img",
  //     position: "top-40 left-80",
  //     imageUrl: "/images/trash-2.png",
  //   },
  // ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  // trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };