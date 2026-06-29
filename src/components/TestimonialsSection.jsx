import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const testimonials = [
    { text: "Best place to find trusted IT vendors! Market Source made my search incredibly easy and fast.", author: "Saiyam", role: "College Student", color: "from-blue-500 to-indigo-500" },
    { text: "Very professional and easy to use directory. Found exactly what I needed for my office setup.", author: "Tirth", role: "Job Person", color: "from-emerald-500 to-teal-500" },
    { text: "Everything from laptops to accessories—easy to explore, easy to connect. Great platform!", author: "Priya", role: "Customer", color: "from-violet-500 to-purple-500" },
];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
    };

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                        <span className="w-8 h-px bg-primary" />
                        Testimonials
                        <span className="w-8 h-px bg-primary" />
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-tight">
                        What Our <span className="text-gradient-brand">Clients Say</span>
                    </h2>
                </FadeIn>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="glass-card-solid p-10 md:p-14"
                            >
                                {/* Quote icon */}
                                <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-6">
                                    <Quote size={22} className="text-primary" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, s) => (
                                        <motion.div
                                            key={s}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: s * 0.08 }}
                                        >
                                            <Star size={18} className="fill-amber-400 text-amber-400" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Quote text */}
                                <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                                    "{testimonials[current].text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
                                        {testimonials[current].author[0]}
                                    </div>
                                    <div>
                                        <div className="text-base font-semibold text-foreground">{testimonials[current].author}</div>
                                        <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-gray-50 hover:border-primary/30 transition-all shadow-sm"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={18} className="text-foreground" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === current ? "w-8 bg-primary" : "w-2 bg-gray-200 hover:bg-gray-300"
                                    }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-gray-50 hover:border-primary/30 transition-all shadow-sm"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={18} className="text-foreground" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
