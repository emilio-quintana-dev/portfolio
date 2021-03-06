const num = Math.floor(Math.random() * Math.floor(5));

export const IntroData = {
  topLine: "Biohacking / Web Dev / AI / UI-UX",
  headline: "Hi I'm Emilio and I'm a Software Developer.",
  description:
    "I enjoy building web applications and using technology to make an impact.",
  buttonLabel: "See my Github",
  img: require(`../images/svg-${num}.svg`),
  alt: "Image",
};

export const AboutData = {
  buttonLabel: "Download my Resume",
  description:
    "I started my first business right out of high school and fell in love with coding while building the website for my store. Strong analytic background with a Bachelor’s in Computer Information Systems and experience as a Data Analyst in a SAS startup.",
  headline: "Engineer by education, entrepreneur in spirit. ",
  topLine: "About me",
  img: require("../images/about-me.svg"),
  alt: "Image",
};

export const projects = {
  projectOneName: "Servitodo",
  projectOneDescription:
    "Web app made to help connect professionals with potential customers",
  projectOneStack: "Made with React, Redux, Ruby on Rails, Material UI and JWT",
  projectOneLoom: "https://www.loom.com/share/0782c7ff097e49c3ab2d8b0e3e2b8817",
  projectOneGithub: "https://github.com/emilio-quintana-dev/servitodo-client",
  projectTwoName: "Cerealvis",
  projectTwoDescription:
    "Electron app made to visualize serial data coming from a port (IoT)",
  projectTwoStack: "Made with React, Node.js and Material UI",
  projectTwoLoom: "https://www.loom.com/share/264162506394494995a22879cce0ac30",
  projectTwoGithub: "https://github.com/emilio-quintana-dev/CerealVis",
  projectThreeName: "Evernot",
  projectThreeDescription:
    "Web app with user authentication made to write, save and email notes / reminders",
  projectThreeStack: "Made with React, Ruby on Rails and Material UI",
  projectThreeLoom:
    "https://www.loom.com/share/c75e72bc0d2848f7b897999599a7baf3",
  projectThreeGithub: "https://github.com/emilio-quintana-dev/notes-react-app",
};
