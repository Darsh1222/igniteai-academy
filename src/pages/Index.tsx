import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyAISection from "@/components/WhyAISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnrollmentSection from "@/components/EnrollmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyAISection />
        <TestimonialsSection />
        <EnrollmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
