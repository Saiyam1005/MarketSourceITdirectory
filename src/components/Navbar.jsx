import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/animations/MagneticButton";
import logo from "@/assets/logo2.png";

const navItems = [
    { label: "About", href: "/#about" },
    { label: "Directories", href: "/#directory" },
    { label: "Services", href: "/#services" },
    { label: "Dealers", href: "/dealers" },
    { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleNavClick = (href) => {
        setIsOpen(false);
        if (href.startsWith("/#")) {
            const id = href.replace("/#", "");
            if (location.pathname === "/") {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = href;
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`mx-auto max-w-5xl flex items-center justify-between h-14 px-5 sm:px-6 rounded-full transition-all duration-500 ${
                    scrolled
                        ? "glass-navbar shadow-lg"
                        : "bg-white/0"
                }`}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center relative z-10">
                    <img src={logo} alt="MarketSource Logo" className="h-10 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isLink = item.href.startsWith("/") && !item.href.startsWith("/#");
                        const commonClasses = "relative px-4 py-2 text-sm font-medium transition-colors rounded-full";

                        const content = (
                            <span className="relative">
                                {item.label}
                                {/* Hover underline */}
                                <motion.span
                                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-primary rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: activeItem === item.label ? 1 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ transformOrigin: "left" }}
                                />
                            </span>
                        );

                        return isLink ? (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`${commonClasses} ${
                                    location.pathname === item.href
                                        ? "text-primary"
                                        : "text-foreground/70 hover:text-foreground"
                                }`}
                                onMouseEnter={() => setActiveItem(item.label)}
                                onMouseLeave={() => setActiveItem(null)}
                            >
                                {content}
                            </Link>
                        ) : (
                            <button
                                key={item.label}
                                onClick={() => handleNavClick(item.href)}
                                className={`${commonClasses} text-foreground/70 hover:text-foreground`}
                                onMouseEnter={() => setActiveItem(item.label)}
                                onMouseLeave={() => setActiveItem(null)}
                            >
                                {content}
                            </button>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <MagneticButton
                        onClick={() => handleNavClick("/#contact")}
                        className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                    >
                        Get Listed
                    </MagneticButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-foreground p-2 rounded-lg relative z-10"
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={22} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={22} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </motion.div>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 top-0 bg-white/95 backdrop-blur-xl z-40"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-2">
                            {navItems.map((item, i) => {
                                const isLink = item.href.startsWith("/") && !item.href.startsWith("/#");

                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: i * 0.06, duration: 0.3 }}
                                    >
                                        {isLink ? (
                                            <Link
                                                to={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-8 py-4 text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={() => handleNavClick(item.href)}
                                                className="block px-8 py-4 text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                                            >
                                                {item.label}
                                            </button>
                                        )}
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: navItems.length * 0.06, duration: 0.3 }}
                                className="mt-6"
                            >
                                <button
                                    onClick={() => handleNavClick("/#contact")}
                                    className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow-lg shadow-primary/20"
                                >
                                    Get Listed
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
