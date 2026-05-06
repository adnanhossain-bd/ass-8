"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp, signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "", // 🔴 Photo URL যুক্ত করা হলো
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        image: formData.photoUrl, // 🔴 Photo URL পাঠানো হলো
      });

      if (error) {
        toast.error(error.message || "Registration failed!");
      } else {
        toast.success("Account created successfully!");
        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🔴 Google Login Function
  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/", // গুগল লগইনের পর হোমে যাবে
    });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-surface-gradient py-12 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-heading mb-2">Create Account</h1>
          <p className="text-body text-sm">Join SkillSphere and start learning today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaUser /></span>
            <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="input input-bordered w-full pl-12 rounded-xl focus:border-primary bg-gray-50/50" />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaEnvelope /></span>
            <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="input input-bordered w-full pl-12 rounded-xl focus:border-primary bg-gray-50/50" />
          </div>
          {/* 🔴 Photo URL Field */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaImage /></span>
            <input type="url" name="photoUrl" placeholder="Photo URL (Optional)" value={formData.photoUrl} onChange={handleChange} className="input input-bordered w-full pl-12 rounded-xl focus:border-primary bg-gray-50/50" />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaLock /></span>
            <input type="password" name="password" placeholder="Password (min 8 chars)" required minLength={8} value={formData.password} onChange={handleChange} className="input input-bordered w-full pl-12 rounded-xl focus:border-primary bg-gray-50/50" />
          </div>

          <button type="submit" disabled={loading} className="btn w-full bg-brand-gradient text-white border-none rounded-xl text-lg mt-2 disabled:opacity-70">
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Sign Up"}
          </button>
        </form>

        <div className="divider text-body text-sm my-6">OR</div>

        {/* 🔴 Google Button */}
        <button onClick={handleGoogleLogin} className="btn w-full bg-white border border-gray-200 text-heading hover:bg-gray-50 rounded-xl text-base flex items-center gap-3">
          <FcGoogle size={24} />
          Sign up with Google
        </button>

        <p className="text-center text-body text-sm mt-6">
          Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;