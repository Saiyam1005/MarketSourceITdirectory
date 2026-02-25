import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import logo from "@/assets/logo2.png";

const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-background relative">
            <div className="absolute inset-0 gradient-bg" />
            <div className="max-w-7xl mx-auto relative">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left - Logo Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-72 h-80 rounded-3xl bg-card border border-border flex flex-col items-center justify-center glow-blue">
                                <img src={logo} alt="Market Source" className="w-36 h-auto mb-4" />
                                <div className="font-display text-lg font-bold text-foreground tracking-wider">MARKET</div>
                                <div className="font-display text-lg font-bold text-foreground tracking-wider">SOURCE</div>
                                <div className="text-xs text-muted-foreground tracking-widest mt-1">IT DIRECTORY</div>
                            </div>
                            {/* Decorative glow */}
                            <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-xl -z-10" />
                        </div>
                    </motion.div>

                    {/* Right - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">Our Story</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Connecting Ahmedabad's<br />IT Ecosystem
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We have proudly served Ahmedabad as a trusted advertising IT
                            Directory for over 25 years. Our mission is to simplify your search
                            for IT services by ensuring quality, trust, and convenience.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Whether you're a business, an office, or an individual seeking professional IT support, our platform connects you directly with top-rated vendors near you.
                        </p>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle size={18} className="text-primary" />
                                <span className="text-sm font-medium text-foreground">25 Years of Trust</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle size={18} className="text-primary" />
                                <span className="text-sm font-medium text-foreground">Local Network</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
