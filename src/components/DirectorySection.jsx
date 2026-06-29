import { Download, Eye, Sparkles } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import TiltCard from "@/components/animations/TiltCard";

const directories = [
    { year: "2026", label: "NEW", url: "https://drive.google.com/file/d/1bnHWyVmUSlqdbcKS1Je8MeguRfwdbmZH/view?usp=sharing", cta: "View PDF" },
    { year: "2025", url: "https://drive.google.com/file/d/1g5ltarHjd_8qX5I_xJYlHMt5CpvKpPS5/view?usp=drive_link", cta: "View PDF" },
    { year: "2024", url: "https://drive.google.com/file/d/1KaZdPcRu0HP2j2qIIQSzuwt5JhmExcQw/view?usp=drive_link", cta: "View PDF" },
    { year: "2023", url: "https://drive.google.com/file/d/1DNx0K4PUd5porD7XaF1fttPl292C1gb0/view?usp=drive_link", cta: "View PDF" },
];

const DirectorySection = () => {
    return (
        <section id="directory" className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                        <span className="w-8 h-px bg-primary" />
                        Our Publications
                        <span className="w-8 h-px bg-primary" />
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground mb-4 tracking-tight">
                        Download Our <span className="text-gradient-brand">Directories</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                        Access our comprehensive vendor lists from past years. Digital copies available instantly.
                    </p>
                </FadeIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {directories.map((dir, i) => (
                        <FadeIn key={dir.year} delay={i * 0.1}>
                            <TiltCard tiltAmount={6} className="group h-full">
                                <div className="h-full bg-white border border-border rounded-2xl overflow-hidden shadow-sm card-hover gradient-border">
                                    {/* Book cover */}
                                    <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 text-center border-b border-border">
                                        {dir.label && (
                                            <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 bg-primary text-white text-[10px] font-bold uppercase rounded-lg shadow-sm shadow-primary/20">
                                                <Sparkles size={10} />
                                                {dir.label}
                                            </span>
                                        )}
                                        <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                                            {dir.year} Edition
                                        </div>
                                        <div className="font-display text-2xl font-extrabold text-foreground tracking-wider leading-tight">
                                            MARKET
                                            <br />
                                            SOURCE
                                        </div>
                                        <div className="text-[10px] text-muted-foreground tracking-[0.2em] mt-2 font-medium">
                                            IT DIRECTORY
                                        </div>

                                        {/* Preview hover overlay */}
                                        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl">
                                            <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
                                                <Eye size={20} className="text-primary" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="p-5">
                                        <a
                                            href={dir.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors group/link"
                                        >
                                            <Download size={14} className="group-hover/link:animate-bounce" />
                                            {dir.cta}
                                            <span className="block w-0 group-hover/link:w-4 transition-all duration-300 h-px bg-primary" />
                                        </a>
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

export default DirectorySection;
