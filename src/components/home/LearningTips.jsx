"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Brain,
  Zap,
  Lightbulb,
  CheckCircle2,
  Star,
} from "lucide-react";

const LearningTips = () => {
  const tips = [
    {
      title: "Pomodoro Technique",
      desc: "একটানা না পড়ে ২৫ মিনিট পড়াশোনা এবং ৫ মিনিট বিরতি নিন। এটি আপনার মস্তিষ্ককে সতেজ রাখে এবং দীর্ঘসময় মনোযোগ ধরে রাখতে সাহায্য করে।",
      icon: <Clock className="text-white" size={26} />,
      badge: "Efficiency",
    },
    {
      title: "Deep Work Strategy",
      desc: "দিনের সবচেয়ে কঠিন কাজগুলো সকালে করার চেষ্টা করুন। যখন আপনার এনার্জি লেভেল সবচেয়ে বেশি থাকে, তখন জটিল বিষয়গুলো দ্রুত আয়ত্ত করা সম্ভব।",
      icon: <Zap className="text-white" size={26} />,
      badge: "Focus",
    },
    {
      title: "Active Recall",
      desc: "কোনো বিষয় বারবার পড়ার চেয়ে নিজেকে প্রশ্ন করুন। এই পদ্ধতিটি তথ্যকে দীর্ঘমেয়াদী স্মৃতিতে সংরক্ষণ করতে বৈজ্ঞানিকভাবে প্রমাণিত।",
      icon: <Brain className="text-white" size={26} />,
      badge: "Memory",
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-[#a9c9e8] overflow-hidden">
      {/* 1. Dynamic Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#0F172A 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* 2. Abstract Decorative Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0F172A]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F172A] text-white font-bold text-xs uppercase tracking-widest mb-6 shadow-lg">
            <Star size={14} fill="currentColor" />
            <span>Expert Advice</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-6 leading-[1.1]">
            Master Skills <br />
            <span className="text-white">Faster Than Ever</span>
          </h2>

          <p className="text-[#0F172A]/80 text-lg mb-10 font-medium leading-relaxed max-w-lg">
            শেখার প্রক্রিয়াকে সহজ এবং আনন্দদায়ক করতে এই বৈজ্ঞানিক কৌশলগুলো আপনার
            প্রতিদিনের রুটিনে যুক্ত করুন।
          </p>

          {/* Informative Cards Stack */}
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-5 p-6 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-xl shadow-[#0F172A]/5"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0F172A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {tip.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-[#0F172A] text-xl">
                      {tip.title}
                    </h4>
                    <span className="text-[10px] font-black uppercase bg-white/40 px-2 py-0.5 rounded-md text-[#0F172A]">
                      {tip.badge}
                    </span>
                  </div>
                  <p className="text-[#0F172A]/70 text-sm font-medium leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Visual Image */}
          <div className="relative z-10 p-3 bg-white/20 backdrop-blur-md rounded-[3rem] border border-white/40 shadow-2xl">
            <img
              src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1774677397/learning-education-ideas-insight-intelligence-study-concept_53876-120116_ttwxyz.avif"
              className="rounded-[2.5rem] object-cover w-full h-137.5 shadow-inner"
              alt="Learning Strategies"
            />
          </div>

          {/* Floating Stat Card */}
          <div className="absolute -top-6 -left-6 bg-white p-5 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-[#789cbf]/20 animate-bounce-slow">
            <div className="bg-[#789cbf]/20 p-3 rounded-2xl text-[#789cbf]">
              <CheckCircle2 size={30} />
            </div>
            <div>
              <p className="text-[#0F172A] font-black text-2xl">95%</p>
              <p className="text-slate-500 text-xs font-bold uppercase">
                Success Rate
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningTips;
