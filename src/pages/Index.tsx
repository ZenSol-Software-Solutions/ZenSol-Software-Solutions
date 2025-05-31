import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Briefcase, Award, Star, ChevronDown, Code, Palette, Database, Cpu, Zap, Target } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { CoursesSection } from "@/components/CoursesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TeamSection } from "@/components/TeamSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section - moved to second */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Courses Section */}
      <CoursesSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Career Contact Form Section - replaces HiringSection */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </motion.button>
    </div>
  );
};

export default Index;
