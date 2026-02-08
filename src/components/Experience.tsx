"use client";

import { motion } from "framer-motion";
import { BsBriefcaseFill } from "react-icons/bs";

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Hodos360.AI",
    role: "AI Automation Engineer",
    type: "Full-time",
    period: "Oct 2025 - Present",
    highlights: [
      "Built and deployed AI automation workflows using n8n, LangChain, and RAG to support lead handling and automated communication workflows.",
      "Developed low-latency voice AI agents using LiveKit and Retell AI for real-time conversational use cases such as sales calls and appointment booking.",
      "Worked extensively with Langfuse for LLM observability, including prompt versioning, trace inspection, latency analysis, and cost monitoring.",
    ],
    techStack: ["LangChain", "RAG", "LiveKit", "Retell AI", "Langfuse"],
  },
  {
    company: "Sixty Motion",
    role: "Full Stack Developer",
    type: "Hybrid",
    period: "June 2025 - Sept 2025",
    highlights: [
      "Designed and implemented RESTful APIs with JWT-based authentication, enabling secure token-based sessions and role-based access.",
      "Developed a robust Django backend using MVT architecture, integrating third-party APIs and writing automated tests.",
      "Implemented end-to-end CRUD functionality with optimized database queries and a responsive React.js frontend.",
    ],
    techStack: ["Django", "React.js", "REST APIs", "JWT", "PostgreSQL"],
  },
  {
    company: "AI Revo Labs",
    role: "AI Developer Intern",
    type: "Remote",
    period: "Feb 2024 - March 2025",
    highlights: [
      "Developed an AI Interview Agent using Python, LangChain, n8n, Gemini CLI, and Claude to automate interview workflows.",
      "Built and optimized RAG pipelines by integrating LLMs with LangChain for context-aware search and reasoning.",
      "Designed and implemented RESTful APIs using Flask for backend inference, retrieval logic, and real-time request handling.",
    ],
    techStack: ["Python", "LangChain", "Flask", "n8n", "Gemini", "Claude"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            Where I&apos;ve worked
          </p>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[17px] md:left-[23px] top-6 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#0a0a0f] z-10 shadow-lg shadow-indigo-500/50" />

                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-indigo-400 font-medium">
                        {exp.role}{" "}
                        <span className="text-gray-500 text-sm">
                          ({exp.type})
                        </span>
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-indigo-500 mt-1.5 flex-shrink-0">
                          &#9656;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
