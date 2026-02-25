import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook, Mail } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="section-padding bg-background relative">
            <div className="absolute inset-0 gradient-bg" />
            <div className="max-w-4xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card overflow-hidden"
                >
                    <div className="p-10 md:p-14">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Contact Us</h2>
                        <p className="text-muted-foreground text-sm mb-10 max-w-md">
                            To get listed or to request a directory PDF, reach out to us directly.
                        </p>

                        <div className="space-y-5">
                            {/* WhatsApp */}
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://wa.me/9428804075"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-5 py-3 rounded-full bg-secondary border border-border hover:border-primary/30 transition-all"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                                        <MessageCircle size={16} className="text-green-400" />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">WhatsApp Us</span>
                                </a>
                                <a
                                    href="https://wa.me/9428804075"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border hover:border-primary/30 transition-all text-sm font-medium text-foreground"
                                >
                                    Contact 1
                                </a>
                                <a
                                    href="https://wa.me/9687545841"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border hover:border-primary/30 transition-all text-sm font-medium text-foreground"
                                >
                                    Contact 2
                                </a>
                            </div>

                            {/* Social links */}
                            <a
                                href="https://www.instagram.com/marketsourcedirectory"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 px-5 py-3 rounded-2xl hover:bg-secondary transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-pink-500/30 transition-all">
                                    <Instagram size={18} className="text-muted-foreground group-hover:text-pink-400 transition-colors" />
                                </div>
                                <span className="font-medium text-foreground group-hover:translate-x-1 transition-transform text-sm">@marketsourcedirectory</span>
                            </a>

                            <a
                                href="https://www.facebook.com/share/19Mo9h4PQa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 px-5 py-3 rounded-2xl hover:bg-secondary transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-blue-500/30 transition-all">
                                    <Facebook size={18} className="text-muted-foreground group-hover:text-blue-400 transition-colors" />
                                </div>
                                <span className="font-medium text-foreground group-hover:translate-x-1 transition-transform text-sm">Market Source IT Directory</span>
                            </a>

                            <a
                                href="mailto:marketsourcedir@gmail.com"
                                className="group flex items-center gap-4 px-5 py-3 rounded-2xl hover:bg-secondary transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-red-500/30 transition-all">
                                    <Mail size={18} className="text-muted-foreground group-hover:text-red-400 transition-colors" />
                                </div>
                                <span className="font-medium text-foreground group-hover:translate-x-1 transition-transform text-sm break-all">marketsourcedir@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
