import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, MessageSquare, Clock } from 'lucide-react';
import TiltCard from '../components/TiltCard';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      content: 'websdeveloper2024@gmail.com',
      link: 'mailto:websdeveloper2024@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      content: '+250796133013',
      link: 'tel:+250796133013'
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      content: 'Rwanda->West->Rubavu->Rubavu->Karukogo',
      link: 'https://www.google.com/maps/place/KARUKOGO-Gisenyi/@-1.6589299,29.2745332,3a,90y,243.56h,75.1t/data=!3m7!1e1!3m5!1sFs5ne7XS901BXZTAzh-_pg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.903064075494143%26panoid%3DFs5ne7XS901BXZTAzh-_pg%26yaw%3D243.56365207009583!7i16384!8i8192!4m14!1m7!3m6!1s0x19dd07e09f544a85:0xa25ffde906649d6!2sKARUKOGO-Gisenyi!8m2!3d-1.6603577!4d29.2708869!16s%2Fg%2F11sbh_mqv2!3m5!1s0x19dd07e09f544a85:0xa25ffde906649d6!8m2!3d-1.6603577!4d29.2708869!16s%2Fg%2F11sbh_mqv2?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    // <RisingCard>
    <div className="pt-24 pb-16">
      <motion.h1
        className="section-header relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
        <div className="absolute -bottom-2 left-0 w-1/4 h-1 bg-gradient-to-r from-primary to-transparent"></div>
      </motion.h1>

      <motion.p
        className="mb-12 max-w-3xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        Feel free to reach out through any of the methods below.
      </motion.p>

      <div className="grid gap-10 md:grid-cols-3 mb-16">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          >
            <TiltCard>
              <a
                href={info.link}
                target={info.title === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card h-full flex flex-col items-center text-center p-8"
              >
                <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <p className="text-gray-300">{info.content}</p>
              </a>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TiltCard>
            <div className="rounded-2xl shadow-2xl bg-dark-secondary bg-opacity-50 border border-white/5 overflow-hidden p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

              {submitted ? (
                <motion.div
                  className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageSquare className="h-5 w-5 text-green-500 mr-3" />
                  <p className="text-green-400">Your message has been sent successfully! I will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-tertiary bg-opacity-30 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-tertiary bg-opacity-30 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-tertiary bg-opacity-30 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-dark-tertiary bg-opacity-30 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Hello Patrick, I would like to discuss a project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-8">
            <TiltCard>
              <div className="bg-dark-secondary bg-opacity-50 rounded-xl border border-white/5 p-8">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
                    <p className="text-gray-300">
                      I specialize in full-stack web development, mobile app development,
                      UI/UX design, and backend services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What is your typical project timeline?</h3>
                    <p className="text-gray-300">
                      Project timelines vary depending on scope and complexity.
                      Simple websites might take 2-3 weeks, while complex applications
                      could take several months.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Do you offer maintenance services?</h3>
                    <p className="text-gray-300">
                      Yes, I offer ongoing maintenance and support services to ensure
                      your application stays up-to-date and secure.
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="bg-dark-secondary bg-opacity-50 rounded-xl border border-white/5 p-8">
                <h2 className="text-2xl font-bold mb-6">Working Hours</h2>
                <div className="flex items-start space-x-4 mb-6">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">My Schedule</h3>
                    <p className="text-gray-300">I typically respond within 24 hours. Here's my availability:</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-medium">By appointment</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </div>
  
  );
};

export default Contact;
