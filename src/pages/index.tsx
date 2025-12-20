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
  Code,
  Menu,
  X,
} from "lucide-react";
import LoadingScreen from "~/components/LoadingScreen";
import ExperienceSection from "~/components/ExperienceSection";
import ProjectsSection from "~/components/ProjectsSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div
          className="relative min-h-screen overflow-hidden bg-gray-900"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        >
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
          <nav
            className="fixed top-0 z-50 w-full border-white/10 p-6 backdrop-blur-sm"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              backgroundColor: "rgba(17, 24, 39, 0.95)", // gray-900 with transparency
            }}
          >
            <motion.div
              className="mx-auto flex max-w-7xl items-center justify-between px-4"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="h-6 w-6 text-purple-400 sm:h-8 sm:w-8" />
                </motion.div>
                <span className="hidden sm:inline">Portfolio</span>
              </div>
              <div className="hidden gap-6 lg:flex">
                {["About", "Experience", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white/80 transition-colors duration-300 hover:text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(
                          item.toLowerCase(),
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
              <button
                className="glass-icon-button"
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
                  className="mx-4 mt-4 p-4 lg:absolute lg:top-full lg:right-5 lg:mt-0 lg:w-70 2xl:right-75"
                  style={{
                    background: "rgba(17, 24, 39, 1)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "20px",
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  }}
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
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          const element = document.getElementById(
                            item.toLowerCase(),
                          );
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
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
          <div className="px-4 pt-30 sm:px-8 sm:pt-24">
            <div className="mx-auto max-w-6xl lg:mx-auto">
              {/* Hero Section - Split into two sides */}
              <section id="about" className="mb-20">
                <div className="grid lg:grid-cols-3">
                  {/* Left Side - Profile Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 lg:mt-8"
                  >
                    <div className="glass-card p-4 text-center sm:p-6">
                      <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-purple-400 to-pink-400 sm:h-48 sm:w-48">
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
                        Data Engineer & Cataholic
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
                        <motion.a
                          href="https://public.tableau.com/app/profile/dinh.truong.luan.tran"
                          target="_blank"
                          className="glass-icon-button"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <BarChart3 className="h-5 w-5" />
                        </motion.a>
                      </div>
                      <div className="mt-6 flex justify-center gap-3">
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
                      id="skills"
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
                      </div>

                      {/* Visual Analytics - Core Skills */}
                      <div className="space-y-6">
                        {/* Data Engineering - Progress Bars */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="glass-card p-5"
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <Database className="h-6 w-6 text-blue-400 sm:h-8 sm:w-8" />
                            <h3 className="text-md font-bold text-white md:text-sm">
                              Core Data Engineering
                            </h3>
                          </div>
                          <div className="space-y-3">
                            {[
                              { skill: "Databricks", level: 88 },
                              { skill: "BigQuery", level: 85 },
                              { skill: "Airflow", level: 88 },
                              { skill: "Snowflake", level: 87 },
                              { skill: "dbt", level: 86 },
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
                                    whileInView={{
                                      width: `${item.level}%`,
                                    }}
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

                        {/* Analytics & Visualization - Radar Chart */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="glass-card p-5 pb-0"
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <BarChart3 className="h-6 w-6 text-green-400 sm:h-8 sm:w-8" />
                            <h3 className="text-md font-bold text-white sm:text-lg md:text-sm">
                              Analytics & Visualization
                            </h3>
                          </div>
                          <div className="m-0 flex items-center justify-center">
                            <div className="relative m-0 h-80 w-80 sm:h-70 sm:w-96">
                              <svg
                                className="h-full w-full"
                                viewBox="0 0 240 240"
                              >
                                {/* Radar chart background */}
                                <defs>
                                  <radialGradient
                                    id="analyticsRadarGradient"
                                    cx="50%"
                                    cy="50%"
                                    r="50%"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="rgba(34, 197, 94, 0.1)"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="rgba(34, 197, 94, 0.3)"
                                    />
                                  </radialGradient>
                                </defs>

                                {/* Grid circles */}
                                {[0.2, 0.4, 0.6, 0.8, 1.0].map(
                                  (scale, index) => (
                                    <circle
                                      key={index}
                                      cx="120"
                                      cy="120"
                                      r={80 * scale}
                                      fill="none"
                                      stroke="rgba(255,255,255,0.1)"
                                      strokeWidth="1"
                                    />
                                  ),
                                )}

                                {/* Grid lines */}
                                {[0, 72, 144, 216, 288].map((angle, index) => (
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
                                ))}

                                {/* Radar chart polygon */}
                                <motion.polygon
                                  fill="url(#analyticsRadarGradient)"
                                  stroke="#22c55e"
                                  strokeWidth="2"
                                  points={(() => {
                                    const skills = [
                                      { angle: 0, level: 95 },
                                      { angle: 72, level: 90 },
                                      { angle: 144, level: 88 },
                                      { angle: 216, level: 85 },
                                      { angle: 288, level: 98 },
                                    ];
                                    return skills
                                      .map((s) => {
                                        const radius = (80 * s.level) / 100;
                                        const x =
                                          120 +
                                          radius *
                                            Math.cos((s.angle * Math.PI) / 180);
                                        const y =
                                          120 +
                                          radius *
                                            Math.sin((s.angle * Math.PI) / 180);
                                        return `${x},${y}`;
                                      })
                                      .join(" ");
                                  })()}
                                  initial={{ pathLength: 0, opacity: 0 }}
                                  whileInView={{ pathLength: 1, opacity: 1 }}
                                  transition={{ duration: 2, delay: 0.5 }}
                                  viewport={{ once: true }}
                                />

                                {/* Data points */}
                                {(() => {
                                  const skills = [
                                    {
                                      angle: 0,
                                      skill: "Power BI",
                                      level: 95,
                                    },
                                    {
                                      angle: 72,
                                      skill: "R",
                                      level: 90,
                                    },
                                    {
                                      angle: 144,
                                      skill: "Jira",
                                      level: 88,
                                    },
                                    {
                                      angle: 216,
                                      skill: "Excel",
                                      level: 85,
                                    },
                                    {
                                      angle: 288,
                                      skill: "Tableau",
                                      level: 98,
                                    },
                                  ];
                                  return skills.map((s) => {
                                    const radius = (80 * s.level) / 100;
                                    const x =
                                      120 +
                                      radius *
                                        Math.cos((s.angle * Math.PI) / 180);
                                    const y =
                                      120 +
                                      radius *
                                        Math.sin((s.angle * Math.PI) / 180);
                                    // Calculate label position: extend from center through point with offset
                                    const labelOffset = 30;
                                    const labelX =
                                      120 +
                                      (radius + labelOffset) *
                                        Math.cos((s.angle * Math.PI) / 180);
                                    const labelY =
                                      120 +
                                      (radius + labelOffset) *
                                        Math.sin((s.angle * Math.PI) / 180);
                                    return { x, y, labelX, labelY, ...s };
                                  });
                                })().map((point, index) => (
                                  <g key={index}>
                                    <motion.circle
                                      cx={point.x}
                                      cy={point.y}
                                      r="4"
                                      fill="#22c55e"
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
                                      {point.skill}
                                    </motion.text>
                                    <motion.text
                                      x={point.labelX}
                                      y={point.labelY + 14}
                                      textAnchor="middle"
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
                              </svg>

                              {/* Skill labels around radar */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="mb-2 text-base font-semibold text-white sm:text-sm">
                                    Analytics
                                  </div>
                                  <div className="text-sm text-white/60 sm:text-xs">
                                    Proficiency Levels
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Complete Technology Stack */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                      >
                        {[
                          "Python",
                          "SQL",
                          "PySpark",
                          "PostgreSQL",
                          "NoSQL",
                          "MongoDB",
                          "Spark SQL",
                          "AWS",
                          "GCP",
                          "Docker",
                          "CI/CD",
                          "Apache Kafka",
                          "SealSuite",
                          "Git",
                          "Scikit-learn",
                          "Langchain",
                          "Hugging Face",
                          "MLflow",
                          "PyTorch",
                        ].map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.03,
                            }}
                            viewport={{ once: true }}
                            className="glass-tag text-sm font-medium"
                          >
                            {skill}
                          </motion.span>
                        ))}
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
                      </div>

                      <div className="space-y-3">
                        {[
                          "Databricks Lakehouse Fundamentals",
                          "AWS Certified Cloud Practitioner",
                          "Power BI Data Analyst Associate - Microsoft Certified",
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
                    className="mt-20 space-y-8 lg:col-span-2 lg:mt-8 lg:ml-19"
                  >
                    <div className="">
                      <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
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
                    <ExperienceSection />

                    {/* Projects Section */}
                    <ProjectsSection />
                  </motion.div>
                </div>
              </section>
            </div>
          </div>

          {/* Contact Section */}
          <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12 text-center sm:mb-16"
              >
                <h2 className="mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-3xl lg:text-4xl xl:text-6xl">
                  Let&apos;s Connect
                </h2>
                <p className="mx-auto max-w-3xl text-base text-white/80 sm:text-lg lg:text-xl">
                  Ready to turn data into insights? Let&apos;s build something
                  amazing together! 🐈‍
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-4 sm:p-8"
              >
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl lg:text-2xl">
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
                      <motion.a
                        href="https://public.tableau.com/app/profile/dinh.truong.luan.tran"
                        target="_blank"
                        className="glass-icon-button"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <BarChart3 className="h-6 w-6" />
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
          <footer className="border-white/10 px-6 py-8">
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
