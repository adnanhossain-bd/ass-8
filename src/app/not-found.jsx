"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0F172A]">
      {/* Dark Dot Matrix Background Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Glowing Radial Gradient for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="text-center px-6 z-10">
        {/* Animated Ghost Icon */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-6 flex justify-center"
        >
          <div className="p-5 bg-slate-800/50 backdrop-blur-xl rounded-full border border-slate-700 shadow-2xl">
            <Ghost size={60} className="text-primary animate-pulse" />
          </div>
        </motion.div>

        {/* 404 Title with Glow */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-8xl md:text-9xl font-black text-white mb-2 tracking-tighter"
        >
          404
        </motion.h1>

        {/* Main Text Content (Now in English) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-700 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>
      </div>

      {/* Decorative Rotating Circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-80 h-80 border border-slate-700/30 rounded-full"
      />
    </div>
  );
}
