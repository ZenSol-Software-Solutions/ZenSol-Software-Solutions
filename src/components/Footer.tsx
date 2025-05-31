
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Services", href: "#services" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" }
  ];

  const courses = [
    { name: "Frontend Development", href: "#" },
    { name: "Backend Development", href: "#" },
    { name: "MERN Stack", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Python Programming", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                ZenSol
              </h3>
              <p className="text-gray-300 text-sm">Software Solutions</p>
              <p className="text-gray-400 text-sm mt-2">
                Smart Products. Seamless Services. The Zen Way
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-green-400" />
                <span className="text-sm">zensol.softwaresolutions@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                <span className="text-sm">Bangalore, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a 
                    href={course.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
            
            <div>
              <h5 className="text-sm font-medium mb-3">Newsletter</h5>
              <p className="text-gray-400 text-xs mb-3">
                Subscribe to get updates on new courses and opportunities
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-r-md hover:from-green-600 hover:to-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 ZenSol Software Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
