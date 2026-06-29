import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin, Send, User, FileText, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import MagneticButton from "@/components/animations/MagneticButton";
import GradientBlobs from "@/components/animations/GradientBlobs";

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [focused, setFocused] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Build WhatsApp message
        const msg = `Hi! I'm ${formData.name}.\nEmail: ${formData.email}\n\n${formData.message}`;
        window.open(`https://wa.me/9428804075?text=${encodeURIComponent(msg)}`, "_blank");
    };

    const socialLinks = [
        {
            href: "https://www.instagram.com/marketsourcedirectory",
            icon: Instagram,
            label: "@marketsourcedirectory",
            hoverColor: "hover:border-pink-300 hover:bg-pink-50/50",
            iconHover: "group-hover:text-pink-500",
        },
        {
            href: "https://www.facebook.com/share/19Mo9h4PQa/",
            icon: Facebook,
            label: "Market Source IT Directory",
            hoverColor: "hover:border-blue-300 hover:bg-blue-50/50",
            iconHover: "group-hover:text-blue-500",
        },
        {
            href: "mailto:marketsourcedir@gmail.com",
            icon: Mail,
            label: "marketsourcedir@gmail.com",
            hoverColor: "hover:border-red-300 hover:bg-red-50/50",
            iconHover: "group-hover:text-red-500",
        },
    ];

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <GradientBlobs className="opacity-40" />

            <div className="max-w-6xl mx-auto relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                        <span className="w-8 h-px bg-primary" />
                        Get In Touch
                        <span className="w-8 h-px bg-primary" />
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-tight">
                        Let's <span className="text-gradient-brand">Connect</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto mt-3 leading-relaxed">
                        To get listed or to request a directory PDF, reach out to us directly.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left - Contact Details */}
                    <FadeIn direction="left">
                        <div className="space-y-6">
                            {/* WhatsApp buttons */}
                            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                                <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                                    <MessageCircle size={20} className="text-green-500" />
                                    WhatsApp Us
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://wa.me/9428804075"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 border border-green-200 text-green-700 font-medium text-sm hover:bg-green-100 hover:shadow-md transition-all"
                                    >
                                        <Phone size={14} />
                                        Contact 1
                                    </a>
                                    <a
                                        href="https://wa.me/9687545841"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 border border-green-200 text-green-700 font-medium text-sm hover:bg-green-100 hover:shadow-md transition-all"
                                    >
                                        <Phone size={14} />
                                        Contact 2
                                    </a>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm space-y-3">
                                <h3 className="font-display font-bold text-lg text-foreground mb-2">Follow Us</h3>
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group flex items-center gap-4 px-4 py-3 rounded-xl border border-transparent ${link.hoverColor} transition-all duration-300`}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gray-50 border border-border flex items-center justify-center transition-all duration-300">
                                            <link.icon size={18} className={`text-muted-foreground transition-colors ${link.iconHover}`} />
                                        </div>
                                        <span className="font-medium text-foreground text-sm group-hover:translate-x-1 transition-transform break-all">
                                            {link.label}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            {/* Map */}
                            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                                <div className="p-4 border-b border-border">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                        <MapPin size={16} className="text-primary" />
                                        Ahmedabad, Gujarat
                                    </div>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74801041467!2d72.41570325!3d23.020472800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703750000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Map of Ahmedabad"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right - Contact Form */}
                    <FadeIn direction="right">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-6 h-fit"
                        >
                            <h3 className="font-display font-bold text-xl text-foreground mb-2">Send us a message</h3>

                            {/* Name */}
                            <div className="relative">
                                <label
                                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                                        focused.name || formData.name
                                            ? "top-1 text-[10px] text-primary font-semibold"
                                            : "top-3.5 text-sm text-muted-foreground"
                                    }`}
                                >
                                    Your Name
                                </label>
                                <div className="absolute left-4 top-3.5 hidden">
                                    <User size={16} />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocused({ ...focused, name: true })}
                                    onBlur={() => setFocused({ ...focused, name: false })}
                                    required
                                    className="w-full pt-5 pb-2 px-4 rounded-xl bg-gray-50 border border-border focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 text-sm text-foreground outline-none transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <label
                                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                                        focused.email || formData.email
                                            ? "top-1 text-[10px] text-primary font-semibold"
                                            : "top-3.5 text-sm text-muted-foreground"
                                    }`}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused({ ...focused, email: true })}
                                    onBlur={() => setFocused({ ...focused, email: false })}
                                    required
                                    className="w-full pt-5 pb-2 px-4 rounded-xl bg-gray-50 border border-border focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 text-sm text-foreground outline-none transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label
                                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                                        focused.message || formData.message
                                            ? "top-1 text-[10px] text-primary font-semibold"
                                            : "top-3.5 text-sm text-muted-foreground"
                                    }`}
                                >
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused({ ...focused, message: true })}
                                    onBlur={() => setFocused({ ...focused, message: false })}
                                    required
                                    rows={4}
                                    className="w-full pt-5 pb-2 px-4 rounded-xl bg-gray-50 border border-border focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 text-sm text-foreground outline-none transition-all resize-none"
                                />
                            </div>

                            <MagneticButton
                                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                            >
                                <Send size={16} />
                                Send via WhatsApp
                                <ArrowRight size={16} />
                            </MagneticButton>

                            <p className="text-xs text-muted-foreground text-center">
                                Your message will be sent via WhatsApp for instant response.
                            </p>
                        </form>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
