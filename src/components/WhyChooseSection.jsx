import { motion } from "framer-motion";
import { ShieldCheck, Gift, Users, MessageCircle, Megaphone, TrendingUp } from "lucide-react";

const reasons = [
    { icon: ShieldCheck, title: "Verified Vendors", desc: "All listings are thoroughly checked for quality." },
    { icon: Gift, title: "Free Access", desc: "Unlimited free access to our digital directory." },
    { icon: Users, title: "Trusted by Thousands", desc: "Over 3,000 dealers rely on our network." },
    { icon: MessageCircle, title: "WhatsApp Connect", desc: "Easy contact options directly via WhatsApp." },
];

const pills = [
    { icon: Megaphone, label: "Low Cost Advertising" },
    { icon: TrendingUp, label: "Boost Business" },
];

const WhyChooseSection = () => {
    return (
        <section className="section-padding bg-background relative">
            <div className="absolute inset-0 gradient-bg" />
            <div className="max-w-5xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                        Why Choose Us?
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                                <r.icon size={22} className="text-primary" />
                            </div>
                            <h3 className="font-display font-bold text-sm text-foreground mb-1">{r.title}</h3>
                            <p className="text-xs text-muted-foreground">{r.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {pills.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-3 glass-card text-sm font-medium text-foreground"
                        >
                            <p.icon size={16} className="text-primary" />
                            {p.label}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
