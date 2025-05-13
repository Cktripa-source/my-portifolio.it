import  { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="border-t border-white/5 py-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Patrick Niyonsenga</h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              Full Stack Developer & Mobile App Developer creating innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Cktripa-source"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-tertiary hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-tertiary hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-tertiary hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="mailto:websdeveloper2024@gmail.com"
                className="w-10 h-10 rounded-full bg-dark-tertiary hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/projects" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a 
                  href="mailto:websdeveloper2024@gmail.com" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  websdeveloper2024@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Linkedin className="w-5 h-5 text-primary mt-0.5" />
                <a 
                  href="https://linkedin.com/in/patrickniyonsenga" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  linkedin.com/in/patrickniyonsenga
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Patrick Niyonsenga. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 