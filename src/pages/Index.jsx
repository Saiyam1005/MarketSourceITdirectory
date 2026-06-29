import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import AboutSection from "@/components/AboutSection";
import DirectorySection from "@/components/DirectorySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LaunchPopup from "@/components/LaunchPopup";
import ScrollProgress from "@/components/animations/ScrollProgress";
import MouseFollower from "@/components/animations/MouseFollower";
import FloatingParticles from "@/components/animations/FloatingParticles";
import LoadingScreen from "@/components/animations/LoadingScreen";

const Index = () => {
    return (
        <div className="min-h-screen bg-background relative">
            <LoadingScreen />
            <ScrollProgress />
            <MouseFollower />
            <FloatingParticles count={25} />
            <LaunchPopup />
            <Navbar />
            <HeroSection />
            <PartnersMarquee />
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
