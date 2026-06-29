import { motion } from "framer-motion";

const blobs = [
    {
        color: "bg-primary/[0.06]",
        size: "w-[500px] h-[500px]",
        position: "top-[-10%] left-[-5%]",
        delay: 0,
    },
    {
        color: "bg-secondary/[0.04]",
        size: "w-[400px] h-[400px]",
        position: "top-[30%] right-[-8%]",
        delay: 2,
    },
    {
        color: "bg-accent/[0.04]",
        size: "w-[350px] h-[350px]",
        position: "bottom-[-5%] left-[20%]",
        delay: 4,
    },
];

const GradientBlobs = ({ className = "" }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {blobs.map((blob, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${blob.size} ${blob.position} ${blob.color} rounded-full blur-3xl`}
                    animate={{
                        borderRadius: [
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "30% 60% 70% 40% / 50% 60% 30% 60%",
                            "50% 60% 30% 60% / 30% 40% 70% 60%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: blob.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default GradientBlobs;
