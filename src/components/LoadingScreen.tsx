import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Database,
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Zap,
  Brain,
  Cpu,
} from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [dataPoints, setDataPoints] = useState<
    Array<{ x: number; y: number; value: number }>
  >([]);

  const steps = [
    "Initializing Data Pipeline...",
    "Connecting to Database...",
    "Processing Raw Data...",
    "Running Analytics...",
    "Generating Insights...",
    "Building Dashboard...",
    "Finalizing Results...",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 800);

    // Generate random data points for visualization
    const generateDataPoints = () => {
      const points = [];
      for (let i = 0; i < 20; i++) {
        points.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          value: Math.random() * 100,
        });
      }
      setDataPoints(points);
    };

    generateDataPoints();
    const dataTimer = setInterval(generateDataPoints, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
      clearInterval(dataTimer);
    };
  }, [onComplete, steps.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-px bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl p-8">
        {/* Main loading container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-4 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                >
                  <Database className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                >
                  <Brain className="h-3 w-3 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <h1 className="mb-2 text-4xl font-bold text-white">
              Data Analytics Dashboard
            </h1>
            <p className="text-lg text-white/80">
              Loading Luan Tran's Portfolio
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-white/80">
                {steps[currentStep]}
              </span>
              <span className="text-sm text-white/60">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="glass-progress h-3">
              <motion.div
                className="glass-progress-fill h-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Data visualization grid */}
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* Chart 1 - Bar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white/80">
                  Analytics
                </span>
              </div>
              <div className="space-y-2">
                {[60, 80, 45, 90, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    className="rounded bg-gradient-to-t from-blue-500 to-blue-400"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    style={{ height: `${height * 0.8}px` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Chart 2 - Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="glass-card p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <PieChart className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-white/80">
                  Distribution
                </span>
              </div>
              <div className="relative mx-auto h-16 w-16">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-green-400"
                  initial={{ strokeDasharray: "0 100" }}
                  animate={{ strokeDasharray: "75 25" }}
                  transition={{ delay: 1, duration: 1 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white/80">75%</span>
                </div>
              </div>
            </motion.div>

            {/* Chart 3 - Line Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="glass-card p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium text-white/80">
                  Trends
                </span>
              </div>
              <div className="relative h-12">
                <svg className="h-full w-full" viewBox="0 0 100 50">
                  <motion.path
                    d="M0,40 Q25,20 50,25 T100,10"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Chart 4 - Activity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="glass-card p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-400" />
                <span className="text-sm font-medium text-white/80">
                  Activity
                </span>
              </div>
              <div className="space-y-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="h-1 rounded bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 80 + 20}%` }}
                    transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Data points visualization */}
          <div className="glass-card p-4">
            <div className="mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-medium text-white/80">
                Data Processing
              </span>
            </div>
            <div className="relative h-20 overflow-hidden rounded-lg bg-black/20">
              {dataPoints.map((point, i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-green-400">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  95%
                </motion.span>
              </div>
              <div className="text-sm text-white/60">Accuracy</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-blue-400">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  1.2M
                </motion.span>
              </div>
              <div className="text-sm text-white/60">Data Points</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-purple-400">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  99.9%
                </motion.span>
              </div>
              <div className="text-sm text-white/60">Uptime</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
