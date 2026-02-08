"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="section-heading">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gradient-border p-8 rounded-2xl"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-2xl text-indigo-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-xl font-bold text-white">
                  ABES Engineering College
                </h3>
                <span className="text-sm text-gray-500 font-mono">
                  2022 - 2026
                </span>
              </div>
              <p className="text-indigo-400 font-medium mt-1">
                B.Tech - Computer Engineering
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Ghaziabad, Uttar Pradesh
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <span className="text-indigo-300 text-sm font-medium">
                  CGPA:
                </span>
                <span className="text-white font-bold text-lg">8.2</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
