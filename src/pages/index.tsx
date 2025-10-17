import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  BarChart3,
  Brain,
  Heart,
  Sparkles,
  Download,
  ExternalLink,
  Menu,
  X,
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
            {[...Array(12)].map((_, i) => (
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
                <Database className="h-8 w-8 text-purple-400" />
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

          {/* Hero Section */}
          <section
            id="about"
            className="flex min-h-screen items-center justify-center px-6 pt-20"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="glass-card p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="mb-4 text-6xl"
                  >
                    👨‍💻📊
                  </motion.div>
                  <h1 className="mb-6 text-5xl font-bold text-white lg:text-7xl">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Luan
                    </span>
                  </h1>
                  <p className="mb-8 text-xl leading-relaxed text-white/80">
                    A passionate{" "}
                    <span className="font-semibold text-purple-400">
                      Data Engineer
                    </span>{" "}
                    who loves turning complex data into beautiful insights. When
                    I'm not building data pipelines, you'll find me analyzing
                    trends and exploring the latest in AI and machine learning.
                  </p>
                  <div className="mb-8 flex flex-wrap gap-4">
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
                  <div className="flex gap-4">
                    <motion.a
                      href="#contact"
                      className="glass-button-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get In Touch
                    </motion.a>
                    <motion.a
                      href="/resume.pdf"
                      className="glass-button-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="h-5 w-5" />
                      Download CV
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 text-center">
                  <div className="mx-auto mb-6 flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 text-8xl">
                    📈
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    Data Engineer & Cat Enthusiast
                  </h3>
                  <div className="space-y-3 text-white/80">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      Sydney, NSW, Australia
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-5 w-5 text-purple-400" />
                      tdtruongluan1202@gmail.com
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5 text-purple-400" />
                      +61 423 538 968
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-4">
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
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <h2 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                  Experience
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-white/80">
                  Building innovative solutions at the intersection of data, AI,
                  and mental health
                </p>
              </motion.div>

              <div className="space-y-8">
                {/* CapstoneBara */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        Co-Founder
                      </h3>
                      <p className="text-lg text-purple-400">CapstoneBara</p>
                      <p className="text-white/60">08/2024 - Present</p>
                    </div>
                    <div className="text-4xl">🏥</div>
                  </div>
                  <p className="mb-6 text-white/80">
                    Developed a digital platform for mental well-being and
                    health management, integrating AI assistant (Bara) for
                    emotional support & advice, health dashboard, appointment
                    tools, and doctor snapshot.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="glass-tag">AI Assistant</span>
                    <span className="glass-tag">Health Dashboard</span>
                    <span className="glass-tag">Mental Health</span>
                    <span className="glass-tag">Digital Platform</span>
                  </div>
                  <div className="glass-highlight">
                    <Sparkles className="h-5 w-5 text-yellow-400" />
                    <span>
                      Launched a unified platform improving access to mental
                      health resources and proactive care
                    </span>
                  </div>
                </motion.div>

                {/* Skwill AI */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        Data Science Intern
                      </h3>
                      <p className="text-lg text-purple-400">Skwill AI</p>
                      <p className="text-white/60">05/2024 - 03/2025</p>
                    </div>
                    <div className="text-4xl">🤖</div>
                  </div>
                  <p className="mb-6 text-white/80">
                    Led team to add GPT-4o feature for sales coaching & info
                    retrieval. Analyzed user logs with Pandas/SQL, built
                    data-quality scripts, and developed Power BI dashboards.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="glass-tag">Python</span>
                    <span className="glass-tag">SQL</span>
                    <span className="glass-tag">Power BI</span>
                    <span className="glass-tag">Airflow</span>
                    <span className="glass-tag">Snowflake</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="glass-stat">
                      <div className="text-2xl font-bold text-green-400">
                        15%
                      </div>
                      <div className="text-white/60">Satisfaction Boost</div>
                    </div>
                    <div className="glass-stat">
                      <div className="text-2xl font-bold text-blue-400">
                        20%
                      </div>
                      <div className="text-white/60">Error Reduction</div>
                    </div>
                    <div className="glass-stat">
                      <div className="text-2xl font-bold text-purple-400">
                        12%
                      </div>
                      <div className="text-white/60">Accuracy Improvement</div>
                    </div>
                  </div>
                </motion.div>

                {/* Research Assistant */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        Research Assistant – Data Analyst
                      </h3>
                      <p className="text-lg text-purple-400">
                        S P Jain School of Global Management
                      </p>
                      <p className="text-white/60">01/2025 - 05/2025</p>
                    </div>
                    <div className="text-4xl">🔬</div>
                  </div>
                  <p className="mb-6 text-white/80">
                    Supported Prof. Zaidan in developing ML models for fall-risk
                    classification detection in older adults. Preprocessed
                    sensor data, conducted EDA & feature selection, and applied
                    SHAP for interpretability.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="glass-tag">Machine Learning</span>
                    <span className="glass-tag">SHAP</span>
                    <span className="glass-tag">Feature Selection</span>
                    <span className="glass-tag">Healthcare</span>
                  </div>
                  <div className="glass-highlight">
                    <BarChart3 className="h-5 w-5 text-green-400" />
                    <span>
                      Boosted model accuracy 15% through iterative tuning
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <h2 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                  Projects
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-white/80">
                  From AI digit recognition to sports analytics - exploring the
                  endless possibilities of data
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* AI Digit Recognition */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card group p-6 transition-transform duration-300 hover:scale-105"
                >
                  <div className="mb-4 text-4xl">🔢</div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    AI Digit Recognition
                  </h3>
                  <p className="mb-4 text-white/80">
                    Created an AI tool for digit recognition using CNN trained
                    on MNIST dataset with 95% accuracy.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="glass-tag">CNN</span>
                    <span className="glass-tag">C++</span>
                    <span className="glass-tag">JavaScript</span>
                    <span className="glass-tag">Canvas</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://truongluan1202.github.io/AI-Digit-Recognition-Application/"
                      target="_blank"
                      className="glass-button-small"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </motion.div>

                {/* University Enrollment System */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card group p-6 transition-transform duration-300 hover:scale-105"
                >
                  <div className="mb-4 text-4xl">🎓</div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    University Enrollment System
                  </h3>
                  <p className="mb-4 text-white/80">
                    Designed a relational database with procedures, views,
                    triggers to manage enrollments & capacity.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="glass-tag">PostgreSQL</span>
                    <span className="glass-tag">Python</span>
                    <span className="glass-tag">Database Design</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/truongluan1202/NoSQL_University-Enrollment-System-.git"
                      target="_blank"
                      className="glass-button-small"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </motion.div>

                {/* Sports Analytics */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card group p-6 transition-transform duration-300 hover:scale-105"
                >
                  <div className="mb-4 text-4xl">⚽</div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    Sports Analytics Database
                  </h3>
                  <p className="mb-4 text-white/80">
                    Built NoSQL database for 6 European leagues with 5
                    interconnected collections and 1,900+ shot events.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="glass-tag">MongoDB</span>
                    <span className="glass-tag">Python</span>
                    <span className="glass-tag">ETL</span>
                    <span className="glass-tag">NoSQL</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/truongluan1202/Sports-Analytics-NoSQL-Database.git"
                      target="_blank"
                      className="glass-button-small"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </motion.div>

                {/* Energy Usage Prediction */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass-card group p-6 transition-transform duration-300 hover:scale-105"
                >
                  <div className="mb-4 text-4xl">⚡</div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    Energy Usage Prediction
                  </h3>
                  <p className="mb-4 text-white/80">
                    Built ML pipeline for steel industry energy usage, achieving
                    MSE 5.5 with RandomForest.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="glass-tag">Scikit-learn</span>
                    <span className="glass-tag">Python</span>
                    <span className="glass-tag">RandomForest</span>
                    <span className="glass-tag">ML Pipeline</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/truongluan1202/ML-Energy-Usage-Prediction-of-Steel-Industry.git"
                      target="_blank"
                      className="glass-button-small"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <h2 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                  Skills
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-white/80">
                  A comprehensive toolkit for building data-driven solutions
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Data Engineering */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <Database className="h-8 w-8 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">
                      Data Engineering
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: "Python", level: 95 },
                      { skill: "SQL", level: 90 },
                      { skill: "Airflow", level: 85 },
                      { skill: "Snowflake", level: 80 },
                      { skill: "Spark SQL", level: 75 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="mb-2 flex justify-between">
                          <span className="text-white/80">{item.skill}</span>
                          <span className="text-white/60">{item.level}%</span>
                        </div>
                        <div className="glass-progress">
                          <motion.div
                            className="glass-progress-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Analytics & Visualization */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <BarChart3 className="h-8 w-8 text-green-400" />
                    <h3 className="text-2xl font-bold text-white">
                      Analytics & Visualization
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: "Power BI", level: 90 },
                      { skill: "Tableau", level: 85 },
                      { skill: "R", level: 80 },
                      { skill: "Matplotlib", level: 85 },
                      { skill: "Databricks", level: 75 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="mb-2 flex justify-between">
                          <span className="text-white/80">{item.skill}</span>
                          <span className="text-white/60">{item.level}%</span>
                        </div>
                        <div className="glass-progress">
                          <motion.div
                            className="glass-progress-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* AI & Machine Learning */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card p-8"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <Brain className="h-8 w-8 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">
                      AI & Machine Learning
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: "Scikit-learn", level: 90 },
                      { skill: "PyTorch", level: 80 },
                      { skill: "Langchain", level: 75 },
                      { skill: "Hugging Face", level: 70 },
                      { skill: "MLflow", level: 65 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="mb-2 flex justify-between">
                          <span className="text-white/80">{item.skill}</span>
                          <span className="text-white/60">{item.level}%</span>
                        </div>
                        <div className="glass-progress">
                          <motion.div
                            className="glass-progress-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="mb-8 text-center text-3xl font-bold text-white">
                  Certifications
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                      className="glass-badge p-4 text-center"
                    >
                      {cert}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

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
                  Let's Connect
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-white/80">
                  Ready to turn data into insights? Let's build something
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
                © 2024 Luan Tran. Built with ❤️ and lots of 🐱
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
