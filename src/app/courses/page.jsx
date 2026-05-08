"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import coursesData from "@/data/courses.json";

const AllCoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-surface-gradient py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Explore All <span className="text-primary">Courses</span>
          </h1>
          <p className="text-body max-w-xl mx-auto">
            আপনার পছন্দের স্কিল কে আরো ডেভেলপমেন্ট করুন আমাদের এক্সপার্টদের তৈরি কোর্সগুলো থেকে।
          </p>
        </div>

        {/* --- Controls: Search & Filter --- */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
          
          {/* Search Input */}
          <div className="relative w-full lg:max-w-md text-amber-100 font-bold">
            <input
              type="text"
              placeholder="Search by title..."
              className="input input-bordered w-full pl-12 rounded-xl focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50">🔍</span>
          </div>

          {/* Level Filter (DaisyUI Tabs or Select) */}
          <div className="flex flex-wrap justify-center gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`btn btn-sm md:btn-md rounded-full px-6 transition-all ${
                  selectedLevel === level 
                  ? "bg-brand-gradient text-white border-none shadow-md" 
                  : "btn-ghost text-body border border-gray-200"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* --- Course Grid (3 Columns on Desktop) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group rounded-2xl overflow-hidden"
                >
                  <figure className="relative aspect-video">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3">
                      <span className="badge badge-accent font-bold shadow-sm">⭐ {course.rating}</span>
                    </div>
                  </figure>
                  
                  <div className="card-body p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">
                        {course.level}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-secondary/10 text-secondary rounded">
                        {course.category}
                      </span>
                    </div>
                    
                    <h2 className="card-title text-heading text-xl mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-body text-sm line-clamp-2 mb-4">{course.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                      <span className="font-bold text-primary">{course.duration}</span>
                      <Link href={`/courses/${course.id}`} className="btn btn-sm bg-brand-gradient text-white border-none rounded-lg px-6">
                        Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-2xl font-bold text-body">No courses found matching your criteria.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;