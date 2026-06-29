import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MessageCircle, ArrowRight, Send } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import logo from "@/assets/logo2.png";

const quickLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Directories", href: "/#directory" },
    { label: "Services", href: "/#services" },
    { label: "Dealers", href: "/dealers" },
    { label: "Contact", href: "/#contact" },
];

const services = [
    "Computer Dealers",
    "Printer Vendors",
    "CCTV Installation",
    "Networking",
    "Laptop Repair",
    "Accessories",
];

const socialLinks = [
    { href: "https://www.instagram.com/marketsourcedirectory", icon: Instagram, label: "Instagram" },
    { href: "https://www.facebook.com/share/19Mo9h4PQa/", icon: Facebook, label: "Facebook" },
    { href: "https://wa.me/9428804075", icon: MessageCircle, label: "WhatsApp" },
    { href: "mailto:marketsourcedir@gmail.com", icon: Mail, label: "Email" },
];

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleNavClick = (href) => {
        if (href.startsWith("/#")) {
            const id = href.replace("/#", "");
            if (window.location.pathname === "/") {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = href;
            }
        }
    };

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient top border */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-8">
                    <FadeIn>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                            {/* Brand */}
                            <div className="lg:col-span-1">
                                <img src={logo} alt="MarketSource Logo" className="h-12 w-auto object-contain mb-4" />
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    Ahmedabad's trusted IT directory connecting customers with verified dealers and service providers since 2000.
                                </p>

                                {/* Social icons */}
                                <div className="flex gap-3">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-full bg-gray-50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                                            aria-label={link.label}
                                        >
                                            <link.icon size={16} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-display font-bold text-foreground mb-4 text-sm tracking-wide">Quick Links</h4>
                                <ul className="space-y-2.5">
                                    {quickLinks.map((link) => {
                                        const isLink = link.href.startsWith("/") && !link.href.startsWith("/#");
                                        return (
                                            <li key={link.label}>
                                                {isLink ? (
                                                    <Link
                                                        to={link.href}
                                                        className="group text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                                                    >
                                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                        {link.label}
                                                    </Link>
                                                ) : (
                                                    <button
                                                        onClick={() => handleNavClick(link.href)}
                                                        className="group text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                                                    >
                                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                        {link.label}
                                                    </button>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Services */}
                            <div>
                                <h4 className="font-display font-bold text-foreground mb-4 text-sm tracking-wide">Services</h4>
                                <ul className="space-y-2.5">
                                    {services.map((service) => (
                                        <li key={service} className="text-sm text-muted-foreground">
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div>
                                <h4 className="font-display font-bold text-foreground mb-4 text-sm tracking-wide">Stay Updated</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Get notified about new directory releases and updates.
                                </p>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        window.open(`mailto:marketsourcedir@gmail.com?subject=Newsletter Subscription&body=Please add ${email} to your newsletter.`, "_self");
                                        setEmail("");
                                    }}
                                    className="flex gap-2"
                                >
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="px-3 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-sm"
                                        aria-label="Subscribe"
                                    >
                                        <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Bottom bar */}
                    <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-muted-foreground text-xs">
                            &copy; {new Date().getFullYear()} Market Source IT Directory. All rights reserved.
                        </p>
                        <p className="text-muted-foreground text-xs">
                            Made with ❤️ in Ahmedabad
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
