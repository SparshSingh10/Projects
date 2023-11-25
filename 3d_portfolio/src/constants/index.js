import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "java Learner",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Event Head",
      company_name: "Techno-Fi version 7.0",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2019 - September 2019",
      points: [
        "•	Coorporated with a team in Tech-Tres, an event of TECHNO-FI VERSION 7.0 which was a National level Science and Computer Fest organized by St. Peter's College,Agra in the year 2019",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "•	Collaborated with 15+ competing schools and 200+ participants as the Event Head and Core Team Member of the organizing committee of the Fest",
      ],
    },
    {
      title: "Field project G.L.A University",
      company_name: "Simplex Method Using Python",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Mar 2022",
      points: [
        "Implementation of the concept of Simplex method using PYTHON",
        "Through this we wer able to find the solution of the linear program and Inequality",
        "The case of Minimization or Maximization with the given constraints are used to solve the Equation"
      ],
    },
    {
      title: "Web Developer",
      company_name: "ApniShop",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Comminicating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "With proper Database management",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Web Developer Portfolio ",
      description:
        "Buil an Amazing 3D Web Developer Portfolio in React JS using Three.js & Implement sending emails through a form on the website",
        
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "React Three Fiber",
          color: "blue-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "World Clock with Alarm",
      description:
        "A world clock 🕓🕒🕙 is a clock which displays the time for various cities around the world. I Created a World🌎 Clock 🕙on WayScript with Alarm Using HTML, CSS & JavaScript on Development Server.",
      tags: [
        {
          name: "WayScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML 5",
          color: "green-text-gradient",
        },
        {
          name: "css 3",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/SparshSingh10/World-Clock-with-Alarm-Deployed-Using-WayScript",
    },
    {
      name: "The Simon game",
      description:
        "Get ready to watch, remember, repeat! The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order",
      tags: [
        {
          name: "HTML 5",
          color: "green-text-gradient",
        },
        {
          name: "css 3",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Avengers theme Website",
      description:
        "Be Greeted in avengers theme music whenever you open it and have some look on your favourite superheroes Wallpaper",
      tags: [
        {
          name: "HTML 5",
          color: "green-text-gradient",
        },
        {
          name: "css 3",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };