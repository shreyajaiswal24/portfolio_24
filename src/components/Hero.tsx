"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Shreya Jaiswal
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl text-gray-400 mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            AI Automation Engineer &{" "}
            <span className="text-purple-400">Full Stack Developer</span>
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-lg mb-8 leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Building intelligent AI systems with LangChain, RAG pipelines, and
            voice AI agents. Passionate about leveraging LLMs to create
            production-ready automation solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-500/30 hover:border-indigo-500/60 rounded-xl text-indigo-300 text-sm font-medium transition-all hover:bg-indigo-500/10"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-5 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            {[
              { icon: FaGithub, href: "https://github.com/shreyajaiswal24", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/shreya-jaiswal", label: "LinkedIn" },
              { icon: SiLeetcode, href: "https://leetcode.com/shreyajaiswal", label: "LeetCode" },
              { icon: FaEnvelope, href: "mailto:jaiswalshreya2426@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-400 text-xl transition-all hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Rotating ring */}
            <motion.div
              className="absolute -inset-3 rounded-full border-2 border-dashed border-indigo-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-6 rounded-full border border-purple-500/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden profile-glow border-2 border-indigo-500/40 relative z-10">
              <Image
                src="/shreya.jpg"
                alt="Shreya Jaiswal"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 z-20 w-5 h-5 bg-green-500 rounded-full border-2 border-[#0a0a0f] animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-indigo-500/30 flex justify-center">
          <div className="w-1.5 h-3 bg-indigo-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
