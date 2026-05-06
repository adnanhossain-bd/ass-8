"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; 
import { motion } from "framer-motion";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        toast.error(error.message || "Invalid email or password!");
      } else {
        toast.success("Welcome back!");
        router.push(callbackUrl); 
        router.refresh(); 
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // 🔴 Google Login Function
  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-surface-gradient py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-heading mb-2">Welcome Back</h1>
          <p className="text-body text-sm">Please log in to access your courses.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaEnvelope /></span>
            <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="input input-bordered w-full pl-12 rounded-xl focus:border-primary bg-gray-50/50" />
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaLock /></span>
            <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} className="input input-bordered w-full pl-12 rounded-xl focus:border-primary bg-gray-50/50" />
          </div>

          <button type="submit" disabled={loading} className="btn w-full bg-brand-gradient text-white border-none rounded-xl text-lg mt-2 disabled:opacity-70">
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Log In"}
          </button>
        </form>

        <div className="divider text-body text-sm my-6">OR</div>

        {/* 🔴 Google Button */}
        <button onClick={handleGoogleLogin} className="btn w-full bg-white border border-gray-200 text-heading hover:bg-gray-50 rounded-xl text-base flex items-center gap-3">
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <p className="text-center text-body text-sm mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary font-bold hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner text-primary"></span></div>}>
      <LoginForm />
    </Suspense>
  );
}