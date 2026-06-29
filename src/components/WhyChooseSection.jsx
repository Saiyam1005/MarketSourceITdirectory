import { ShieldCheck, Gift, Users, MessageCircle, Megaphone, TrendingUp } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

const reasons = [
    { icon: ShieldCheck, title: "Verified Vendors", desc: "All listings are thoroughly checked for quality.", color: "from-blue-500 to-indigo-500", bgColor: "bg-blue-50" },
    { icon: Gift, title: "Free Access", desc: "Unlimited free access to our digital directory.", color: "from-emerald-500 to-teal-500", bgColor: "bg-emerald-50" },
    { icon: Users, title: "Trusted by Thousands", desc: "Over 3,000 dealers rely on our network.", color: "from-violet-500 to-purple-500", bgColor: "bg-violet-50" },
    { icon: MessageCircle, title: "WhatsApp Connect", desc: "Easy contact options directly via WhatsApp.", color: "from-green-500 to-emerald-500", bgColor: "bg-green-50" },
];

const metrics = [
    { value: 3000, suffix: "+", label: "Verified Dealers" },
    { value: 25, suffix: "+", label: "Years of Trust" },
    { value: 50, suffix: "+", label: "IT Categories" },
    { value: 100, suffix: "%", label: "Satisfaction" },
];

const WhyChooseSection = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                        <span className="w-8 h-px bg-primary" />
                        Why Choose Us
                        <span className="w-8 h-px bg-primary" />
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-tight">
                        Why <span className="text-gradient-brand">Choose Us?</span>
                    </h2>
                </FadeIn>

                {/* Reason Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {reasons.map((r, i) => (
                        <FadeIn key={r.title} delay={i * 0.08}>
                            <div className="group relative bg-white border border-border rounded-2xl p-6 text-center shadow-sm card-hover overflow-hidden">
                                {/* Hover glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />

                                <div className={`w-14 h-14 rounded-2xl ${r.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <r.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="font-display font-bold text-base text-foreground mb-2">{r.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Animated Counters */}
                <FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {metrics.map((m, i) => (
                            <div key={m.label} className="text-center p-6 rounded-2xl bg-white border border-border shadow-sm">
                                <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient-brand mb-1">
                                    <AnimatedCounter target={m.value} suffix={m.suffix} duration={2000 + i * 200} />
                                </div>
                                <div className="text-sm text-muted-foreground font-medium">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Pills */}
                <FadeIn delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        {[
                            { icon: Megaphone, label: "Low Cost Advertising" },
                            { icon: TrendingUp, label: "Boost Business" },
                        ].map((p) => (
                            <div
                                key={p.label}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-border rounded-full text-sm font-semibold text-foreground shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                            >
                                <p.icon size={16} className="text-primary" />
                                {p.label}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default WhyChooseSection;
