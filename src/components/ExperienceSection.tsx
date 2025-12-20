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
              Worked closely with stakeholders, BD, telesales, and product teams
              to define{" "}
              <span className="font-bold text-blue-400">
                KPIs and Tableau dashboards
              </span>{" "}
              tracking payment machine rollout, merchant{" "}
              <span className="font-bold text-blue-400">
                {" "}
                acquisition and conversion{" "}
              </span>{" "}
            </li>
            <li>
              Consolidated{" "}
              <span className="font-bold text-blue-400">
                multi-source sales and marketing data
              </span>{" "}
              into a single analytics layer for funnel, regional, and customer
              journey analysis
            </li>
            <li>
              Built{" "}
              <span className="font-bold text-blue-400">
                analytics pipelines
              </span>{" "}
              using dbt and Airflow, with Snowflake as the warehouse and
              Databricks for scalable spatial processing, covering{" "}
              <span className="font-bold text-green-400">1M+</span> merchant
              records
            </li>
            <li>
              Mapped BD workflows, identified drop-offs across the outreach
              process, and supported{" "}
              <span className="font-bold text-blue-400">
                A/B testing and UAT validation
              </span>
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">Tableau</span>
            <span className="glass-tag text-sm font-medium">dbt</span>
            <span className="glass-tag text-sm font-medium">Airflow</span>
            <span className="glass-tag text-sm font-medium">Snowflake</span>
            <span className="glass-tag text-sm font-medium">Databricks</span>
            <span className="glass-tag text-sm font-medium">Analytics</span>
            <span className="glass-tag text-sm font-medium">A/B Testing</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-stat">
              <div className="text-xl font-bold text-green-400">1M+</div>
              <div className="text-sm text-white/70">Merchant Records</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-blue-400">
                Multi-Source
              </div>
              <div className="text-sm text-white/70">Data Consolidation</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-purple-400">A/B</div>
              <div className="text-sm text-white/70">Testing & UAT</div>
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
              Automated ingestion and{" "}
              <span className="font-bold text-blue-400">
                SQL aggregations, joins, and feature tables,
              </span>{" "}
              reducing data latency by{" "}
              <span className="font-bold text-green-400">45%</span>
            </li>
            <li>
              Added{" "}
              <span className="font-bold text-blue-400">
                dbt tests & monitoring, freshness checks
              </span>{" "}
              reducing manual QA{" "}
              <span className="font-bold text-green-400">60%</span>
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">dbt</span>
            <span className="glass-tag text-sm font-medium">Airflow</span>
            <span className="glass-tag text-sm font-medium">Snowflake</span>
            <span className="glass-tag text-sm font-medium">ELT</span>
            <span className="glass-tag text-sm font-medium">SQL</span>
            <span className="glass-tag text-sm font-medium">Monitoring</span>
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
                Healthcare
              </div>
              <div className="text-sm text-white/70">Robotics Data</div>
            </div>
          </div>
        </motion.div>

        {/* Data Engineer Intern - Skwill AI */}
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
              Led a team to build an{" "}
              <span className="font-bold text-blue-400">
                agentic reporting RAG model
              </span>{" "}
              with <span className="font-bold text-blue-400">GPT-4o</span>{" "}
              generating automated insights on CPC, CTR, conversion trends, and
              customer behaviour
            </li>
            <li>
              Developed scalable{" "}
              <span className="font-bold text-blue-400">
                ETL pipelines for high-volume marketing logs
              </span>
              , enabling fast campaign and funnel analysis
            </li>
            <li>
              Automated{" "}
              <span className="font-bold text-blue-400">
                multi-channel data into dashboards
              </span>{" "}
              for ROI and attribution reporting
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">RAG</span>
            <span className="glass-tag text-sm font-medium">GPT-4o</span>
            <span className="glass-tag text-sm font-medium">ETL</span>
            <span className="glass-tag text-sm font-medium">Dashboards</span>
            <span className="glass-tag text-sm font-medium">ROI</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-stat">
              <div className="text-xl font-bold text-green-400">Agentic</div>
              <div className="text-sm text-white/70">RAG Model</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-blue-400">High-Volume</div>
              <div className="text-sm text-white/70">ETL Pipelines</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-purple-400">
                Multi-Channel
              </div>
              <div className="text-sm text-white/70">Dashboards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
