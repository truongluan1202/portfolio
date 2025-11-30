import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <div id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
          Experience
        </h2>
      </motion.div>

      <div className="space-y-6">
        {/* Data Analyst Associate - Kpay Group */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-4 sm:p-6"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                Data Analyst Associate
              </h3>
              <p className="text-base font-semibold text-cyan-400 sm:text-lg">
                Kpay Group
              </p>
              <p className="text-sm text-white/60">Sydney, Australia</p>
              <p className="text-sm text-white/60">06/2025 - Present</p>
            </div>
          </div>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/90">
            <li>
              Built scalable{" "}
              <span className="font-bold text-blue-400">pipelines</span> (Spark,
              dbt, Airflow) processing{" "}
              <span className="font-bold text-green-400">700K+</span> spatial
              data into Snowflake
            </li>
            <li>
              Segmented high-value regions and tiered hotspots using{" "}
              <span className="font-bold text-blue-400">
                Power BI, ArcGIS, and Mapbox
              </span>
            </li>
            <li>
              Built a{" "}
              <span className="font-bold text-blue-400">
                tracking dashboard
              </span>{" "}
              to monitor funnel performance, identify drop-offs, and analyse
              tier-level behaviour
            </li>
            <li>
              Recommended{" "}
              <span className="font-bold text-blue-400">
                targeted strategies
              </span>{" "}
              for each tier based on spatial density and conversion patterns
            </li>
            <li>
              Tested outreach strategies using{" "}
              <span className="font-bold text-blue-400">A/B testing</span>
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">Spark</span>
            <span className="glass-tag text-sm font-medium">dbt</span>
            <span className="glass-tag text-sm font-medium">Airflow</span>
            <span className="glass-tag text-sm font-medium">Snowflake</span>
            <span className="glass-tag text-sm font-medium">Power BI</span>
            <span className="glass-tag text-sm font-medium">ArcGIS</span>
            <span className="glass-tag text-sm font-medium">Mapbox</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-stat">
              <div className="text-xl font-bold text-green-400">700K+</div>
              <div className="text-sm text-white/70">Spatial Data Points</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-blue-400">Tiered</div>
              <div className="text-sm text-white/70">Hotspot Analysis</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-purple-400">A/B</div>
              <div className="text-sm text-white/70">Testing</div>
            </div>
          </div>
        </motion.div>

        {/* Research Assistant - Western Sydney University */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-4 sm:p-6"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                Research Assistant
              </h3>
              <p className="text-base font-semibold text-cyan-400 sm:text-lg">
                Western Sydney University (Prof. Anupama Ginige)
              </p>
              <p className="text-sm text-white/60">Sydney, Australia</p>
              <p className="text-sm text-white/60">05/2025 - Present</p>
            </div>
          </div>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/90">
            <li>
              Built{" "}
              <span className="font-bold text-blue-400">ELT pipelines</span> (
              dbt, Airflow, Snowflake) for healthcare robotics data
            </li>
            <li>
              Automated{" "}
              <span className="font-bold text-blue-400">
                multi-source ingestion & transformation
              </span>{" "}
              with optimised SQL, cutting latency{" "}
              <span className="font-bold text-green-400">45%</span>
            </li>
            <li>
              Added{" "}
              <span className="font-bold text-blue-400">
                dbt tests & monitoring
              </span>
              , reducing manual QA{" "}
              <span className="font-bold text-green-400">60%</span>
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">dbt</span>
            <span className="glass-tag text-sm font-medium">Airflow</span>
            <span className="glass-tag text-sm font-medium">Snowflake</span>
            <span className="glass-tag text-sm font-medium">ELT</span>
            <span className="glass-tag text-sm font-medium">SQL</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-stat">
              <div className="text-xl font-bold text-green-400">45%</div>
              <div className="text-sm text-white/70">Latency Reduction</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-blue-400">60%</div>
              <div className="text-sm text-white/70">QA Time Saved</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-purple-400">
                Multi-Source
              </div>
              <div className="text-sm text-white/70">Data Pipeline</div>
            </div>
          </div>
        </motion.div>

        {/* Research Assistant - S P Jain */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-4 sm:p-6"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                Research Assistant
              </h3>
              <p className="text-base font-semibold text-cyan-400 sm:text-lg">
                S P Jain School of Global Management (Prof. Bilal Bahaa Zaidan)
              </p>
              <p className="text-sm text-white/60">Sydney, Australia</p>
              <p className="text-sm text-white/60">01/2025 - 05/2025</p>
            </div>
          </div>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/90">
            <li>
              Engineered{" "}
              <span className="font-bold text-blue-400">ML data pipeline</span>{" "}
              for fall-risk detection,{" "}
              <span className="font-bold text-green-400">RMSE 2.35</span>,
              improved accuracy{" "}
              <span className="font-bold text-green-400">15%</span>
            </li>
            <li>
              Applied{" "}
              <span className="font-bold text-blue-400">
                SHAP & k-fold validation
              </span>{" "}
              for explainable performance
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">
              Machine Learning
            </span>
            <span className="glass-tag text-sm font-medium">SHAP</span>
            <span className="glass-tag text-sm font-medium">k-fold</span>
            <span className="glass-tag text-sm font-medium">Data Pipeline</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-stat">
              <div className="text-xl font-bold text-green-400">RMSE 2.35</div>
              <div className="text-sm text-white/70">Model Performance</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-blue-400">15%</div>
              <div className="text-sm text-white/70">Accuracy Improvement</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-purple-400">
                Explainable
              </div>
              <div className="text-sm text-white/70">ML Pipeline</div>
            </div>
          </div>
        </motion.div>

        {/* Data Engineer Intern - Skwill AI */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-4 sm:p-6"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                Data Engineer Intern
              </h3>
              <p className="text-base font-semibold text-cyan-400 sm:text-lg">
                Skwill AI
              </p>
              <p className="text-sm text-white/60">Sydney, Australia</p>
              <p className="text-sm text-white/60">05/2024 - 03/2025</p>
            </div>
          </div>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/90">
            <li>
              Built an{" "}
              <span className="font-bold text-blue-400">
                agentic reporting pipeline
              </span>{" "}
              using RAG, GPT-4o API to generate insights from customer logs
            </li>
            <li>
              Implemented{" "}
              <span className="font-bold text-blue-400">
                vector retrieval and scalable ETL flows
              </span>{" "}
              for fast log indexing
            </li>
            <li>
              Automated{" "}
              <span className="font-bold text-blue-400">
                end-to-end data processing
              </span>
              , improving reporting speed and reducing manual work
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">RAG</span>
            <span className="glass-tag text-sm font-medium">GPT-4o</span>
            <span className="glass-tag text-sm font-medium">
              Vector Retrieval
            </span>
            <span className="glass-tag text-sm font-medium">ETL</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-stat">
              <div className="text-xl font-bold text-green-400">Agentic</div>
              <div className="text-sm text-white/70">Reporting Pipeline</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-blue-400">Vector</div>
              <div className="text-sm text-white/70">Retrieval</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-purple-400">
                End-to-End
              </div>
              <div className="text-sm text-white/70">Automation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
