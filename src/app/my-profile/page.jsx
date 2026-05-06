"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUserEdit, FaEnvelope, FaUserCircle } from "react-icons/fa";

const MyProfilePage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-gradient">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) return null; // Middleware থেকে অটো লগইনে রিডাইরেক্ট হবে

  const { user } = session;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-surface-gradient py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-gradient"></div>

        <div className="relative flex flex-col items-center mt-12 mb-8">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            {user.image ? (
              <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-6xl text-gray-400 uppercase font-bold">
                {user.name?.charAt(0) || "U"}
              </span>
            )}
          </div>
          <h2 className="text-2xl font-black text-heading mt-4">{user.name}</h2>
          <p className="text-body font-medium flex items-center gap-2 mt-1">
            <FaEnvelope className="text-primary" /> {user.email}
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
          <h3 className="text-heading font-bold mb-4 flex items-center gap-2">
            <FaUserCircle className="text-primary" size={20} /> Account Details
          </h3>
          <div className="space-y-3 text-sm text-body">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold text-gray-500">Account Role:</span>
              <span className="font-bold text-heading">Student</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold text-gray-500">Account Status:</span>
              <span className="font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-md">Active</span>
            </div>
          </div>
        </div>

        {/* 🔴 Update Button (Requirement) */}
        <Link 
          href="/update-profile" 
          className="btn w-full bg-heading text-white hover:bg-primary border-none rounded-xl text-lg flex items-center justify-center gap-2 transition-colors"
        >
          <FaUserEdit /> Update Information
        </Link>
      </motion.div>
    </div>
  );
};

export default MyProfilePage;