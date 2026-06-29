import FadeIn from "@/components/animations/FadeIn";
import TiltCard from "@/components/animations/TiltCard";
import laptopImg from "@/assets/laptop.jpg";
import cctvImg from "@/assets/cctv.jpg";
import printerImg from "@/assets/printer.jpg";
import accessImg from "@/assets/access.jpg";
import { Laptop, Camera, Printer, Keyboard } from "lucide-react";

const services = [
    { img: laptopImg, icon: Laptop, title: "Laptop & Desktop", desc: "Find the best deals on high-performance machines for gaming and work.", gradient: "from-blue-500/20 to-indigo-500/20" },
    { img: cctvImg, icon: Camera, title: "CCTV Installation", desc: "Secure your premises with top-tier surveillance solutions.", gradient: "from-violet-500/20 to-purple-500/20" },
    { img: printerImg, icon: Printer, title: "Printer Solutions", desc: "Commercial and personal printing setup and maintenance.", gradient: "from-cyan-500/20 to-teal-500/20" },
    { img: accessImg, icon: Keyboard, title: "Accessories", desc: "Everything from keyboards to cables and specialized hardware.", gradient: "from-emerald-500/20 to-green-500/20" },
];

const ServicesSection = () => {
    return (
        <section id="services" className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                        <span className="w-8 h-px bg-primary" />
                        What We Offer
                        <span className="w-8 h-px bg-primary" />
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-tight">
                        Your Gateway to <span className="text-gradient-brand">Verified Vendors</span>
                    </h2>
                </FadeIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <FadeIn key={service.title} delay={i * 0.1}>
                            <TiltCard tiltAmount={8} className="group h-full">
                                <div className="h-full bg-white border border-border rounded-2xl overflow-hidden shadow-sm card-hover">
                                    {/* Product image */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            loading="lazy"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

                                        {/* Icon overlay */}
                                        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                            <service.icon size={18} className="text-primary" />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="p-5">
                                        <h3 className="font-display font-bold text-lg text-foreground mb-2">{service.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                                    </div>
                                </div>
                            </TiltCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
