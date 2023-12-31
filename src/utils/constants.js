import xpress from "../images/company/xpress.svg";
import findworka from "../images/company/findworka.png";
import mobile from "../images/mobile.png";
import uba from "../images/company/uba.png";
import web from "../images/web.png";
import creator from "../images/creator.png";
import backend from "../images/backend.png";
import udemy from "../images/udemy.png";
import udemyCert from "../images/udemy-cert.jpg"

export const experiences = [
  {
    title: "Senior Frontend Engineer",
    company_name: "Xpress Payment LTD",
    icon: xpress,
    iconBg: "#383E56",
    date: "June 2022 - Till date",
    points: [
      "Development of complex user interfaces for various web applications, mentoring junior developers, and collaborating with designers and back-end engineers to ensure seamless front-end and back-end systems integration.",
      "Responsible for implementing and maintaining high-quality code standards, following agile development methodologies, and conducting code reviews to ensure the best possible application performance, scalability, and maintainability.",
      "Developed a large-scale payment platform that increased online transactions by 25%.",
      "Improving the user experience, optimizing application performance, and ensuring that the applications are accessible and responsive across all devices.",
    ],
  },
  {
    title: "Software Development Facilitator",
    company_name: "FindWorka Solution LTD",
    icon: findworka,
    iconBg: "#383E56",
    date: "February 2023 - Till date",
    points: [
      "Create and design curriculum and course materials for their students.",
      "Teach programming languages, coding principles, algorithms, data structures, and other technical concepts to students.",
      "Evaluate student assignments, projects, and exams to assess their understanding of the subject matter.",
      "Encourage class participation and facilitate discussions to deepen students' understanding of software development concepts.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "United Bank for Africa",
    icon: uba,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "I was involved in the development of complex user interfaces for various web applications, mentored junior developers, and collaborated closely with designers and back-end engineers to ensure seamless integration between front-end and back-end systems.",
      "Teach programming languages, coding principles, algorithms, data structures, and other technical concepts to studentsAs part of my responsibilities, I implemented and maintained high-quality code standards, followed agile development methodologies, and conducted code reviews to ensure optimal application performance, scalability, and maintainability..",
      "Additionally, I focused on continuously improving the user experience, optimizing application performance, and ensuring the applications' accessibility and responsiveness across all devices.",
    ],
  },
];

export const education = [
    {
      course: "HND, Agricultural Extension and Management",
      school: "Lagos State Polytechnic",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "August 2019",
    },
    {
        course: "OND, Agricultural Technology",
        school: "Lagos State Polytechnic",
        location: "Lagos, Nigeria",
        type: "Full time",
        date: "July 2016",
      },
  ];

  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "my-tech-stack",
      title: "Tech-stack",
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
  
  export const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "NodeJS Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: creator,
    },
  ];
  
  export const certification = [
    {
      name: "Advance React for Enterprise: React for Senior Engineers",
      image: udemyCert,
      issuingOrganization: "Udemy",
      url: "https://www.udemy.com/certificate/UC-2752a1a5-e733-47df-8258-a9a96f1cb87c/",
      date: "Feb 2023",
      logo: udemy,
    },
  ];