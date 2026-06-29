import InfiniteMarquee from "@/components/animations/InfiniteMarquee";
import { Monitor, Printer, Camera, Wifi, Laptop, Keyboard, Server } from "lucide-react";

const categories = [
    { label: "Computer Dealers", icon: Monitor },
    { label: "Printer Vendors", icon: Printer },
    { label: "CCTV Installers", icon: Camera },
    { label: "Networking Experts", icon: Wifi },
    { label: "Laptop Repair", icon: Laptop },
    { label: "Accessories", icon: Keyboard },
    { label: "IT Solutions", icon: Server },
];

const PartnersMarquee = () => {
    return (
        <section className="py-16 relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <InfiniteMarquee
                items={categories}
                speed={35}
                renderItem={(item) => (
                    <div className="flex items-center gap-3 whitespace-nowrap select-none">
                        <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center">
                            <item.icon size={18} className="text-primary/50" />
                        </div>
                        <span className="text-lg font-semibold text-foreground/20 tracking-wide">
                            {item.label}
                        </span>
                    </div>
                )}
            />
        </section>
    );
};

export default PartnersMarquee;
