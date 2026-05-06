import HeroSection from "@/components/home/HeroSection";
import LearningTips from "@/components/home/LearningTips";
import PopularCourses from "@/components/home/PopularCourses";
import TopInstructors from "@/components/home/TopInstructors";
import TrendingCourses from "@/components/home/TrendingCourses";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <PopularCourses></PopularCourses>
      <TrendingCourses />
      <LearningTips />
      <TopInstructors />
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
