import { useState, useEffect, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MouseFollower = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isVisible, setIsVisible] = useState(false);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    const handleMouseMove = useCallback((e) => {
        cursorX.set(e.clientX - 20);
        cursorY.set(e.clientY - 20);
        if (!isVisible) setIsVisible(true);
    }, [cursorX, cursorY, isVisible]);

    const handleMouseLeave = useCallback(() => {
        setIsVisible(false);
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    // Don't render on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9998]"
            style={{ x, y }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-10 h-10 rounded-full bg-primary/10 blur-sm" />
        </motion.div>
    );
};

export default MouseFollower;
