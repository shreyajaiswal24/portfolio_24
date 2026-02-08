"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiLangchain,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiTailwindcss,
  SiPostman,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";
import { TbBrain, TbDatabase, TbRobot, TbWaveSine } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { IconType } from "react-icons";

interface SkillCategory {
  title: string;
  icon: IconType;
  color: string;
  skills: { name: string; icon?: IconType }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: SiJavascript,
    color: "from-yellow-500/20 to-yellow-600/5",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "C/C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "GenAI & LLMs",
    icon: TbBrain,
    color: "from-purple-500/20 to-purple-600/5",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph" },
      { name: "RAG", icon: TbBrain },
      { name: "Fine-tuning", icon: BsStars },
      { name: "CrewAI", icon: TbRobot },
      { name: "AI Voice Agents", icon: TbWaveSine },
      { name: "Vapi" },
      { name: "ElevenLabs" },
      { name: "LiveKit" },
    ],
  },
  {
    title: "Frameworks & Frontend",
    icon: FaReact,
    color: "from-cyan-500/20 to-cyan-600/5",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: FaHtml5 },
    ],
  },
  {
    title: "Vector Databases",
    icon: TbDatabase,
    color: "from-green-500/20 to-green-600/5",
    skills: [
      { name: "Pinecone", icon: TbDatabase },
      { name: "FAISS", icon: TbDatabase },
      { name: "ChromaDB", icon: TbDatabase },
    ],
  },
  {
    title: "Automation & Tools",
    icon: TbRobot,
    color: "from-orange-500/20 to-orange-600/5",
    skills: [
      { name: "n8n" },
      { name: "Retell AI" },
      { name: "Firecrawl" },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "Gradio" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="section-heading">Technical Skills</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="text-lg text-indigo-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-badge flex items-center gap-1.5 cursor-default"
                  >
                    {skill.icon && <skill.icon className="text-xs" />}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
