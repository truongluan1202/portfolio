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
        {/* Data Engineer Assistant - Western Sydney University */}
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
                Data Engineer Assistant
              </h3>
              <p className="text-base font-semibold text-cyan-400 sm:text-lg">
                Western Sydney University
              </p>
              <p className="text-sm text-white/60">05/2025 - Present</p>
            </div>
          </div>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/90">
            <li>
              Built{" "}
              <span className="font-bold text-blue-400">ETL pipelines</span> (
              dbt, Airflow, Snowflake) for healthcare robotics data
            </li>
            <li>
              Automated{" "}
              <span className="font-bold text-blue-400">
                multi-source ingestion & transformation
              </span>
              , cutting latency{" "}
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
            <span className="glass-tag text-sm font-medium">ETL</span>
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

        {/* Data Science Intern - Skwill AI */}
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
                Data Science Intern
              </h3>
              <p className="text-base font-semibold text-cyan-400 sm:text-lg">
                Skwill AI
              </p>
              <p className="text-sm text-white/60">05/2024 - 03/2025</p>
            </div>
          </div>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/90">
            <li>
              Automated{" "}
              <span className="font-bold text-blue-400">
                Airflow → Snowflake pipelines
              </span>
              , reduced manual data pulls{" "}
              <span className="font-bold text-green-400">50%</span>
            </li>
            <li>
              Built{" "}
              <span className="font-bold text-blue-400">
                Power BI dashboards
              </span>{" "}
              improving analytics efficiency{" "}
              <span className="font-bold text-green-400">30%</span>
            </li>
            <li>
              Led{" "}
              <span className="font-bold text-blue-400">
                GPT-4o feature rollout
              </span>
              , boosted model accuracy{" "}
              <span className="font-bold text-green-400">12%</span>
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">Airflow</span>
            <span className="glass-tag text-sm font-medium">Snowflake</span>
            <span className="glass-tag text-sm font-medium">Power BI</span>
            <span className="glass-tag text-sm font-medium">GPT-4o</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-stat">
              <div className="text-xl font-bold text-green-400">50%</div>
              <div className="text-sm text-white/70">Manual Work Reduced</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-blue-400">30%</div>
              <div className="text-sm text-white/70">Analytics Efficiency</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-purple-400">12%</div>
              <div className="text-sm text-white/70">Accuracy Boost</div>
            </div>
          </div>
        </motion.div>

        {/* Co-Founder - CapstoneBara */}
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
                Co-Founder - Growth Funnel & Conversion Analysis
              </h3>
              <p className="text-base font-semibold text-cyan-400 sm:text-lg">
                CapstoneBara
              </p>
              <p className="text-sm text-white/60">08/2024 - Present</p>
            </div>
          </div>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/90">
            <li>
              Analyzed{" "}
              <span className="font-bold text-blue-400">
                acquisition funnel
              </span>{" "}
              to uncover drop-offs and growth levels
            </li>
            <li>
              Built{" "}
              <span className="font-bold text-blue-400">
                Power BI funnel dashboard
              </span>{" "}
              for stage-wise conversion & attribution
            </li>
            <li>
              Findings enabled{" "}
              <span className="font-bold text-green-400">18–22%</span>{" "}
              improvement in conversion
            </li>
          </ul>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="glass-tag text-sm font-medium">Power BI</span>
            <span className="glass-tag text-sm font-medium">
              Funnel Analysis
            </span>
            <span className="glass-tag text-sm font-medium">Conversion</span>
            <span className="glass-tag text-sm font-medium">Attribution</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-stat">
              <div className="text-xl font-bold text-green-400">18-22%</div>
              <div className="text-sm text-white/70">
                Conversion Improvement
              </div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-blue-400">Funnel</div>
              <div className="text-sm text-white/70">Dashboard</div>
            </div>
            <div className="glass-stat">
              <div className="text-xl font-bold text-purple-400">
                Stage-wise
              </div>
              <div className="text-sm text-white/70">Attribution</div>
            </div>
          </div>
        </motion.div>
        {/* Research Assistant - S P Jain */}
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
                S P Jain School of Global Management
              </p>
              <p className="text-sm text-white/60">01/2025 - 05/2025</p>
            </div>
          </div>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/90">
            <li>
              Engineered{" "}
              <span className="font-bold text-blue-400">ML data pipeline</span>{" "}
              for fall-risk detection, achieving{" "}
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
      </div>
    </div>
  );
}
