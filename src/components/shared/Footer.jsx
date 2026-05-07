"use client";
import Link from "next/link";
// React Icons থেকে আইকন ইমপোর্ট করা হচ্ছে
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10 px-4 md:px-8 lg:px-16 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-3xl font-black bg-brand-gradient bg-clip-text text-transparent italic"
            >
              SkillSphere
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              আমরা বিশ্বাস করি সঠিক শিক্ষা এবং দক্ষতা আপনার ক্যারিয়ারের মোড়
              ঘুরিয়ে দিতে পারে। এক্সপার্টদের সাথে শিখুন এবং এগিয়ে যান।
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-primary transition-all duration-300"
                >
                  All Courses
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Contact Information
            </h4>
            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <span className="p-2 bg-primary/15 text-primary rounded-lg">
                  <FaEnvelope size={16} />
                </span>
                support@skillsphere.com
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 bg-secondary/15 text-secondary rounded-lg">
                  <FaPhoneAlt size={16} />
                </span>
                +880 1700 494829
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 bg-accent/15 text-accent rounded-lg">
                  <FaMapMarkerAlt size={16} />
                </span>
                Rajshahi, Bangladesh
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF size={18} />, link: "#" },
                { icon: <FaTwitter size={18} />, link: "#" },
                { icon: <FaLinkedinIn size={18} />, link: "#" },
                { icon: <FaGithub size={18} />, link: "#" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-gradient hover:text-white transition-all duration-500 shadow-sm border border-slate-700"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium">
            © 2026 <span className="text-white">SkillSphere</span>. Developed by{" "}
            <Link
              href="https://exprovia.com"
              className="text-primary hover:underline"
            >
              SkillSphere
            </Link>
            .
          </p>
          <div className="flex gap-8 text-xs font-semibold text-slate-400">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
