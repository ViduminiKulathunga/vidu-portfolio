// app/page.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Navbar from "@/components/navbar-component";
import ScrollReveal from "@/components/scroll-reveal";
import ParticleBackground from "@/components/particle-background";
import TechLogo from "@/components/tech-logo";

export default function Home() {
  // Skills data
  const skills = [
    { category: "Frontend", items: ["React/Next.js", "TypeScript", "Tailwind CSS", "Redux/Context API"] },
    { category: "Backend", items: ["Node.js/Express", "Python/Django", "RESTful APIs", "GraphQL"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
    { category: "DevOps", items: ["Docker", "CI/CD", "AWS/GCP", "Kubernetes"] }
  ];
  
  // Experience data
  const experiences = [
    {
      role: "Senior Fullstack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Lead developer for enterprise SaaS applications, architecting scalable solutions using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers."
    },
    {
      role: "Backend Developer",
      company: "DataSystems Co.",
      period: "2019 - 2021",
      description: "Developed and maintained RESTful APIs and microservices using Node.js and Python. Optimized database queries and implemented caching strategies for improved performance."
    },
    {
      role: "Frontend Developer",
      company: "WebSolutions Agency",
      period: "2017 - 2019",
      description: "Built responsive web applications using React and Redux. Collaborated with designers to implement pixel-perfect UIs and improve user experience."
    }
  ];

  // Featured projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Fullstack Development",
      description: "A scalable e-commerce platform with microservices architecture, featuring real-time inventory management, payment processing, and analytics dashboard.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Docker"],
      image: "/api/placeholder/600/400?text=E-Commerce"
    },
    {
      id: 2,
      title: "Task Management System",
      category: "Web Application",
      description: "A collaborative task management system with real-time updates, role-based permissions, and automated workflows.",
      technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
      image: "/api/placeholder/600/400?text=Task+Management"
    },
    {
      id: 3,
      title: "Finance Dashboard",
      category: "Data Visualization",
      description: "An interactive financial dashboard with real-time data visualization, predictive analytics, and customizable reports.",
      technologies: ["React", "D3.js", "Node.js", "Redis"],
      image: "/api/placeholder/600/400?text=Finance+Dashboard"
    },
    {
      id: 4,
      title: "Social Media API",
      category: "Backend Development",
      description: "A high-performance RESTful API for a social media platform, handling user authentication, content management, and analytics.",
      technologies: ["Express", "GraphQL", "MongoDB", "AWS"],
      image: "/api/placeholder/600/400?text=Social+API"
    }
  ];

  // Tech stack data with logos
  const techStack = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'];

  return (
    <div className="min-h-screen bg-black text-white font-syne">
      <Navbar />
      <ScrollReveal />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 reveal-item">
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm">
              Fullstack Software Developer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">end-to-end</span> solutions that scale
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
              Hi I'm Vidu Kulathunga, fullstack developer passionate about creating robust, scalable applications from frontend to backend.
            </p>
            <p className="max-w-lg text-blue-400">
            Azure | AWS | Electrical/Electronic Technical Professional {<br/>} MSc Computer Science, Uppsala University
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#work" className="bg-white text-black hover:bg-gray-200 inline-flex items-center px-4 py-2 rounded-md font-medium">
                View My Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a href="mailto:viduminikulathunga@gmail.com" className="border border-gray-700 text-white hover:bg-gray-800 inline-flex items-center px-4 py-2 rounded-md font-medium">
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
            <div key={index} className="reveal-item" style={{ animationDelay: `${index * 100}ms` }}>
              <TechLogo name={tech} key={tech} />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-1 text-center gap-12 items-center">
          
          <div className="space-y-6 order-1 md:order-2 reveal-item">
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm">
              About Me
            </Badge>
            <h2 className="text-4xl font-bold leading-tight">
              Fullstack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Developer</span> & Problem Solver
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hi I'm Vidu Kulathunga, a passionate fullstack developer with expertise in building scalable web applications from concept to deployment. 
                With a strong foundation in both frontend and backend technologies, I create seamless user experiences backed by robust server architectures.
              </p>
              <p>
                My journey began as a frontend developer, where I honed my skills in creating responsive and intuitive user interfaces. 
                As I delved deeper into the world of web development, I expanded my expertise to backend technologies, 
                database management, and cloud infrastructure, becoming a versatile fullstack developer capable of handling all aspects of application development.
              </p>
            </div>
            <div className="pt-4">
              <a href="/Saumya_CV_1.pdf" download className="bg-white text-black hover:bg-gray-200 inline-flex items-center px-4 py-2 rounded-md font-medium">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
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
        <h2 className="text-3xl font-bold mb-12 text-center reveal-item">Technical Skills</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 reveal-item">
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
        <h2 className="text-3xl font-bold mb-12 reveal-item">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-800 pl-8 relative reveal-item">
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
      <section id="work" className="container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center">
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
            <Card key={project.id} className="bg-gray-900 border-gray-800 overflow-hidden reveal-item" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative h-64 w-full">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.category}</p>
                  </div>
                  <Badge className="bg-gray-800 text-white">2024</Badge>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-gray-700 text-gray-300">
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
      <section id="services" className="container mx-auto px-4 py-20 bg-gray-950 rounded-3xl my-16">
        <div className="text-center mb-16 reveal-item">
          <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm mb-4">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Can Do For You</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive development services to help businesses build robust, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Full-Stack Development",
              description: "End-to-end application development with modern frameworks, from responsive frontends to scalable backends."
            },
            {
              title: "API Development",
              description: "Building robust RESTful and GraphQL APIs that power your applications with efficient data exchange."
            },
            {
              title: "Cloud Architecture",
              description: "Designing and implementing scalable cloud infrastructure on AWS, GCP, or Azure with CI/CD pipelines."
            }
          ].map((service, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 p-6 reveal-item" style={{ animationDelay: `${index * 100}ms` }}>
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
      <section id="contact" className="container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6 reveal-item">
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-1.5 text-sm">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something Amazing</h2>
            <p className="text-gray-400 text-lg max-w-md">
              Have a project in mind or need technical expertise? I'd love to hear about it and discuss how we can work together.
            </p>
            <div className="pt-4 space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">viduminikulathunga@gmail.com </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">Stockholm, Stockholm County, Sweden</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-6 md:mb-0">Vidumini Kulathunga</div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#work" className="text-gray-400 hover:text-white transition">Projects</a>
            <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
          <div className="flex space-x-4">
            {['GitHub', 'LinkedIn', 'Twitter', 'Stack Overflow'].map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} Vidumini Kulathunga. All rights reserved.
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-10">
        <a 
          href="#home"
          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-all"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </a>
      </div>
    </div>
  );
}