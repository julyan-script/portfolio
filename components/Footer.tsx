"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#section-1" },
    { label: "Project", href: "#project" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "https://wa.me/6283137483233" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/julyan-script", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/dimas-javas", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:julyan300705@gmail.com", label: "Email" },
  ];

  return (
    <footer className="w-screen bg-stone-900 text-stone-100 pt-20 pb-10">
      {/* Top divider */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-stone-700 to-transparent mb-16"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-20 mb-16">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h3 className="helvetica text-lg md:text-2xl font-bold text-white tracking-tight">
              julyan<span className="text-amber-600">Script</span>
            </h3>
            <p className="text-stone-400 text-xs md:text-sm helvetica leading-relaxed">
              Crafting digital experiences with vintage aesthetics and modern technology.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h4 className="helvetica font-bold text-white uppercase text-xs md:text-sm tracking-wider">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 text-xs md:text-sm helvetica hover:text-amber-500 transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 className="helvetica font-bold text-white uppercase text-xs md:text-sm tracking-wider">
              Explore
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 text-xs md:text-sm helvetica hover:text-amber-500 transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h4 className="helvetica font-bold text-white uppercase text-xs md:text-sm tracking-wider">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:julyan300705@gmail.com"
                className="text-stone-400 text-xs md:text-sm helvetica hover:text-amber-500 transition-colors duration-300 break-words"
              >
                julyan300705@gmail.com
              </a>
              <p className="text-stone-500 text-xs helvetica">
                Available for freelance & full-time opportunities
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 md:gap-6 mb-16 justify-center md:justify-start flex-wrap"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-stone-400 hover:text-amber-500 transition-colors duration-300"
                aria-label={social.label}
              >
                <Icon size={20} className="md:w-6 md:h-6" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-stone-700 to-transparent mb-8"></div>

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-stone-500 text-xs helvetica"
        >
          <div className="text-center md:text-left">
            <p>© {currentYear} Julyan. All rights reserved.</p>
            <p className="text-stone-600 mt-1">
              Designed & Developed by Julyan
            </p>
          </div>
          <div className="flex gap-3 md:gap-6 text-center md:text-right flex-wrap justify-center md:justify-end">
            <Link href="#" className="hover:text-amber-500 transition-colors duration-300 text-xs md:text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-amber-500 transition-colors duration-300 text-xs md:text-sm">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative vintage elements - hide on mobile */}
      <div className="hidden md:block fixed bottom-0 right-0 opacity-10 pointer-events-none text-5xl md:text-9xl font-bold helvetica text-stone-700">
        {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
