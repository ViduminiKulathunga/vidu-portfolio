// app/page.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Navbar from "@/components/navbar-component";
import ScrollReveal from "@/components/scroll-reveal";
import ParticleBackground from "@/components/particle-background";
import TechLogo from "@/components/tech-logo";
import { Github } from "lucide-react";

export default function Home() {
  // Skills data
  const skills = [
    {
      category: "Frontend",
      items: [
        "TypeScript",
        "React/Next.js",
        "Redux/Context API",
        "Tailwind CSS",
        "Shadcn",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js/Express",
        "RabbitMQ",
        "Java/Spring Boot",
        "Python/Django",
        "RESTful APIs/gRPC",
        "GraphQL",
      ],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
    },
    {
      category: "DevOps",
      items: ["Docker", "CI/CD", "AWS/Azure", "Kubernetes"],
    },
  ];

  // Experience data
  const experiences = [
    {
      role: "Research",
      company: "Uppsala Univeristy",
      period: "2023 - 2024",
      description:
        "Researched ensemble machine learning techniques for LoRa-based wireless indoor localization, focusing on supervised machine learning techniques, IoT system implementation, and wireless signal processing. Utilized Python, MATLAB, IoT and Google Cloud to develop and optimize the system for improved localization accuracy.",
    },
    {
      role: "Software Engineer",
      company: "Frost",
      period: "2022 - 2023",
      description:
        "Developed and maintained RESTful APIs and microservices using Node.js. Optimized database queries and implemented caching strategies for improved performance. Built responsive web applications using React and Redux. Collaborated with designers to implement pixel-perfect UIs and improve user experience.",
    },
    {
      role: "Software Engineer",
      company: "Informatics International Ltd",
      period: "2021 - 2022",
      description:
        "Senior developer for enterprise SaaS applications, architecting scalable solutions using React, Node.js, GraphQL and AWS. Implemented Kubernete, CI/CD pipelines and mentored junior developers.",
    },
    {
      role: "Associate Software Engineer",
      company: "Ceylon Systems (Pvt) Ltd",
      period: "2016 - 2018",
      description:
        "A Full-Stack Software Developer, built responsive web/mobile applications using React, Redux, Node.js, GraphQL, PHP and Laravel.",
    },
    {
      role: "Web Developer",
      company: "Ebeyonds Digital Marketing",
      period: "2015 - 2016",
      description:
        "Web Developer, creating integrated, flexible, and scalable web-enabled end-to-end software solutions for the hotel, tourism, and business industries using PHP, JavaScript, jQuery, MySQL, HTML, and CSS.",
    },
  ];

  // Featured projects data
  const projects = [
    {
      id: 1,
      title: "Insurance Banking Platform",
      category: "Fullstack Development",
      description:
        "A scalable e-commerce platform with microservices & micro-frontend architecture, featuring real-time insurance management, payment processing, and analytics dashboard.",
      technologies: [
        "Typescript",
        "Node.js",
        "React",
        "Kubernete",
        "Docker",
        "Java",
        "AWS",
      ],
      image: "/assets/1.png",
    },
    {
      id: 2,
      title: "Telecommunication Service System",
      category: "Fullstack Development",
      description:
        "The frontend is built with React, while the backend integrates Node.js, RabbitMQ for message queuing, and PostgreSQL for database management. The system supports both REST API and GraphQL for communication. It is deployed on AWS using Docker and Kubernetes. gRPC is used for microservices communication.",
      technologies: [
        "Typescript",
        "React",
        "Node.js",
        "RabbitMQ",
        "PostgreSQL",
        "GraphQL",
        "Kubernetes",
        "gRPC",
      ],
      image: "/assets/4.png",
    },
    {
      id: 3,
      title: "Hotels & Resorts Reservation System",
      category: "Frontend Development",
      description:
        "An interactive group of hotels dashboard with real-time booking, payments, data visualization, predictive analytics, and customizable reports.",
      technologies: ["Javascript", "PHP", "CSS", "Stripe", "GCP"],
      image: "/assets/3.png",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "Fullstack Development",
      description:
        "Developed an e-commerce platform and website to enable customers worldwide to purchase premium Ceylon tea directly online, handling user authentication, content management, and analytics.",
      technologies: [
        "Express",
        "Javascript",
        "Node.js",
        "Firebase",
        "Stripe",
        "AWS",
      ],
      image: "/assets/2.png",
    },
  ];

  // Tech stack data with logos
  const techStack = [
    "TypeScript",
    "Node.js",
    "React",
    "Redux",
    "MongoDB",
    "AWS",
    "Docker",
    "RabbitMQ",
    "Redis",
    "Kubernetes",
    "gRPC",
    "REST API",
    "Java",
    "GraphQL",
    "PostgreSQL",
    "Azure",
    "Tailwind",
    "Nextjs",
    // "GCP",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-syne">
      <Navbar />
      <ScrollReveal />

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 reveal-item">
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm">
              Fullstack Software Developer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                end-to-end
              </span>{" "}
              solutions that scale
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
              Hi, I'm Saumya Kulathunga, fullstack developer passionate about
              creating robust, scalable enterprise-level applications from
              frontend to backend.
            </p>
            <p className="max-w-lg text-blue-400">
              Software Developer | AWS | Azure | GCP {<br />} MSc Computer
              Science, Uppsala University
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#work"
                className="bg-white text-black hover:bg-gray-200 inline-flex items-center px-4 py-2 rounded-md font-medium"
              >
                View My Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="mailto:viduminikulathunga@gmail.com"
                className="border border-gray-700 text-white hover:bg-gray-800 inline-flex items-center px-4 py-2 rounded-md font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden reveal-item">
            <Image
              src="/vidu.png"
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 reveal-item">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="h-px w-24 bg-gray-800 mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="reveal-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TechLogo name={tech} key={tech} />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-4 py-20 min-h-screen flex items-center"
      >
        <div className="grid md:grid-cols-1 text-center gap-12 items-center">
          <div className="space-y-6 order-1 md:order-2 reveal-item">
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm">
              About Me
            </Badge>
            <h2 className="text-4xl font-bold leading-tight">
              Fullstack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Developer
              </span>{" "}
              & Problem Solver
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hi, I'm Vidu Kulathunga, a passionate fullstack developer with
                expertise in building scalable enterprise-level web applications
                from concept to deployment. With a strong foundation in both
                frontend and backend technologies, I create seamless user
                experiences backed by robust server architectures.
              </p>
              <p>
                My journey began as a frontend developer, where I honed my
                skills in creating responsive and intuitive user interfaces. As
                I delved deeper into the world of web development, I expanded my
                expertise to backend technologies, database management, and
                cloud infrastructure, becoming a versatile fullstack developer
                capable of handling all aspects of application development.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="/Saumya_CV_3.pdf"
                download
                className="bg-white text-black hover:bg-gray-200 inline-flex items-center px-4 py-2 rounded-md font-medium"
              >
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-950 rounded-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center reveal-item">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 reveal-item"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">{skillSet.category}</h3>
                <ul className="space-y-3">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 reveal-item">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-gray-800 pl-8 relative reveal-item"
            >
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full -left-2 top-0"></div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <Badge className="bg-gray-800 text-white hover:bg-gray-700 mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-400 mb-4">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section
        id="work"
        className="container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-item">
          <div>
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm mb-4">
              Selected Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">My Featured Work</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-customBlue border-gray-800 overflow-hidden reveal-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="bg-customBlue p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-gray-700 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="container mx-auto px-4 py-20 bg-gray-950 rounded-3xl my-16"
      >
        <div className="text-center mb-16 reveal-item">
          <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm mb-4">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I Can Do For You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive development services to help businesses build
            robust, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Full-Stack Development",
              description:
                "End-to-end application development with modern frameworks, from responsive frontends to scalable backends.",
            },
            {
              title: "API Development",
              description:
                "Building robust RESTful, gRPC and GraphQL APIs that power your applications with efficient data exchange.",
            },
            {
              title: "Cloud Architecture",
              description:
                "Designing and implementing scalable cloud infrastructure on AWS, or Azure with CI/CD pipelines.",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 p-6 reveal-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-20 min-h-screen flex items-center"
      >
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6 reveal-item">
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              Have a project in mind or need technical expertise? I'd love to
              hear about it and discuss how we can work together.
            </p>
            <div className="pt-4 space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">viduminise@gmail.com </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">
                    Stockholm, Stockholm County, Sweden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-m font-bold mb-6 md:mb-0">S Kulathunga</div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#work"
              className="text-gray-400 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-white transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition"
            >
              Contact
            </a>
          </div>
          {/* <div className="flex space-x-4">
            {["GitHub", "LinkedIn", "Twitter", "Stack Overflow"].map(
              (social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                </a>
              )
            )}
          </div> */}

          <div className="flex space-x-4">
            {[
              {
                name: "GitHub",
                icon: <Github />,
                url: "https://github.com/ViduminiKulathunga?tab=overview&from=2025-03-01&to=2025-03-17",
              },
            ].map((social, index) => (
              <a
                key={index}
                target="blank"
                href={social.url}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} Saumya Kulathunga. All rights reserved.
        </div>
      </footer>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-10">
        <a
          href="#home"
          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-all"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
