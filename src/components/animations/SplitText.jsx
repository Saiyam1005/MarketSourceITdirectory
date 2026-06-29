import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SplitText = ({
    children,
    className = "",
    delay = 0,
    splitBy = "char", // "char" | "word"
    staggerDelay = 0.03,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const text = typeof children === "string" ? children : "";
    const items = splitBy === "char" ? text.split("") : text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            className={`inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {items.map((item, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    className="inline-block"
                    style={{ whiteSpace: "pre" }}
                >
                    {splitBy === "word" ? (i < items.length - 1 ? item + "\u00A0" : item) : item}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default SplitText;
