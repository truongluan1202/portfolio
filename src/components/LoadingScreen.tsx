import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Database,
  BarChart3,
  TrendingUp,
  PieChart,
  Brain,
  Server,
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
    "Connecting to Database...",
    "Loading Data Pipeline...",
    "Processing Analytics...",
    "Building Portfolio...",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 50);

    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1200);

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

      <div className="relative z-10 w-full max-w-6xl p-8">
        {/* Main loading container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8"
        >
          {/* Database Loading Visualization - Top */}
          <div className="mb-8">
            <div className="relative mx-auto h-48 w-full max-w-3xl overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-black/30 to-black/10">
              {/* Background grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                    linear-gradient(cyan 1px, transparent 1px),
                    linear-gradient(90deg, cyan 1px, transparent 1px)
                  `,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Animated data points */}
              {dataPoints.map((point, i) => (
                <motion.div
                  key={i}
                  className="absolute h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-400/50"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0.8, 0],
                    scale: [0, 1.2, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Connecting lines with pulsing effect */}
              {dataPoints.slice(0, 10).map((point, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-px bg-gradient-to-r from-cyan-400/70 to-blue-400/70 shadow-sm"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    width: `${Math.random() * 40 + 20}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0.4, 0],
                    scaleX: [0, 1, 0.8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Central database icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400/20 to-blue-400/20">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              {/* Floating particles */}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute h-2 w-2 rounded-full bg-cyan-400/60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Header - Centered */}
          <div className="mb-8 text-center">
            {/* <motion.div
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
                  <Cpu className="h-8 w-8 text-white" />
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

            <h1 className="mb-2 text-5xl font-bold text-white">
              Loading Portfolio
            </h1>
            <p className="text-xl text-white/80">
              Luan Tran&apos;s Data Portfolio
            </p>
          </div> */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Database className="h-8 w-8 text-cyan-400" />
              </motion.div>
              <span className="text-2xl font-bold text-white">
                Loading Luan Tran&apos;s Database
              </span>
            </div>
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
          <div className="mb-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {/* Chart 1 - Bar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-blue-400" />
                <span className="text-base font-medium text-white/80">
                  Analytics
                </span>
              </div>
              <div className="flex h-24 items-end justify-between gap-1">
                {[60, 80, 45, 90, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    className="min-w-[8px] flex-1 rounded-t bg-gradient-to-t from-blue-500 to-blue-400"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Chart 2 - Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="glass-card p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <PieChart className="h-6 w-6 text-green-400" />
                <span className="text-base font-medium text-white/80">
                  Distribution
                </span>
              </div>
              <div className="relative mx-auto h-20 w-20">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#pieGradient)"
                    strokeWidth="8"
                    strokeDasharray="0 251.2"
                    initial={{ strokeDasharray: "0 251.2" }}
                    animate={{ strokeDasharray: "188.4 62.8" }}
                    transition={{ delay: 1, duration: 1.5 }}
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "50% 50%",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="pieGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#34D399" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white/80">75%</span>
                </div>
              </div>
            </motion.div>

            {/* Chart 3 - Line Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="glass-card p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-purple-400" />
                <span className="text-base font-medium text-white/80">
                  Trends
                </span>
              </div>
              <div className="relative h-20">
                <svg className="h-full w-full" viewBox="0 0 100 50">
                  <motion.path
                    d="M0,40 Q25,20 50,25 T100,10"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                  />
                  <motion.circle
                    cx="0"
                    cy="40"
                    r="2"
                    fill="#8B5CF6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="10"
                    r="2"
                    fill="#EC4899"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.3 }}
                  />
                  <defs>
                    <linearGradient
                      id="lineGradient"
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

            {/* Chart 4 - Server Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="glass-card p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Server className="h-6 w-6 text-orange-400" />
                </motion.div>
                <span className="text-base font-medium text-white/80">
                  Server
                </span>
              </div>
              <div className="flex h-20 flex-col justify-between space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="h-2 rounded bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: [
                        `${Math.random() * 80 + 20}%`,
                        `${Math.random() * 80 + 20}%`,
                      ],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      delay: 1.4 + i * 0.1,
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="glass-card p-4 text-center"
            >
              <div className="mb-2 text-3xl font-bold text-green-400">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  95%
                </motion.span>
              </div>
              <div className="text-base text-white/60">Accuracy</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="glass-card p-4 text-center"
            >
              <div className="mb-2 text-3xl font-bold text-blue-400">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  1.2M
                </motion.span>
              </div>
              <div className="text-base text-white/60">Data Points</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
              className="glass-card p-4 text-center"
            >
              <div className="mb-2 text-3xl font-bold text-purple-400">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  99.9%
                </motion.span>
              </div>
              <div className="text-base text-white/60">Uptime</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
