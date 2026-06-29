import { CheckCircle, Award, Users, Clock } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import GradientBlobs from "@/components/animations/GradientBlobs";
import logo from "@/assets/logo2.png";

const trustStats = [
    { icon: Clock, value: 25, suffix: "+", label: "Years Experience", color: "bg-blue-50 text-primary" },
    { icon: Users, value: 3000, suffix: "+", label: "Active Dealers", color: "bg-indigo-50 text-secondary" },
    { icon: Award, value: 100, suffix: "%", label: "Verified Vendors", color: "bg-cyan-50 text-accent" },
];

const timeline = [
    { year: "2000", event: "Founded as a local print directory" },
    { year: "2015", event: "Expanded to cover all IT categories" },
    { year: "2023", event: "Launched digital platform" },
    { year: "2026", event: "3,000+ verified dealers onboard" },
];

const AboutSection = () => {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <GradientBlobs className="opacity-50" />
            <div className="absolute inset-0 dot-pattern pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    {/* Left - Logo Card */}
                    <FadeIn direction="left">
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="w-80 h-[22rem] rounded-3xl bg-white border border-border flex flex-col items-center justify-center shadow-xl shadow-primary/[0.06] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/[0.1]">
                                    <img src={logo} alt="Market Source" className="w-40 h-auto mb-5" />
                                    <div className="font-display text-xl font-extrabold text-foreground tracking-wider">MARKET</div>
                                    <div className="font-display text-xl font-extrabold text-foreground tracking-wider">SOURCE</div>
                                    <div className="text-xs text-muted-foreground tracking-[0.25em] mt-2 font-medium">IT DIRECTORY</div>
                                </div>
                                {/* Decorative glow */}
                                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/8 to-accent/8 blur-2xl -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right - Text */}
                    <div>
                        <FadeIn delay={0.1}>
                            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                                <span className="w-8 h-px bg-primary" />
                                Our Story
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground mb-6 leading-tight tracking-tight">
                                Connecting Ahmedabad's
                                <br />
                                <span className="text-gradient-brand">IT Ecosystem</span>
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="blur">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We have proudly served Ahmedabad as a trusted advertising IT
                                Directory for over 25 years. Our mission is to simplify your search
                                for IT services by ensuring quality, trust, and convenience.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.35} direction="blur">
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Whether you're a business, an office, or an individual seeking professional IT support,
                                our platform connects you directly with top-rated vendors near you.
                            </p>
                        </FadeIn>

                        {/* Trust Indicators */}
                        <FadeIn delay={0.4}>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {[
                                    "25 Years of Trust",
                                    "Local Network",
                                    "Verified Vendors",
                                    "Easy Discovery",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-primary/[0.05] rounded-full"
                                    >
                                        <CheckCircle size={14} className="text-primary" />
                                        <span className="text-sm font-medium text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Stats Row */}
                        <FadeIn delay={0.5}>
                            <div className="grid grid-cols-3 gap-4">
                                {trustStats.map((stat, i) => (
                                    <div
                                        key={stat.label}
                                        className="text-center p-4 rounded-2xl bg-white border border-border shadow-sm card-hover"
                                    >
                                        <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                                            <stat.icon size={18} />
                                        </div>
                                        <div className="font-display text-2xl font-extrabold text-foreground">
                                            <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000 + i * 200} />
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Timeline */}
                <FadeIn delay={0.2} className="mt-24">
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
                            {timeline.map((item, i) => (
                                <FadeIn key={item.year} delay={0.1 * i} direction="up">
                                    <div className="text-center">
                                        <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-3 ring-4 ring-primary/10" />
                                        <div className="font-display text-lg font-bold text-primary mb-1">{item.year}</div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{item.event}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default AboutSection;
