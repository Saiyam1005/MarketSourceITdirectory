import { motion } from "framer-motion";
import { Download } from "lucide-react";

const directories = [
    { year: "2026", label: "NEW", url: "https://drive.google.com/file/d/1bnHWyVmUSlqdbcKS1Je8MeguRfwdbmZH/view?usp=sharing", cta: "View PDF" },
    { year: "2025", url: "https://drive.google.com/file/d/1g5ltarHjd_8qX5I_xJYlHMt5CpvKpPS5/view?usp=drive_link", cta: "View PDF" },
    { year: "2024", url: "https://drive.google.com/file/d/1KaZdPcRu0HP2j2qIIQSzuwt5JhmExcQw/view?usp=drive_link", cta: "View PDF" },
    { year: "2023", url: "https://drive.google.com/file/d/1DNx0K4PUd5porD7XaF1fttPl292C1gb0/view?usp=drive_link", cta: "View PDF" },
];

const DirectorySection = () => {
    return (
        <section id="directory" className="section-padding bg-background relative">
            <div className="absolute inset-0 gradient-bg" />
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Download Our Directories
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Access our comprehensive vendor lists from past years. Digital copies available instantly.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {directories.map((dir, i) => (
                        <motion.div
                            key={dir.year}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-card overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Book cover */}
                            <div className="relative bg-secondary p-8 text-center border-b border-border">
                                {dir.label && (
                                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase rounded-md">
                                        {dir.label}
                                    </span>
                                )}
                                <div className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                                    {dir.year} Edition
                                </div>
                                <div className="font-display text-xl font-bold text-foreground tracking-wide leading-tight">
                                    MARKET<br />SOURCE
                                </div>
                                <div className="text-[10px] text-muted-foreground tracking-widest mt-2">IT DIRECTORY</div>
                            </div>

                            {/* CTA */}
                            <div className="p-4">
                                <a
                                    href={dir.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
                                >
                                    <Download size={14} />
                                    {dir.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DirectorySection;
