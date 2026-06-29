import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import launchImg from "@/assets/launch.jpg";

const LaunchPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
                    onClick={() => setShow(false)}
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 10 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative bg-white rounded-3xl overflow-hidden max-w-[300px] w-full shadow-2xl border border-border"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-3 right-3 z-10 text-foreground/60 hover:text-foreground bg-white/80 backdrop-blur-sm rounded-full p-1.5 transition-colors shadow-sm"
                            aria-label="Close popup"
                        >
                            <X size={14} />
                        </button>

                        <img
                            src={launchImg}
                            alt="New Directory Launch"
                            className="w-full h-auto object-contain"
                        />

                        <div className="p-4">
                            <a
                                href="https://drive.google.com/file/d/1bnHWyVmUSlqdbcKS1Je8MeguRfwdbmZH/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full text-center px-4 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm"
                            >
                                <Sparkles size={14} />
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
