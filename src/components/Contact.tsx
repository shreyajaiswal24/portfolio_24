"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "jaiswalshreya2426@gmail.com",
    href: "mailto:jaiswalshreya2426@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91-6392494989",
    href: "tel:+916392494989",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Ghaziabad, Uttar Pradesh",
    href: null,
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/shreyajaiswal24",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/shreya-jaiswal",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/shreyajaiswal",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="section-heading">Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass-card rounded-xl p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-gray-300 hover:text-indigo-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-6 flex flex-col justify-center"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Let&apos;s build something together
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              I&apos;m open to AI engineering roles, freelance projects, and
              collaborations. Feel free to reach out!
            </p>

            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>

            <a
              href="mailto:jaiswalshreya2426@gmail.com"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25 text-center"
            >
              Send me an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
