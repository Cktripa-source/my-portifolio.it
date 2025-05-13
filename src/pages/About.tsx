import  { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Cpu, Database, Download, FileText, Globe, Smartphone } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import TiltCard from '../components/TiltCard';
import RisingCard from '../components/Scroll';
const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const skills = [
    { name: 'Frontend Development', progress: 92, icon: <Code /> },
    { name: 'Backend Development', progress: 85, icon: <Database /> },
    { name: 'Mobile Development', progress: 88, icon: <Smartphone /> },
    { name: 'UI/UX Design', progress: 78, icon: <FileText /> },
    { name: 'DevOps & Cloud Services', progress: 75, icon: <Globe /> },
    { name: 'System Architecture', progress: 82, icon: <Cpu /> }
  ];
  
  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      position: 'Senior Full Stack Developer',
      period: 'Jan 2021 - Present',
      description: 'Leading development of enterprise applications with React, Node.js, and AWS. Managing a team of 5 developers and coordinating with cross-functional teams.',
      icon: <Code className="h-8 w-8 text-primary" />
    },
    {
      company: 'Mobile Solutions Ltd',
      position: 'Mobile App Developer',
      period: 'May 2019 - Dec 2020',
      description: 'Developed and maintained cross-platform mobile applications using React Native and Flutter. Implemented CI/CD pipelines and reduced build times by 40%.',
      icon: <Smartphone className="h-8 w-8 text-primary" />
    },
    {
      company: 'WebTech Studios',
      position: 'Frontend Developer',
      period: 'Feb 2017 - Apr 2019',
      description: 'Created responsive web applications with React and Vue.js. Collaborated with designers to implement pixel-perfect interfaces and optimize performance.',
      icon: <Globe className="h-8 w-8 text-primary" />
    }
  ];
  
  const stats = [
    { value: 25, label: 'Projects Completed', icon: <Code className="h-6 w-6 text-primary" /> },
    { value: 5, label: 'Years Experience', icon: <Calendar className="h-6 w-6 text-primary" /> },
    { value: 15, label: 'Satisfied Clients', icon: <FileText className="h-6 w-6 text-primary" /> },
    { value: 10, label: 'Open Source Contributions', icon: <Globe className="h-6 w-6 text-primary" /> }
  ];
  
  const educations = [
    {
      institution: 'Massachusetts Institute of Technology',
      degree: 'Master of Computer Science',
      period: '2016 - 2018',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with distinction.'
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Engineering',
      period: '2012 - 2016',
      description: 'Focused on software engineering and system design. Dean\'s List for 4 consecutive years.'
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      <motion.h1 
        className="section-header relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
        <div className="absolute -bottom-2 left-0 w-1/4 h-1 bg-gradient-to-r from-primary to-transparent"></div>
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-6">Who am I?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I'm <span className="font-semibold text-white">Patrick Niyonsenga</span>, a dedicated
              Full Stack Developer and Mobile App Developer with a passion for creating elegant,
              efficient, and user-friendly digital solutions.
            </p>
            <p>
              With over 5 years of experience in the tech industry, I specialize in building scalable web 
              applications and intuitive mobile experiences. My expertise spans across the entire development
              lifecycle, from conceptualization to deployment and maintenance.
            </p>
            <p>
              I thrive in collaborative environments and enjoy tackling complex challenges.
              My approach combines strong technical skills with creativity and a focus on delivering
              value through technology.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source
              projects, or sharing knowledge in tech communities.
            </p>
          </div>
          
          <div className="mt-8">
            <motion.a
              href="/resume.pdf"
              download
              className="btn btn-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">My Skills</h2>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="mr-3 text-primary">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-primary">{skill.progress}%</span>
                </div>
                <div className="skill-progress-bar">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="mb-16">
        <motion.h2 
          className="text-2xl font-bold mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Professional Journey
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              Work Experience
            </h3>
            
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  <div className="absolute -left-10 top-0 bg-dark p-1 rounded-full border-2 border-primary/30">
                    <div className="bg-primary/20 rounded-full p-1">
                      {experience.icon}
                    </div>
                  </div>
                  
                  <div className="card h-full">
                    <h4 className="text-lg font-semibold">{experience.position}</h4>
                    <p className="text-primary mb-2">{experience.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{experience.period}</p>
                    <p className="text-gray-300">{experience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FileText className="h-5 w-5 text-primary mr-2" />
              Education
            </h3>
            
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
              {educations.map((education, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                >
                  <div className="absolute -left-10 top-0 bg-dark p-1 rounded-full border-2 border-primary/30">
                    <div className="bg-primary/20 rounded-full p-1">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="card h-full">
                    <h4 className="text-lg font-semibold">{education.degree}</h4>
                    <p className="text-primary mb-2">{education.institution}</p>
                    <p className="text-sm text-gray-400 mb-3">{education.period}</p>
                    <p className="text-gray-300">{education.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8">Stats & Numbers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <TiltCard key={index}>
              <motion.div
                className="card h-full flex flex-col items-center text-center py-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
              >
                <div className="mb-4 bg-transparent p-3 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  <AnimatedCounter from={0} to={stat.value} />
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="card">
          <h2 className="">Technologies I Work With</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span>JavaScript/TypeScript</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span>React & React Native</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span>Node.js</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <span>MongoDB</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <span>PostgreSQL</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span>GraphQL</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span>Next.js</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <span>AWS</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span>Redux</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span>Docker</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <span>CI/CD</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-transparent p-2 rounded-full">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <span>Flutter</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
 