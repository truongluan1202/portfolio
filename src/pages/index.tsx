import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Database,
  BarChart3,
  Brain,
  Sparkles,
  Download,
  ExternalLink,
  Menu,
  X,
  Code,
  Server,
  Cpu,
} from "lucide-react";
import LoadingScreen from "~/components/LoadingScreen";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Luan Tran - Data Engineer & Analytics Expert</title>
        <meta
          name="description"
          content="Data Engineer with a passion for AI, machine learning, and analytics. Building the future of data-driven solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Content - Only show after loading */}
      {!isLoading && (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Floating data visualization elements */}
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {i % 4 === 0 && (
                  <Database className="h-6 w-6 text-purple-400" />
                )}
                {i % 4 === 1 && <BarChart3 className="h-6 w-6 text-blue-400" />}
                {i % 4 === 2 && <Brain className="h-6 w-6 text-pink-400" />}
                {i % 4 === 3 && <Sparkles className="h-6 w-6 text-cyan-400" />}
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <nav className="fixed top-0 z-50 w-full p-6">
            <motion.div
              className="mx-auto flex max-w-7xl items-center justify-between"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-2xl font-bold text-white">
                <Code className="h-8 w-8 text-purple-400" />
                Luan Tran
              </div>
              <div className="hidden gap-8 md:flex">
                {["About", "Experience", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
              <button
                className="glass-icon-button md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="glass-card mt-4 p-4 md:hidden"
                >
                  <div className="flex flex-col gap-4">
                    {[
                      "About",
                      "Experience",
                      "Projects",
                      "Skills",
                      "Contact",
                    ].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="py-2 text-white/80 transition-colors duration-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Main Content Layout */}
          <div className="px-8 pt-24">
            <div className="mx-auto max-w-7xl">
              {/* Hero Section - Split into two sides */}
              <section id="about" className="mb-20">
                <div className="grid gap-12 lg:grid-cols-3">
                  {/* Left Side - Profile Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 lg:mt-8"
                  >
                    <div className="glass-card p-6 text-center">
                      <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
                        <Image
                          src="/avatar.png"
                          alt="Luan Tran - Data Engineer"
                          width={192}
                          height={192}
                          className="h-full w-full object-cover object-center"
                          priority
                        />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white">
                        Data Engineer & Cat Enthusiast
                      </h3>
                      <div className="space-y-2 text-sm text-white/80">
                        <div className="flex items-center justify-center gap-2">
                          <MapPin className="h-4 w-4 text-purple-400" />
                          Sydney, NSW, Australia
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="h-4 w-4 text-purple-400" />
                          tdtruongluan1202@gmail.com
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4 text-purple-400" />
                          +61 423 538 968
                        </div>
                      </div>
                      <div className="mt-4 flex justify-center gap-3">
                        <motion.a
                          href="https://linkedin.com/in/louistran1202"
                          target="_blank"
                          className="glass-icon-button"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Linkedin className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                          href="https://github.com/truongluan1202"
                          target="_blank"
                          className="glass-icon-button"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                      </div>
                      <div className="mt-6 flex gap-3">
                        <motion.a
                          href="#contact"
                          className="glass-button-primary text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Get In Touch
                        </motion.a>
                        <motion.a
                          href="/resume.pdf"
                          className="glass-button-secondary text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="h-4 w-4" />
                          Download CV
                        </motion.a>
                      </div>
                    </div>

                    {/* Skills Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="mb-4 text-2xl font-bold text-white">
                          Skills
                        </h2>
                        <p className="mb-6 text-sm text-white/80">
                          A comprehensive toolkit for building data-driven
                          solutions
                        </p>
                      </div>

                      {/* First Row - Data Engineering & Analytics */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Data Engineering - Horizontal Bars */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="glass-card p-5"
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <Server className="h-5 w-5 text-blue-400" />
                            <h3 className="text-lg font-bold text-white">
                              Data Engineering
                            </h3>
                          </div>
                          <div className="space-y-3">
                            {[
                              { skill: "Python", level: 95 },
                              { skill: "SQL", level: 90 },
                              { skill: "Airflow", level: 85 },
                              { skill: "Snowflake", level: 80 },
                            ].map((item, index) => (
                              <div key={index}>
                                <div className="mb-1 flex justify-between text-sm">
                                  <span className="text-white/80">
                                    {item.skill}
                                  </span>
                                  <span className="text-white/60">
                                    {item.level}%
                                  </span>
                                </div>
                                <div className="glass-progress">
                                  <motion.div
                                    className="glass-progress-fill bg-gradient-to-r from-blue-400 to-blue-600"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.level}%` }}
                                    transition={{
                                      duration: 1,
                                      delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Analytics & Visualization - Line Graph */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="glass-card p-5"
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <BarChart3 className="h-5 w-5 text-green-400" />
                            <h3 className="text-lg font-bold text-white">
                              Analytics & Visualization
                            </h3>
                          </div>
                          <div className="relative h-32">
                            <svg
                              className="h-full w-full"
                              viewBox="0 0 200 120"
                            >
                              {/* Grid lines */}
                              <defs>
                                <pattern
                                  id="grid"
                                  width="20"
                                  height="20"
                                  patternUnits="userSpaceOnUse"
                                >
                                  <path
                                    d="M 20 0 L 0 0 0 20"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="0.5"
                                  />
                                </pattern>
                              </defs>
                              <rect
                                width="200"
                                height="120"
                                fill="url(#grid)"
                              />

                              {/* Line graph for Analytics skills */}
                              <motion.polyline
                                fill="none"
                                stroke="url(#analyticsGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                points="20,100 60,60 100,40 140,30 180,20"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.5 }}
                                viewport={{ once: true }}
                              />

                              {/* Data points with labels */}
                              {[
                                {
                                  x: 20,
                                  y: 100,
                                  skill: "Databricks",
                                  level: 75,
                                  textAnchor: "start",
                                },
                                {
                                  x: 60,
                                  y: 60,
                                  skill: "R",
                                  level: 80,
                                  textAnchor: "middle",
                                },
                                {
                                  x: 100,
                                  y: 40,
                                  skill: "Tableau",
                                  level: 85,
                                  textAnchor: "middle",
                                },
                                {
                                  x: 140,
                                  y: 30,
                                  skill: "Matplotlib",
                                  level: 90,
                                  textAnchor: "middle",
                                },
                                {
                                  x: 180,
                                  y: 20,
                                  skill: "Power BI",
                                  level: 95,
                                  textAnchor: "end",
                                },
                              ].map((point, index) => (
                                <g key={index}>
                                  <motion.circle
                                    cx={point.x}
                                    cy={point.y}
                                    r="4"
                                    fill="#10b981"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      delay: 1 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  />
                                  <motion.text
                                    x={point.x}
                                    y={
                                      index % 2 === 0
                                        ? point.y + 30
                                        : point.y - 25
                                    }
                                    textAnchor={point.textAnchor}
                                    className="fill-white/80 text-xs"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      delay: 1.5 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    {point.skill}
                                  </motion.text>
                                  <motion.text
                                    x={point.x}
                                    y={
                                      index % 2 === 0
                                        ? point.y + 45
                                        : point.y - 10
                                    }
                                    textAnchor={point.textAnchor}
                                    className="fill-green-400 text-xs"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      delay: 1.5 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    {point.level}%
                                  </motion.text>
                                </g>
                              ))}

                              {/* Gradient definition */}
                              <defs>
                                <linearGradient
                                  id="analyticsGradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="0%"
                                >
                                  <stop offset="0%" stopColor="#10b981" />
                                  <stop offset="100%" stopColor="#34d399" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </motion.div>
                      </div>

                      {/* Second Row - AI & Machine Learning - Radar Chart */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card p-5"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <Cpu className="h-5 w-5 text-purple-400" />
                          <h3 className="text-lg font-bold text-white">
                            AI & Machine Learning
                          </h3>
                        </div>
                        <div className="m-0 flex items-center justify-center">
                          <div className="relative m-0 h-70 w-96">
                            <svg
                              className="h-full w-full"
                              viewBox="0 0 240 240"
                            >
                              {/* Radar chart background */}
                              <defs>
                                <radialGradient
                                  id="radarGradient"
                                  cx="50%"
                                  cy="50%"
                                  r="50%"
                                >
                                  <stop
                                    offset="0%"
                                    stopColor="rgba(168, 85, 247, 0.1)"
                                  />
                                  <stop
                                    offset="100%"
                                    stopColor="rgba(168, 85, 247, 0.3)"
                                  />
                                </radialGradient>
                              </defs>

                              {/* Grid circles */}
                              {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, index) => (
                                <circle
                                  key={index}
                                  cx="120"
                                  cy="120"
                                  r={80 * scale}
                                  fill="none"
                                  stroke="rgba(255,255,255,0.1)"
                                  strokeWidth="1"
                                />
                              ))}

                              {/* Grid lines */}
                              {[0, 60, 120, 180, 240, 300].map(
                                (angle, index) => (
                                  <line
                                    key={index}
                                    x1="120"
                                    y1="120"
                                    x2={
                                      120 +
                                      80 * Math.cos((angle * Math.PI) / 180)
                                    }
                                    y2={
                                      120 +
                                      80 * Math.sin((angle * Math.PI) / 180)
                                    }
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="1"
                                  />
                                ),
                              )}

                              {/* Radar chart data */}
                              <motion.polygon
                                fill="url(#radarGradient)"
                                stroke="#a855f7"
                                strokeWidth="2"
                                points="120,40 180,80 160,160 80,160 60,80"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, delay: 0.5 }}
                                viewport={{ once: true }}
                              />

                              {/* Data points */}
                              {[
                                {
                                  x: 120,
                                  y: 40,
                                  skill: "Scikit-learn",
                                  level: 90,
                                  labelX: 120,
                                  labelY: 20,
                                },
                                {
                                  x: 180,
                                  y: 80,
                                  skill: "PyTorch",
                                  level: 80,
                                  labelX: 210,
                                  labelY: 80,
                                },
                                {
                                  x: 160,
                                  y: 160,
                                  skill: "Langchain",
                                  level: 75,
                                  labelX: 175,
                                  labelY: 190,
                                },
                                {
                                  x: 80,
                                  y: 160,
                                  skill: "Hugging Face",
                                  level: 70,
                                  labelX: 50,
                                  labelY: 190,
                                },
                                {
                                  x: 60,
                                  y: 80,
                                  skill: "MLflow",
                                  level: 65,
                                  labelX: 30,
                                  labelY: 80,
                                },
                              ].map((point, index) => (
                                <g key={index}>
                                  <motion.circle
                                    cx={point.x}
                                    cy={point.y}
                                    r="4"
                                    fill="#a855f7"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      delay: 1 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  />
                                  <motion.text
                                    x={point.labelX}
                                    y={point.labelY}
                                    textAnchor="middle"
                                    className="fill-white/80 text-xs"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      delay: 1.5 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    {point.skill === "Scikit-learn"
                                      ? "Sklearn"
                                      : point.skill === "Hugging Face"
                                        ? "Hugging Face"
                                        : point.skill}
                                  </motion.text>
                                  <motion.text
                                    x={point.labelX}
                                    y={point.labelY + 13}
                                    textAnchor="middle"
                                    className="fill-purple-400 text-xs"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      delay: 1.5 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    {point.level}%
                                  </motion.text>
                                </g>
                              ))}
                            </svg>

                            {/* Skill labels around radar */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="mb-2 text-sm font-semibold text-white">
                                  AI & ML
                                </div>
                                <div className="text-xs text-white/60">
                                  Proficiency Levels
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="mb-4 text-2xl font-bold text-white">
                          Certifications
                        </h2>
                        <p className="mb-6 text-sm text-white/80">
                          Professional certifications and achievements
                        </p>
                      </div>

                      <div className="space-y-3">
                        {[
                          "Databricks Lakehouse Fundamentals",
                          "AWS Certified Cloud Practitioner",
                          "Power BI Data Analyst Associate",
                          "SQL (Advanced) - HackerRank",
                          "Data Engineer Certificate - DataCamp",
                          "Top 100 Shopee Code League Finals (2022)",
                        ].map((cert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-badge p-3 text-center text-sm"
                          >
                            {cert}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right Side - Hero Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8 lg:col-span-2 lg:mt-8 lg:ml-8"
                  >
                    <div className="">
                      <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Luan
                        </span>
                      </h1>
                      <p className="mb-8 text-lg leading-relaxed text-white/80">
                        A passionate{" "}
                        <span className="font-semibold text-purple-400">
                          Data Engineer
                        </span>{" "}
                        who loves turning complex data into beautiful insights.
                        When I&apos;m not building data pipelines, you&apos;ll
                        find me analyzing trends and exploring the latest in AI
                        and machine learning.
                      </p>
                      <div className="mb-8 flex flex-wrap gap-3">
                        <div className="glass-badge">
                          <Database className="h-5 w-5" />
                          Data Engineering
                        </div>
                        <div className="glass-badge">
                          <Brain className="h-5 w-5" />
                          AI/ML
                        </div>
                        <div className="glass-badge">
                          <BarChart3 className="h-5 w-5" />
                          Analytics
                        </div>
                      </div>
                    </div>

                    {/* Experience Section */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-6"
                      >
                        <h2 className="mb-2 text-2xl font-bold text-white">
                          Experience
                        </h2>
                        <p className="text-sm text-white/80">
                          Building innovative solutions at the intersection of
                          data, AI, and mental health
                        </p>
                      </motion.div>

                      <div className="space-y-4">
                        {/* CapstoneBara */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="glass-card p-4"
                        >
                          <div className="mb-3 flex items-start justify-between">
                            <div>
                              <h3 className="mb-1 text-lg font-bold text-white">
                                Co-Founder
                              </h3>
                              <p className="text-sm text-purple-400">
                                CapstoneBara
                              </p>
                              <p className="text-xs text-white/60">
                                08/2024 - Present
                              </p>
                            </div>
                            <div className="text-2xl">🏥</div>
                          </div>
                          <p className="mb-3 text-sm text-white/80">
                            Developed a digital platform for mental well-being
                            and health management, integrating AI assistant
                            (Bara) for emotional support & advice, health
                            dashboard, appointment tools, and doctor snapshot.
                          </p>
                          <div className="mb-2 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">
                              AI Assistant
                            </span>
                            <span className="glass-tag text-xs">
                              Health Dashboard
                            </span>
                            <span className="glass-tag text-xs">
                              Mental Health
                            </span>
                          </div>
                          <div className="glass-highlight text-xs">
                            <Sparkles className="h-3 w-3 text-yellow-400" />
                            <span>
                              Launched a unified platform improving access to
                              mental health resources and proactive care
                            </span>
                          </div>
                        </motion.div>

                        {/* Skwill AI */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="glass-card p-4"
                        >
                          <div className="mb-3 flex items-start justify-between">
                            <div>
                              <h3 className="mb-1 text-lg font-bold text-white">
                                Data Science Intern
                              </h3>
                              <p className="text-sm text-purple-400">
                                Skwill AI
                              </p>
                              <p className="text-xs text-white/60">
                                05/2024 - 03/2025
                              </p>
                            </div>
                            <div className="text-2xl">🤖</div>
                          </div>
                          <p className="mb-3 text-sm text-white/80">
                            Led team to add GPT-4o feature for sales coaching &
                            info retrieval. Analyzed user logs with Pandas/SQL,
                            built data-quality scripts, and developed Power BI
                            dashboards.
                          </p>
                          <div className="mb-2 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">Python</span>
                            <span className="glass-tag text-xs">SQL</span>
                            <span className="glass-tag text-xs">Power BI</span>
                            <span className="glass-tag text-xs">Airflow</span>
                          </div>
                          <div className="grid gap-2 md:grid-cols-3">
                            <div className="glass-stat">
                              <div className="text-lg font-bold text-green-400">
                                15%
                              </div>
                              <div className="text-xs text-white/60">
                                Satisfaction Boost
                              </div>
                            </div>
                            <div className="glass-stat">
                              <div className="text-lg font-bold text-blue-400">
                                20%
                              </div>
                              <div className="text-xs text-white/60">
                                Error Reduction
                              </div>
                            </div>
                            <div className="glass-stat">
                              <div className="text-lg font-bold text-purple-400">
                                12%
                              </div>
                              <div className="text-xs text-white/60">
                                Accuracy Improvement
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Research Assistant */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="glass-card p-4"
                        >
                          <div className="mb-3 flex items-start justify-between">
                            <div>
                              <h3 className="mb-1 text-lg font-bold text-white">
                                Research Assistant – Data Analyst
                              </h3>
                              <p className="text-sm text-purple-400">
                                S P Jain School of Global Management
                              </p>
                              <p className="text-xs text-white/60">
                                01/2025 - 05/2025
                              </p>
                            </div>
                            <div className="text-2xl">🔬</div>
                          </div>
                          <p className="mb-3 text-sm text-white/80">
                            Supported Prof. Zaidan in developing ML models for
                            fall-risk classification detection in older adults.
                            Preprocessed sensor data, conducted EDA & feature
                            selection, and applied SHAP for interpretability.
                          </p>
                          <div className="mb-2 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">
                              Machine Learning
                            </span>
                            <span className="glass-tag text-xs">SHAP</span>
                            <span className="glass-tag text-xs">
                              Feature Selection
                            </span>
                          </div>
                          <div className="glass-highlight text-xs">
                            <BarChart3 className="h-3 w-3 text-green-400" />
                            <span>
                              Boosted model accuracy 15% through iterative
                              tuning
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Projects Section */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-6"
                      >
                        <h2 className="mb-2 text-2xl font-bold text-white">
                          Projects
                        </h2>
                        <p className="text-sm text-white/80">
                          From AI digit recognition to sports analytics -
                          exploring the endless possibilities of data
                        </p>
                      </motion.div>

                      <div className="grid gap-4 md:grid-cols-2">
                        {/* AI-Powered Calendar Assistant */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="glass-card group p-4 transition-transform duration-300 hover:scale-105"
                        >
                          <div className="mb-2 text-2xl">📅</div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            AI-Powered Calendar Assistant
                          </h3>
                          <p className="mb-3 text-sm text-white/80">
                            Developed a full-stack conversational assistant
                            enabling natural-language scheduling and event
                            queries with Google Calendar integration and web
                            search capabilities.
                          </p>
                          <div className="mb-3 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">FastAPI</span>
                            <span className="glass-tag text-xs">Next.js</span>
                            <span className="glass-tag text-xs">
                              PostgreSQL
                            </span>
                            <span className="glass-tag text-xs">
                              Google Calendar API
                            </span>
                            <span className="glass-tag text-xs">
                              Web Search
                            </span>
                          </div>
                          <a
                            href="https://ai-powered-calendar-assistant.vercel.app/"
                            target="_blank"
                            className="glass-button-small text-xs"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Live Demo
                          </a>
                        </motion.div>

                        {/* Airtable Clone */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="glass-card group p-4 transition-transform duration-300 hover:scale-105"
                        >
                          <div className="mb-2 text-2xl">📊</div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            Airtable Clone
                          </h3>
                          <p className="mb-3 text-sm text-white/80">
                            Built a production-grade Airtable-style grid with
                            virtualized infinite scroll, supporting 100k+ rows
                            with dynamic columns, filtering, and real-time
                            collaboration.
                          </p>
                          <div className="mb-3 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">Next.js</span>
                            <span className="glass-tag text-xs">TRPC</span>
                            <span className="glass-tag text-xs">
                              TanStack Table
                            </span>
                            <span className="glass-tag text-xs">
                              PostgreSQL
                            </span>
                            <span className="glass-tag text-xs">Prisma</span>
                          </div>
                          <a
                            href="https://airtable-clone-eta.vercel.app/"
                            target="_blank"
                            className="glass-button-small text-xs"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Live Demo
                          </a>
                        </motion.div>

                        {/* AI Digit Recognition */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="glass-card group p-4 transition-transform duration-300 hover:scale-105"
                        >
                          <div className="mb-2 text-2xl">🔢</div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            AI Digit Recognition
                          </h3>
                          <p className="mb-3 text-sm text-white/80">
                            Created an AI tool for digit recognition using CNN
                            trained on MNIST dataset with 95% accuracy.
                          </p>
                          <div className="mb-3 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">CNN</span>
                            <span className="glass-tag text-xs">C++</span>
                            <span className="glass-tag text-xs">
                              JavaScript
                            </span>
                          </div>
                          <a
                            href="https://truongluan1202.github.io/AI-Digit-Recognition-Application/"
                            target="_blank"
                            className="glass-button-small text-xs"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Live Demo
                          </a>
                        </motion.div>

                        {/* University Enrollment System */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="glass-card group p-4 transition-transform duration-300 hover:scale-105"
                        >
                          <div className="mb-2 text-2xl">🎓</div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            University Enrollment System
                          </h3>
                          <p className="mb-3 text-sm text-white/80">
                            Designed a relational database with procedures,
                            views, triggers to manage enrollments & capacity.
                          </p>
                          <div className="mb-3 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">
                              PostgreSQL
                            </span>
                            <span className="glass-tag text-xs">Python</span>
                            <span className="glass-tag text-xs">
                              Database Design
                            </span>
                          </div>
                          <a
                            href="https://github.com/truongluan1202/NoSQL_University-Enrollment-System-.git"
                            target="_blank"
                            className="glass-button-small text-xs"
                          >
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        </motion.div>

                        {/* Sports Analytics */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="glass-card group p-4 transition-transform duration-300 hover:scale-105"
                        >
                          <div className="mb-2 text-2xl">⚽</div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            Sports Analytics Database
                          </h3>
                          <p className="mb-3 text-sm text-white/80">
                            Built NoSQL database for 6 European leagues with 5
                            interconnected collections and 1,900+ shot events.
                          </p>
                          <div className="mb-3 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">MongoDB</span>
                            <span className="glass-tag text-xs">Python</span>
                            <span className="glass-tag text-xs">ETL</span>
                          </div>
                          <a
                            href="https://github.com/truongluan1202/Sports-Analytics-NoSQL-Database.git"
                            target="_blank"
                            className="glass-button-small text-xs"
                          >
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        </motion.div>

                        {/* Energy Usage Prediction */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="glass-card group p-4 transition-transform duration-300 hover:scale-105"
                        >
                          <div className="mb-2 text-2xl">⚡</div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            Energy Usage Prediction
                          </h3>
                          <p className="mb-3 text-sm text-white/80">
                            Built ML pipeline for steel industry energy usage,
                            achieving MSE 5.5 with RandomForest.
                          </p>
                          <div className="mb-3 flex flex-wrap gap-1">
                            <span className="glass-tag text-xs">
                              Scikit-learn
                            </span>
                            <span className="glass-tag text-xs">Python</span>
                            <span className="glass-tag text-xs">
                              RandomForest
                            </span>
                          </div>
                          <a
                            href="https://github.com/truongluan1202/ML-Energy-Usage-Prediction-of-Steel-Industry.git"
                            target="_blank"
                            className="glass-button-small text-xs"
                          >
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>

          {/* Contact Section */}
          <section id="contact" className="px-6 py-20">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <h2 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                  Let&apos;s Connect
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-white/80">
                  Ready to turn data into insights? Let&apos;s build something
                  amazing together! 🐱
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-6 text-2xl font-bold text-white">
                      Get In Touch
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-purple-400" />
                        <a
                          href="mailto:tdtruongluan1202@gmail.com"
                          className="text-white/80 transition-colors hover:text-white"
                        >
                          tdtruongluan1202@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-6 w-6 text-purple-400" />
                        <a
                          href="tel:+61423538968"
                          className="text-white/80 transition-colors hover:text-white"
                        >
                          +61 423 538 968
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-6 w-6 text-purple-400" />
                        <span className="text-white/80">
                          Sydney, NSW, Australia
                        </span>
                      </div>
                    </div>
                    <div className="mt-8 flex gap-4">
                      <motion.a
                        href="https://linkedin.com/in/louistran1202"
                        target="_blank"
                        className="glass-icon-button"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Linkedin className="h-6 w-6" />
                      </motion.a>
                      <motion.a
                        href="https://github.com/truongluan1202"
                        target="_blank"
                        className="glass-icon-button"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <Github className="h-6 w-6" />
                      </motion.a>
                    </div>
                  </div>
                  <div>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="glass-input w-full"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="glass-input w-full"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          className="glass-input w-full resize-none"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        className="glass-button-primary w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 px-6 py-8">
            <div className="mx-auto max-w-7xl text-center">
              <p className="text-white/60">
                © 2025 Luan Tran. Built with ❤️ and lots of 🐈 🍵
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
