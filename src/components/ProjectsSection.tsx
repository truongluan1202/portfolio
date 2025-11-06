import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <div id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="mb-2 text-2xl font-bold text-white">Projects</h2>
      </motion.div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {/* AI-Powered Calendar Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card group p-3 transition-transform duration-300 hover:scale-105 sm:p-4"
        >
          <h3 className="mb-2 text-sm font-bold text-white sm:text-base lg:text-lg">
            AI-Powered Calendar Assistant
          </h3>
          <p className="mb-3 text-xs text-white/80 sm:text-sm">
            Developed a full-stack conversational assistant enabling
            natural-language scheduling and event queries with Google Calendar
            integration and web search capabilities.
          </p>
          <div className="mb-3 flex flex-wrap gap-1">
            <span className="glass-tag text-xs">FastAPI</span>
            <span className="glass-tag text-xs">Next.js</span>
            <span className="glass-tag text-xs">PostgreSQL</span>
            <span className="glass-tag text-xs">Google Calendar API</span>
            <span className="glass-tag text-xs">Web Search</span>
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
          className="glass-card group p-3 transition-transform duration-300 hover:scale-105 sm:p-4"
        >
          <h3 className="mb-2 text-sm font-bold text-white sm:text-base lg:text-lg">
            Airtable Clone
          </h3>
          <p className="mb-3 text-xs text-white/80 sm:text-sm">
            Built a production-grade Airtable-style grid with virtualized
            infinite scroll, supporting 100k+ rows with dynamic columns,
            filtering, and real-time collaboration.
          </p>
          <div className="mb-3 flex flex-wrap gap-1">
            <span className="glass-tag text-xs">Next.js</span>
            <span className="glass-tag text-xs">TRPC</span>
            <span className="glass-tag text-xs">TanStack Table</span>
            <span className="glass-tag text-xs">PostgreSQL</span>
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
          className="glass-card group p-3 transition-transform duration-300 hover:scale-105 sm:p-4"
        >
          <h3 className="mb-2 text-sm font-bold text-white sm:text-base lg:text-lg">
            AI Digit Recognition
          </h3>
          <p className="mb-3 text-xs text-white/80 sm:text-sm">
            Created an AI tool for digit recognition using CNN trained on MNIST
            dataset with 95% accuracy.
          </p>
          <div className="mb-3 flex flex-wrap gap-1">
            <span className="glass-tag text-xs">CNN</span>
            <span className="glass-tag text-xs">C++</span>
            <span className="glass-tag text-xs">JavaScript</span>
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
          className="glass-card group p-3 transition-transform duration-300 hover:scale-105 sm:p-4"
        >
          <h3 className="mb-2 text-sm font-bold text-white sm:text-base lg:text-lg">
            University Enrollment System
          </h3>
          <p className="mb-3 text-xs text-white/80 sm:text-sm">
            Designed a relational database with procedures, views, triggers to
            manage enrollments & capacity.
          </p>
          <div className="mb-3 flex flex-wrap gap-1">
            <span className="glass-tag text-xs">PostgreSQL</span>
            <span className="glass-tag text-xs">Python</span>
            <span className="glass-tag text-xs">Database Design</span>
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
          className="glass-card group p-3 transition-transform duration-300 hover:scale-105 sm:p-4"
        >
          <h3 className="mb-2 text-sm font-bold text-white sm:text-base lg:text-lg">
            Sports Analytics Database
          </h3>
          <p className="mb-3 text-xs text-white/80 sm:text-sm">
            Built NoSQL database for 6 European leagues with 5 interconnected
            collections and 1,900+ shot events.
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
          className="glass-card group p-3 transition-transform duration-300 hover:scale-105 sm:p-4"
        >
          <h3 className="mb-2 text-sm font-bold text-white sm:text-base lg:text-lg">
            Energy Usage Prediction
          </h3>
          <p className="mb-3 text-xs text-white/80 sm:text-sm">
            Built ML pipeline for steel industry energy usage, achieving MSE 5.5
            with RandomForest.
          </p>
          <div className="mb-3 flex flex-wrap gap-1">
            <span className="glass-tag text-xs">Scikit-learn</span>
            <span className="glass-tag text-xs">Python</span>
            <span className="glass-tag text-xs">RandomForest</span>
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
  );
}
