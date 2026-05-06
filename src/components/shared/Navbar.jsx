"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client"; 
import toast from "react-hot-toast";

const Navbar = () => {
  const { data: session, isPending } = useSession(); 
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully!");
    router.push("/login");
  };

  const navItems = [{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }];
  if (session) navItems.push({ name: "My Profile", path: "/my-profile" });

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 w-full ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 py-3" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="shrink-0 z-50">
          <Image src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1777972208/ChatGPT_Image_May_5_2026_02_54_08_PM_cezk4b.png" alt="Logo" width={140} height={45} priority className="w-auto h-8 md:h-10 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className={`relative font-medium text-sm transition-all ${pathname === item.path ? "text-primary" : "text-body hover:text-primary"}`}>
              {item.name}
              <span className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all ${pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          ))}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <span className="loading loading-spinner loading-sm text-primary"></span>
            ) : session ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-transparent hover:border-primary transition-all p-0.5">
                  <div className="w-9 lg:w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {session.user.image ? (
                      <img src={session.user.image} alt={session.user.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-lg font-bold text-gray-500 uppercase">{session.user.name?.charAt(0) || "U"}</span>
                    )}
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-white rounded-xl w-48 border border-gray-100">
                  <li className="px-4 py-2 border-b border-gray-50 font-bold truncate">{session.user.name}</li>
                  <li><Link href="/my-profile">Profile</Link></li>
                  <li><button onClick={handleLogout} className="text-red-600 font-medium">Logout</button></li>
                </ul>
              </div>
            ) : (
              <Link href="/login" className="bg-primary text-white px-5 py-2.5 rounded-full font-medium">Get Started</Link>
            )}
          </div>
          <button className="md:hidden text-heading p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;