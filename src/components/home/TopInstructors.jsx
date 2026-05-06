"use client";
import { motion } from "framer-motion";
import { Star, Award, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopInstructors = () => {
  const instructors = [
    {
      name: "Dr. Angela Yu",
      role: "Lead Developer",
      img: "https://i.pravatar.cc/150?img=32",
      students: "2.5M+",
      rating: "4.9",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
      },
    },
    {
      name: "Maximilian",
      role: "React Expert",
      img: "https://i.pravatar.cc/150?img=11",
      students: "1.8M+",
      rating: "4.8",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
      },
    },
    {
      name: "Phil Ebiner",
      role: "Marketing Guru",
      img: "https://i.pravatar.cc/150?img=44",
      students: "1.2M+",
      rating: "4.7",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
      },
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-[#0F172A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest mb-4 border border-secondary/20">
            <Award size={14} />
            <span>World Class Mentors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Learn from the{" "}
            <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            আমাদের ইন্সট্রাক্টররা বিশ্বের নামকরা প্রতিষ্ঠানে কাজ করছেন এবং তাদের
            বাস্তব অভিজ্ঞতা আপনার সাথে শেয়ার করবেন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {instructors.map((ins, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="relative group p-px rounded-4xl bg-linear-to-b from-slate-700/50 to-transparent hover:from-primary/50 transition-all duration-500"
            >
              <div className="h-full bg-linear-to-br from-slate-900 to-slate-800 p-8 rounded-4xl flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

                {/* --- সংশোধিত অংশ: স্থির ইমেজ এবং ঘূর্ণায়মান বর্ডার --- */}
                <div className="relative mb-6">
                  {/* এটি হলো ঘূর্ণায়মান বর্ডার ডিভ */}
                  <div className="w-28 h-28 rounded-full bg-linear-to-tr from-primary via-secondary to-accent animate-spin-slow absolute inset-0"></div>
                  
                  {/* এটি হলো মাঝখানের স্থির ইমেজ কন্টেইনার */}
                  <div className="relative w-28 h-28 rounded-full p-1 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full rounded-full bg-slate-900 overflow-hidden">
                      <Image
                        src={ins.img}
                        alt={ins.name}
                        fill
                        sizes="112px"
                        className="rounded-full object-cover p-1"
                      />
                    </div>
                  </div>
                  
                  {/* অনলাইন স্ট্যাটাস ডট */}
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 p-1.5 rounded-full border-4 border-slate-900 shadow-lg z-10">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                {/* --- সংশোধন শেষ --- */}

                <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {ins.name}
                </h4>
                <p className="text-slate-400 font-medium text-sm mb-6 uppercase tracking-wider">
                  {ins.role}
                </p>

                <div className="grid grid-cols-2 gap-4 w-full py-4 px-2 mb-8 bg-slate-800/50 rounded-2xl border border-white/5">
                  <div className="flex flex-col items-center border-r border-white/10">
                    <div className="flex items-center gap-1 text-accent mb-0.5">
                      <Star size={14} fill="currentColor" />
                      <span className="text-white font-bold">{ins.rating}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                      Rating
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-primary mb-0.5">
                      <Users size={14} />
                      <span className="text-white font-bold">
                        {ins.students}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                      Students
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-5 relative z-20">
                  <Link
                    href={ins.socials.twitter}
                    target="_blank"
                    className="p-3 bg-white/5 rounded-xl text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link
                    href={ins.socials.linkedin}
                    target="_blank"
                    className="p-3 bg-white/5 rounded-xl text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link
                    href={ins.socials.facebook}
                    target="_blank"
                    className="p-3 bg-white/5 rounded-xl text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;