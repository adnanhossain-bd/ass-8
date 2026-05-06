"use client";
import Link from "next/link";
import { motion } from "framer-motion";
// ধরুন আপনার JSON ফাইলটি এখানে আছে
import coursesData from "@/data/courses.json";

const PopularCourses = () => {
  // রেটিং অনুযায়ী সর্ট করে টপ ৩টি কোর্স নেওয়া
  const popularCourses = [...coursesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-surface-gradient">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
            Our <span className="text-primary">Popular</span> Courses 🔥
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Pick from our top-rated programs and join thousands of students 
            learning and growing with SkillSphere.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {course.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent rounded uppercase">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-accent font-bold">
                    <span>⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-heading mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-body text-sm mb-4">
                  By <span className="font-medium text-heading">{course.instructor}</span>
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-primary font-bold">{course.duration}</span>
                  <Link 
                    href={`/courses/${course.id}`}
                    className="btn btn-sm bg-brand-gradient text-white border-none rounded-lg px-4 hover:opacity-90"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/courses" className="text-primary font-semibold hover:underline flex items-center justify-center gap-2">
            See All Courses 
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PopularCourses;