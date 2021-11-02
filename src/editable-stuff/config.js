// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "James",
  middleName: "",
  lastName: "Young",
  message: " | Programmer | Mechanical Engineer | Researcher | Problem Solver | ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/younjames",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jamesyoung4/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
    {
      image: "fa-researchgate",
      url: "https://www.researchgate.net/profile/James-Young-19",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/__james_y__/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jamesyoung.png"),
  imageSize: 375,
  message:
    "I graduated top of my class with a Master's in Mechanical Engineering with Renewable Energy from" +
    " The University of Edinburgh in 2014. I then completed a PhD where I wrote an accelerated numerical" +
    " solver using the Smoothed Particle Hydrodynamics meshless method. Following a year spent developing" +
    " a spin-out company based on thermal-energy storage, I investigated time series forecasting for" +
    " FOREX trading. I'm currently a Post-Doctoral Researcher using Spherical Harmonics to model non-spherical"+
    " particles and am writing a package for the open-source software LAMMPS.",
  // resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "younjames", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["trote3d","lammps","younjames.github.io","Dynamics_4_Notebooks"],
};
// 

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python (Tensorflow, Scikit-learn, Pandas, Hyperopt)", value: 90 },
    { name: "HTML/CSS", value: 55 },
    { name: "Jupyter Notebooks", value: 80 },
    { name: "C/C++", value: 70 },
    { name: "Fortran", value: 80 },
    { name: "Bash", value: 75 },
    { name: "Git (Github actions)", value: 85 },
    { name: "HPC (OpenMP, MPI, GPGPU)", value: 90 },


  ],
  softSkills: [
    { name: "IDEs (Sublime, Visual Studio Code, Clion, Pycharm)", value: 90 },
    { name: "Postprocessing (Paraview, Blender) ", value: 80 },
    { name: "Abaqus FEA", value: 60 },
    { name: "Solid Edge", value: 70 },
    { name: "AutoCad LT", value: 55 },
    { name: "Dialux", value: 60 },
    { name: "Paraview", value: 80 },
    { name: "Star-CCM+", value: 60 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently open to full-time Software Engineering or Machine Learning opportunities! If you know of any positions available or if you have any questions, please feel free to email me at",
  email: "younjames@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
