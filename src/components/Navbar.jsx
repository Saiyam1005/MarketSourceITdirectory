import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`flex items-center justify-between h-14 px-5 sm:px-6 rounded-full border transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-xl border-border shadow-lg shadow-primary/5"
                    : "bg-background/40 backdrop-blur-md border-border/50"
                    }`}
            >
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="MarketSource Logo" className="h-10 w-auto object-contain" />
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) =>
                        item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <button
                                key={item.label}
                                onClick={() => handleNavClick(item.href)}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
                            >
                                {item.label}
                            </button>
                        )
                    )}
                </div>

                <div className="hidden md:block">
                    <button
                        onClick={() => handleNavClick("/#contact")}
                        className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-all glow-blue"
                    >
                        Get Listed
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-foreground p-2 rounded-lg"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </motion.div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-2 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navItems.map((item) =>
                                item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={item.label}
                                        onClick={() => handleNavClick(item.href)}
                                        className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                                    >
                                        {item.label}
                                    </button>
                                )
                            )}
                            <button
                                onClick={() => handleNavClick("/#contact")}
                                className="block w-full mx-0 my-2 text-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full"
                            >
                                Get Listed
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
