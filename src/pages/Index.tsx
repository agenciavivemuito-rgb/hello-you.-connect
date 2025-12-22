import { ArrowRight, Zap, Target, TrendingUp, Code, MessageSquare, Settings, Users, BarChart3, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-hero-glow pointer-events-none" />
      
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
