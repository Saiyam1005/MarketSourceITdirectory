import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DirectorySection from "@/components/DirectorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LaunchPopup from "@/components/LaunchPopup";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <LaunchPopup />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <DirectorySection />
            <ServicesSection />
            <TestimonialsSection />
            <WhyChooseSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Index;
