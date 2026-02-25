import { motion } from "framer-motion";
import laptopImg from "@/assets/laptop.jpg";
import cctvImg from "@/assets/cctv.jpg";
import printerImg from "@/assets/printer.jpg";
import accessImg from "@/assets/access.jpg";

const services = [
    { img: laptopImg, title: "Laptop & Desktop", desc: "Find the best deals on high-performance machines for gaming and work." },
    { img: cctvImg, title: "CCTV Installation", desc: "Secure your premises with top-tier surveillance solutions." },
    { img: printerImg, title: "Printer Solutions", desc: "Commercial and personal printing setup and maintenance." },
    { img: accessImg, title: "Accessories", desc: "Everything from keyboards to cables and specialized hardware." },
];

const ServicesSection = () => {
    return (
        <section id="services" className="section-padding bg-background relative">
            <div className="absolute inset-0 gradient-bg" />
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">What we offer</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                        Your Gateway to Verified Vendors
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-card overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Product image */}
                            <div className="relative h-44 w-full overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                            </div>

                            {/* Text */}
                            <div className="p-5">
                                <h3 className="font-display font-bold text-lg text-foreground mb-1">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
