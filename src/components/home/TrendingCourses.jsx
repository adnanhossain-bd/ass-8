"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, ArrowUpRight } from "lucide-react";
import coursesData from "@/data/courses.json";

const TrendingCourses = () => {
  
  const trending = coursesData.slice(-3);

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-[#0F172A] overflow-hidden">
      {/* 1. Background Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* 2. Subtle Glow for Section Depth */}
      <div className="absolute top-0 right-0 w-100 h-100 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 text-primary rounded-2xl border border-primary/20 shadow-lg shadow-primary/5">
            <Rocket size={24} />
          </div>
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Hot Pick
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              New & Trending
            </h2>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trending.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/courses/${course.id}`} className="group block">
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
                  {/* Image Container */}
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-90"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                      <span className="text-white text-[10px] font-bold uppercase tracking-tighter">
                        {course.category}
                      </span>
                    </div>

                    {/* Hover Arrow Icon */}
                    <div className="absolute bottom-4 right-4 p-2 bg-primary text-white rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-slate-400 text-sm font-medium">
                        Explore Details
                      </span>
                      <div className="h-0.5 w-8 bg-slate-700 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
