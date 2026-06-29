import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directions = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    blur: {
        initial: { opacity: 0, filter: "blur(10px)" },
        animate: { opacity: 1, filter: "blur(0px)" },
    },
    none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

const FadeIn = ({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
    margin = "-60px",
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin });
    const variant = directions[direction] || directions.up;

    return (
        <motion.div
            ref={ref}
            initial={variant.initial}
            animate={isInView ? variant.animate : variant.initial}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
