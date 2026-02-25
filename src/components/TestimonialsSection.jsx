import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    { text: "Best place to find trusted IT vendors! Market Source made my search incredibly easy and fast.", author: "Saiyam", role: "College Student", color: "bg-purple-500" },
    { text: "Very professional and easy to use directory. Found exactly what I needed for my office setup.", author: "Tirth", role: "Job Person", color: "bg-green-500" },
    { text: "Everything from laptops to accessories—easy to explore, easy to connect. Great platform!", author: "Priya", role: "Customer", color: "bg-primary" },
];

const TestimonialsSection = () => {
    return (
        <section className="section-padding bg-background relative">
            <div className="absolute inset-0 gradient-bg" />
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                        What Our Clients Say
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center text-primary-foreground text-xs font-bold`}>
                                    {t.author[0]}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-foreground">{t.author}</div>
                                    <div className="text-xs text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
