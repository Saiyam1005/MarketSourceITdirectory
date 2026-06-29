import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Shield, Zap, Monitor, Printer, Camera, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/animations/FadeIn";
import SplitText from "@/components/animations/SplitText";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import MagneticButton from "@/components/animations/MagneticButton";
import GradientBlobs from "@/components/animations/GradientBlobs";
import heroBg from "@/assets/image.png";

const stats = [
    { value: 25, suffix: "+", label: "Years Experience" },
    { value: 3000, suffix: "+", label: "Active Dealers" },
    { value: 100, suffix: "%", label: "Verified Vendors" },
];

const trustBadges = [
    { icon: CheckCircle, label: "Verified Vendors" },
    { icon: Shield, label: "Trusted Network" },
    { icon: Zap, label: "Instant Connect" },
];

const floatingIcons = [
    { icon: Monitor, top: "8%", right: "5%", delay: 0, size: 24 },
    { icon: Printer, top: "25%", right: "0%", delay: 0.5, size: 20 },
    { icon: Camera, bottom: "30%", right: "3%", delay: 1, size: 22 },
    { icon: Wifi, bottom: "10%", right: "15%", delay: 1.5, size: 18 },
];

const HeroSection = () => {
    return (
        <section className="relative pt-28 pb-20 px-6 md:px-12 lg:px-20 min-h-screen flex items-center overflow-hidden">
            {/* Background layers */}
            <GradientBlobs />
            <div className="absolute inset-0 grid-pattern pointer-events-none" />
            <div className="absolute inset-0 noise-overlay pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Text */}
                    <div>
                        {/* Badge */}
                        <FadeIn delay={0.2}>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-primary/[0.07] text-primary border border-primary/15 rounded-full mb-8">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Trusted by 3,000+ Dealers
                            </span>
                        </FadeIn>

                        {/* Main heading */}
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-foreground leading-[1.08] mb-6 tracking-tight">
                            <SplitText splitBy="word" delay={0.3} staggerDelay={0.06}>
                                Discover Trusted
                            </SplitText>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="text-gradient-brand inline-block"
                            >
                                IT Solutions
                            </motion.span>
                            <br />
                            <SplitText splitBy="word" delay={0.9} staggerDelay={0.06}>
                                Across Ahmedabad
                            </SplitText>
                        </h1>

                        {/* Description */}
                        <FadeIn delay={1.0} direction="blur">
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                                Connect with verified computer dealers, printer vendors, CCTV installers,
                                networking experts, and IT solution providers — all in one unified ecosystem.
                            </p>
                        </FadeIn>

                        {/* CTA Buttons */}
                        <FadeIn delay={1.1}>
                            <div className="flex flex-wrap gap-4 mb-10">
                                <Link to="/dealers">
                                    <MagneticButton className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30">
                                        Explore Directory
                                        <ArrowRight size={18} />
                                    </MagneticButton>
                                </Link>
                                <Link
                                    to="/dealers"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 text-foreground font-semibold rounded-full border border-border bg-white hover:bg-gray-50 hover:border-primary/30 transition-all shadow-sm"
                                >
                                    <Play size={18} className="text-primary" />
                                    View Dealers
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Stats */}
                        <FadeIn delay={1.2}>
                            <div className="flex gap-10 mb-8">
                                {stats.map((stat, i) => (
                                    <div key={stat.label}>
                                        <div className="font-display text-3xl font-extrabold text-foreground">
                                            <AnimatedCounter
                                                target={stat.value}
                                                suffix={stat.suffix}
                                                duration={2000 + i * 300}
                                            />
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Trust badges */}
                        <FadeIn delay={1.3}>
                            <div className="flex flex-wrap gap-3">
                                {trustBadges.map((badge) => (
                                    <div
                                        key={badge.label}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-border rounded-full text-xs font-medium text-muted-foreground shadow-sm"
                                    >
                                        <badge.icon size={13} className="text-primary" />
                                        {badge.label}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right - Image with floating elements */}
                    <FadeIn direction="right" delay={0.5} className="relative hidden lg:block">
                        <div className="relative">
                            {/* Main image */}
                            <div className="rounded-3xl overflow-hidden border border-border/60 bg-white shadow-2xl shadow-primary/[0.08]">
                                <img
                                    src={heroBg}
                                    alt="IT Directory Dashboard"
                                    className="w-full h-auto object-cover"
                                    loading="eager"
                                />
                            </div>

                            {/* Floating badge - bottom left */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-2xl shadow-xl"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle size={16} className="text-green-500" />
                                </div>
                                <span className="text-xs font-semibold text-foreground">Verified Vendors</span>
                            </motion.div>

                            {/* Floating badge - top right */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.5 }}
                                className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-2xl shadow-xl animate-float-slow"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Shield size={16} className="text-primary" />
                                </div>
                                <span className="text-xs font-semibold text-foreground">Best Services</span>
                            </motion.div>

                            {/* Floating IT icons */}
                            {floatingIcons.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg"
                                    style={{ top: item.top, right: item.right, bottom: item.bottom }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: [0, -8, 0],
                                    }}
                                    transition={{
                                        delay: 1.5 + item.delay,
                                        duration: 0.5,
                                        y: {
                                            duration: 3 + i * 0.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: item.delay,
                                        },
                                    }}
                                >
                                    <item.icon size={item.size} className="text-primary/70" />
                                </motion.div>
                            ))}

                            {/* Decorative glow behind image */}
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl -z-10" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
