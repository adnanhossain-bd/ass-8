"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client"; 
import toast from "react-hot-toast";
import { FaUser, FaImage, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  // সেশন ডেটা লোড হলে ফর্মে আগে থেকেই ইউজারের নাম ও ছবি বসিয়ে দেবে
  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        image: session.user.image || "",
      });
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔴 BetterAuth Update User Logic (Requirement)
      const { data, error } = await authClient.updateUser({
        name: formData.name,
        image: formData.image,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile.");
      } else {
        toast.success("Profile updated successfully!");
        router.push("/my-profile"); // আপডেট শেষে প্রোফাইল পেজে ব্যাক করবে
        router.refresh(); // ডেটা রিফ্রেশ করার জন্য
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-gradient">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-surface-gradient py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
      >
        <Link href="/my-profile" className="flex items-center gap-2 text-body hover:text-primary mb-6 transition-colors font-medium text-sm">
          <FaArrowLeft /> Back to Profile
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-heading mb-2">Update Info</h1>
          <p className="text-body text-sm">Change your profile name and photo URL.</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          {/* 🔴 Name Input */}
          <div>
            <label className="block text-sm font-semibold text-heading mb-2 ml-1">Full Name</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter new name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full pl-12 rounded-xl focus:border-primary bg-gray-50/50"
              />
            </div>
          </div>

          {/* 🔴 Image URL Input */}
          <div>
            <label className="block text-sm font-semibold text-heading mb-2 ml-1">Profile Photo URL</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaImage />
              </span>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/photo.png"
                value={formData.image}
                onChange={handleChange}
                className="input input-bordered w-full pl-12 rounded-xl focus:border-primary bg-gray-50/50"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 ml-1">Leave empty if you don't want to change.</p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="btn w-full bg-brand-gradient text-white border-none rounded-xl text-lg mt-4 disabled:opacity-70"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Save Changes"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateProfilePage;