"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Trophy,
  Users,
  Star,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-16 lg:py-28 px-4 md:px-8 lg:px-12">
      {/* 1. Background Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* 2. Decorative Glowing Gradients */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-secondary/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-8 border border-primary/20 shadow-sm">
            <Rocket size={14} />
            <span>Welcome to SkillSphere</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Upgrade Your <br />
            <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Skills
            </span>{" "}
            Today
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Learn from Industry Experts and master your craft with our
            comprehensive online courses. Start your journey towards success
            today.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link
              href="/courses"
              className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all text-lg font-bold"
            >
              Explore All Courses
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/register"
              className="flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-700 transition-all"
            >
              <PlayCircle size={20} />
              Get Started Now
            </Link>
          </div>

          {/* Trust Indicators / Stats */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 items-center border-t border-slate-800 pt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Users size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-xl">10K+</p>
                <p className="text-slate-500 text-sm">Students</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-800"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-white font-bold text-xl">4.9/5</p>
                <p className="text-slate-500 text-sm">Rating</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Image with Glassmorphism Border */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 p-2 bg-slate-800/30 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
              alt="Professional Learning Environment"
              className="w-full h-auto object-cover rounded-2xl shadow-inner"
            />
          </div>

          {/* Floating Achievement Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-10 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-slate-700"
          >
            <div className="bg-accent/20 p-3 rounded-xl text-accent">
              <Trophy size={28} />
            </div>
            <div>
              <p className="text-white font-bold">Top Rated Platform</p>
              <p className="text-slate-400 text-xs">
                Trusted by 5,000+ Companies
              </p>
            </div>
          </motion.div>

          {/* Background Glow Detail */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
