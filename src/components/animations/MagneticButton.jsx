import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MagneticButton = ({ children, className = "", strength = 0.3, onClick, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const handleClick = (e) => {
        // Ripple effect
        const btn = ref.current;
        if (btn) {
            const rect = btn.getBoundingClientRect();
            btn.style.setProperty("--ripple-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
            btn.style.setProperty("--ripple-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
        }
        onClick?.(e);
    };

    return (
        <motion.button
            ref={ref}
            className={`btn-ripple ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 300, damping: 15, mass: 0.2 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default MagneticButton;
