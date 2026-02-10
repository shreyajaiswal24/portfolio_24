"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TbBrain, TbHeart, TbCoin, TbFileText } from "react-icons/tb";
import { IconType } from "react-icons";

interface Project {
  title: string;
  icon: IconType;
  description: string;
  highlights: string[];
  techStack: string[];
  github?: string;
  live?: string;
  date: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Ultra Doc-Intelligence",
    icon: TbFileText,
    description:
      "AI-powered document intelligence system that answers questions about logistics documents and extracts structured shipment data using RAG with confidence scoring and source attribution.",
    highlights: [
      "Natural language Q&A over PDF, DOCX, and TXT documents with transparency metrics",
      "RAG pipeline using ChromaDB + Sentence Transformers for semantic retrieval",
      "Confidence scoring with weighted retrieval quality, chunk agreement, and groundedness",
      "Automated extraction of 15 logistics-specific fields including BOL numbers and carrier info",
    ],
    techStack: [
      "Streamlit",
      "ChromaDB",
      "Sentence Transformers",
      "Mistral AI",
      "LangChain",
      "PyMuPDF",
    ],
    github: "https://github.com/shreyajaiswal24/Ultra-Doc-Intelligence",
    live: "https://ultra-doc-intelligence-6s5ttojjymkhjbvucvhsdx.streamlit.app/",
    date: "2025",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "MockPrep AI",
    icon: TbBrain,
    description:
      "AI-powered interview practice platform where users record video responses and receive instant AI-generated feedback with scoring, emotional analysis, and behavioral insights.",
    highlights: [
      "Behavioral, Technical, and Mixed interview types with timed video recording",
      "Instant scoring out of 100 with sub-scores for communication, relevance, structure, and confidence",
      "Real-time facial emotion detection tracking 7 emotional states via face-api.js",
      "Recruiter tools to create custom interviews, share links, and review candidate responses",
    ],
    techStack: [
      "Next.js 14",
      "Django",
      "Groq API",
      "face-api.js",
      "TypeScript",
      "PostgreSQL",
    ],
    github: "https://github.com/shreyajaiswal24/MockPrep_AI",
    live: "https://mockprep-frontend-vuw8.onrender.com/",
    date: "2025",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "AI Loan Recommendation System",
    icon: TbCoin,
    description:
      "AI-powered system that analyzes bank documents and delivers personalized mortgage recommendations in under 3 seconds using RAG-based document intelligence.",
    highlights: [
      "RAG-based document intelligence using LangChain and ChromaDB",
      "Multi-stage AI pipeline for eligibility validation and risk checks",
      "Confidence scoring for extracted and ranked loan products",
    ],
    techStack: ["FastAPI", "LangChain", "ChromaDB", "LLMs", "RAG"],
    github: "https://github.com/shreyajaiswal24/AI-Loan-Recommender",
    live: "https://ai-loan-recommender-6.onrender.com/",
    date: "June 2025",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Mental Health Emotion-Aware AI",
    icon: TbHeart,
    description:
      "Emotion-aware mental health support system with text and real-time voice interaction, enabling empathetic and personalized AI-driven conversations.",
    highlights: [
      "Text-to-Speech (TTS) and Vapi for seamless live voice sessions",
      "Gemini API for intelligent empathetic response generation",
      "Firebase for authentication, session storage, and analytics",
    ],
    techStack: [
      "Python",
      "Text-to-Speech",
      "Vapi",
      "Gemini API",
      "Firebase",
    ],
    live: "https://final-year-project-mental-health.vercel.app/",
    date: "May 2025",
    gradient: "from-pink-500 to-rose-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="section-heading">Featured Projects</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-80`}
                    >
                      <project.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-mono">
                        {project.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-500 text-sm flex gap-2"
                    >
                      <span className="text-indigo-500 mt-0.5 flex-shrink-0">
                        &#9656;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
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
        </motion.div>
      </div>
    </section>
  );
}
