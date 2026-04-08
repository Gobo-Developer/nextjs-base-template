import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Pricing from "@/components/sections/Pricing";
import FinalCta from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="page-bg absolute inset-0 -z-20" />
      <div className="grid-overlay absolute inset-0 -z-10" />
      <div className="absolute left-[-120px] top-[120px] -z-10 h-[320px] w-[320px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute right-[-100px] top-[240px] -z-10 h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-[-120px] left-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="section-shell px-6 lg:px-10">
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <Pricing />
        <FinalCta />
        <Footer />
      </div>
    </main>
  );
}