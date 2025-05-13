import   { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Code, Smartphone, Globe } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { Typewriter } from 'react-simple-typewriter';
import Image from '../assets/457165209_973761024498135_1347937242459788782_n-removebg-preview.png'

const Home = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Web Development',
      description: 'Creating responsive, fast, and user-friendly web applications with modern frameworks and technologies.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile applications that provide seamless user experiences across all devices.'
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: 'System Integration',
      description: 'Connecting different systems and applications to work together efficiently and share data seamlessly.'
    }
  ];
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      content: 'Patrick transformed our vision into reality. His technical expertise and attention to detail resulted in a platform that exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateMobile',
      content: 'Working with Patrick was a game-changer for our mobile app. He delivered a high-performance solution on time and within budget.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      name: 'Amanda Rodriguez',
      position: 'Product Manager, DataFlow',
      content: "Patrick's ability to understand complex requirements and translate them into elegant code is remarkable. Highly recommended!",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100'
    }
  ];
  
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center relative pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="lg:w-3/5">
            <motion.span
              className="text-primary font-medium inline-block mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, I'm
            </motion.span>
            
          <motion.h1
  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-black drop-shadow-lg">
    <Typewriter
      words={['Niyonsenga Patrick', 'Web Developer', 'Mobile App Developer','UI/UX Design','CL/CD Development']}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={100}
      delaySpeed={1000}
    />
  </span>
</motion.h1>


            
            <motion.h2
              className="text-2xl font-medium text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full Stack Developer & Mobile App Developer
            </motion.h2>
            
            <motion.p
              className="text-gray-300 max-w-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I build exceptional digital experiences with a focus on performance,
              accessibility, and user satisfaction. Let's transform your ideas into
              reality through innovative development solutions.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/projects">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Projects
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-6 -left-6 w-full h-full rounded-full bg-transparent -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative overflow-hidden rounded-full border border-red-300">
                <img
                  src={Image}
                  alt="Patrick Niyonsenga"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        )}
      </section>
      
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-header">My Services</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I offer comprehensive development solutions tailored to your specific needs,
            with a focus on quality, performance, and user experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <TiltCard>
                <div className="card h-full flex flex-col items-center text-center">
                  <div className="bg-transparent rounded-full p-4 inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-20 relative">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-transparent blur-3xl opacity-20 -z-10"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-header">Featured Projects</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Check out some of my recent work that showcases my skills and expertise
            in web and mobile development.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative" // Apply group class here directly
          >
            <TiltCard className="h-full">
              <div className="project-card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://www.psevenrwanda.com/static/media/logo.2266b8f15b5e47c9955e.png" 
                    alt="E-Commerce Platform" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 flex flex-col p-6 ">
                  <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-300 mb-4 flex-1">
                    A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-transparent rounded-full">React</span>
                    <span className="text-xs px-2 py-1 bg-transparent rounded-full">Node.js</span>
                    <span className="text-xs px-2 py-1 bg-transparent rounded-full">MongoDB</span>
                  </div>
                  <Link to="/projects" className="mt-auto text-primary flex items-center font-medium hover:text-primary-light transition-colors duration-300">
                    View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/projects">
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </section>
      
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-secondary/10 blur-3xl opacity-20 -z-10"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-header">Client Testimonials</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear what my clients have to say about their experience working with me
            on various projects.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <TiltCard>
                <div className="card h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-20">
        <div className="card bg-gradient-to-r from-primary/20 to-transparent border-primary/20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
              <p className="text-gray-300 mb-6">
                Let's discuss your ideas and create something amazing together. I'm always
                excited to take on new challenges and deliver exceptional results.
              </p>
              <Link to="/contact">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Laptop with code" 
                  className="rounded-xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
 