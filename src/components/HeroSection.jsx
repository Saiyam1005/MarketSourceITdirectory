import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/image.png";

const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "3k+", label: "Active Dealers" },
    { value: "100%", label: "Verified Vendors" },
];

const HeroSection = () => {
    return (
        <section className="relative pt-28 pb-20 px-6 md:px-12 lg:px-20 bg-background overflow-hidden gradient-bg min-h-screen flex items-center">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "linear-gradient(hsl(220 70% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 70% 55%) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
            }} />

            <div className="max-w-7xl mx-auto w-full relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary border border-primary/20 rounded-full mb-6"
                        >
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                            Trusted by 3,000+ Dealers
                        </motion.span>

                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                            Discover IT{" "}
                            <span className="text-gradient-brand">Solutions</span>
                            <br />Easily
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            Verified vendors &amp; expert services across your city. Find
                            trusted computer, CCTV, printer, and accessory providers in one unified ecosystem.
                        </p>

                        {/* Stats row */}
                        <div className="flex gap-8 mb-10">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                >
                                    <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/dealers"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all glow-blue"
                            >
                                Explore Directory
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/dealers"
                                className="inline-flex items-center gap-2 px-7 py-3.5 text-foreground font-semibold rounded-full border border-border hover:bg-secondary transition-all"
                            >
                                <Play size={18} className="text-primary" />
                                Explore Dealers
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right - Image with floating cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="rounded-3xl overflow-hidden border border-border bg-card glow-blue">
                            <img src={heroBg} alt="IT Directory Dashboard" className="w-full h-auto object-cover" />
                        </div>

                        {/* Floating badge - bottom left */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 glass-card shadow-xl"
                        >
                            <CheckCircle size={16} className="text-green-400" />
                            <span className="text-xs font-semibold text-foreground">Verified Vendors</span>
                        </motion.div>

                        {/* Floating badge - top right */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2.5 glass-card shadow-xl animate-float"
                        >
                            <Shield size={16} className="text-primary" />
                            <span className="text-xs font-semibold text-foreground">Best Services</span>
                        </motion.div>

                        {/* Floating badge - mid right */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                            className="absolute top-1/2 -right-6 flex items-center gap-2 px-4 py-2.5 glass-card shadow-xl"
                        >
                            <Lock size={14} className="text-primary" />
                            <span className="text-[10px] text-muted-foreground">One Stop IT Solution</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
