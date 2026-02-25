import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import launchImg from "@/assets/launch.jpg";

const LaunchPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                    onClick={() => setShow(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="relative bg-navy rounded-2xl overflow-hidden max-w-[280px] w-full shadow-2xl border border-primary-foreground/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-2 right-2 z-10 text-primary-foreground/80 hover:text-primary-foreground bg-black/40 rounded-full p-1 transition-colors"
                        >
                            <X size={16} />
                        </button>
                        <img
                            src={launchImg}
                            alt="New Directory Launch"
                            className="w-full h-auto object-contain"
                        />
                        <div className="p-3">
                            <a
                                href="https://drive.google.com/file/d/1bnHWyVmUSlqdbcKS1Je8MeguRfwdbmZH/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-4 py-2.5 bg-accent text-accent-foreground font-bold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all text-sm"
                            >
                                View 2026 Directory
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LaunchPopup;
