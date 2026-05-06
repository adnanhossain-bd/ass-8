"use client";
import { useParams, useRouter, usePathname } from "next/navigation";
import coursesData from "@/data/courses.json";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client"; 

const CourseDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const pathname = usePathname(); 
  const [isPageLoading, setIsPageLoading] = useState(true); // 🔴 নামের বাগ ফিক্সড

  const { data: session, isPending } = useSession();

  // 🔒 Private Route Logic
  useEffect(() => {
    if (!isPending && !session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
    }
  }, [session, isPending, router, pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isPending || isPageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-gradient">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) return null;

  // 🔴 ID Matching বাগ ফিক্সড (string conversion)
  const course = coursesData.find((c) => c.id.toString() === id?.toString());

  if (!course) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-heading mb-4">Course Not Found!</h2>
        <Link href="/courses" className="btn bg-primary text-white rounded-full px-8">Back to All Courses</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-gradient py-12 px-4 md:px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* --- Left Side --- */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
              <img src={course.image} alt={course.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex gap-3 mb-4">
              <span className="badge badge-primary font-semibold">{course.category}</span>
              <span className="badge badge-outline text-accent border-accent font-bold">⭐ {course.rating}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-heading mb-6">{course.title}</h1>
            <div className="prose max-w-none mb-12">
              <h3 className="text-2xl font-bold mb-4">About this Course</h3>
              <p className="text-body text-lg leading-relaxed">{course.description}</p>
            </div>
            {/* Static Curriculum */}
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><span className="text-primary">📚</span> Course Curriculum</h3>
              <div className="space-y-4">
                {["Welcome & Introduction", "Setting up the Environment", "Core Fundamentals", "Hands-on Project Building", "Optimization", "Certification"].map((lesson, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-background rounded-2xl border border-transparent hover:border-primary/20 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-white text-heading flex items-center justify-center font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">{idx + 1}</div>
                    <span className="text-heading font-semibold text-lg">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* --- Right Side --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="mb-6">
                <p className="text-body font-medium mb-1">Course Price</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-heading">$49.00</span>
                </div>
              </div>
              <button className="btn w-full bg-brand-gradient text-white border-none py-4 h-auto text-xl rounded-2xl shadow-lg">Enroll in Course</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetailsPage;