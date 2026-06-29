import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Wrench, Phone, Search, ArrowLeft, BadgeCheck, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import GradientBlobs from "@/components/animations/GradientBlobs";

function parseDealers(text) {
    text = text.replace(/•/g, "").replace(/PAGE NO.*$/gim, "").trim();
    const lines = text.split("\n");
    const dealers = [];
    let current = null;

    lines.forEach((rawLine) => {
        const line = rawLine.trim();
        if (!line) return;

        if (line.startsWith("Name:")) {
            if (current) dealers.push(current);
            current = { name: line.replace("Name:", "").trim() };
        } else if (current && line.startsWith("Address:")) {
            current.address = line.replace("Address:", "").trim();
        } else if (current && /services:/i.test(line)) {
            current.services = line.split(":").slice(1).join(":").trim();
        } else if (current && /MO\.NO:/i.test(line)) {
            current.mobile = line.split(":").slice(1).join(":").trim();
        }
    });

    if (current) dealers.push(current);
    return dealers;
}

const DealerCard = ({ dealer, index }) => {
    const initials = dealer.name
        ? dealer.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
        : "??";

    const servicesTags = dealer.services
        ? dealer.services.split(",").map(s => s.trim()).filter(Boolean).slice(0, 3)
        : [];

    const colors = [
        "from-blue-500 to-indigo-500",
        "from-violet-500 to-purple-500",
        "from-cyan-500 to-teal-500",
        "from-emerald-500 to-green-500",
        "from-rose-500 to-pink-500",
        "from-amber-500 to-orange-500",
    ];
    const gradient = colors[index % colors.length];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: Math.min(index * 0.02, 0.4), duration: 0.3 }}
            className="group bg-white border border-border rounded-2xl p-5 shadow-sm card-hover overflow-hidden relative"
        >
            {/* Verified badge */}
            <div className="absolute top-4 right-4">
                <BadgeCheck size={18} className="text-primary" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-sm font-bold shadow-sm shrink-0`}>
                    {initials}
                </div>
                <div className="min-w-0">
                    <h3 className="font-display font-bold text-foreground text-sm truncate">{dealer.name}</h3>
                    {servicesTags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                            {servicesTags.map((tag) => (
                                <span key={tag} className="px-2 py-0.5 bg-primary/[0.06] text-primary text-[10px] font-medium rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Details */}
            <div className="space-y-2.5 bg-gray-50 rounded-xl p-3.5">
                <div className="flex gap-2.5 text-sm">
                    <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 leading-snug text-xs">{dealer.address || "Address not available"}</span>
                </div>
                {dealer.services && (
                    <div className="flex gap-2.5 text-sm">
                        <Wrench size={15} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 leading-snug text-xs">{dealer.services}</span>
                    </div>
                )}
                <div className="flex gap-2.5 text-sm">
                    <Phone size={15} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-xs">{dealer.mobile || "Not available"}</span>
                </div>
            </div>

            {/* Actions */}
            {dealer.mobile && (
                <div className="flex gap-2 mt-4">
                    <a
                        href={`tel:${dealer.mobile.split(",")[0].trim().replace(/\s/g, "")}`}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-primary/[0.06] text-primary text-xs font-semibold rounded-xl hover:bg-primary/10 transition-colors"
                    >
                        <Phone size={12} />
                        Call
                    </a>
                    <a
                        href={`https://wa.me/${dealer.mobile.split(",")[0].trim().replace(/[\s-]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-green-50 text-green-600 text-xs font-semibold rounded-xl hover:bg-green-100 transition-colors"
                    >
                        <MessageCircle size={12} />
                        WhatsApp
                    </a>
                </div>
            )}
        </motion.div>
    );
};

const Dealers = () => {
    const [dealers, setDealers] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/dealers.txt")
            .then((res) => res.text())
            .then((text) => {
                setDealers(parseDealers(text));
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const filtered = useMemo(() => {
        if (!query) return dealers;
        const q = query.toLowerCase();
        return dealers.filter(
            (d) =>
                d.name?.toLowerCase().includes(q) ||
                d.services?.toLowerCase().includes(q) ||
                d.address?.toLowerCase().includes(q)
        );
    }, [dealers, query]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <div className="pt-28 pb-12 px-6 relative overflow-hidden">
                <GradientBlobs className="opacity-30" />
                <div className="absolute inset-0 grid-pattern pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm font-medium">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
                            Authorized <span className="text-gradient-brand">Dealers</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="text-muted-foreground mb-8 max-w-lg">
                            Browse our network of {dealers.length}+ verified IT vendors (2026)
                        </p>
                    </FadeIn>

                    {/* Search */}
                    <FadeIn delay={0.2}>
                        <div className="relative max-w-md">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search by name, service or area..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full h-12 pl-11 pr-10 rounded-2xl bg-white text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm shadow-sm transition-all"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    </FadeIn>

                    {query && (
                        <FadeIn delay={0}>
                            <p className="text-sm text-muted-foreground mt-4">
                                {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
                            </p>
                        </FadeIn>
                    )}
                </div>
            </div>

            {/* Dealers Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-16 relative">
                {loading ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white border border-border rounded-2xl p-5 animate-pulse">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-gray-100" />
                                    <div className="flex-1">
                                        <div className="h-4 bg-gray-100 rounded w-2/3 mb-2" />
                                        <div className="h-3 bg-gray-100 rounded w-1/2" />
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                                    <div className="h-3 bg-gray-100 rounded" />
                                    <div className="h-3 bg-gray-100 rounded w-3/4" />
                                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <FadeIn className="text-center py-20">
                        <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                            <Search size={28} className="text-muted-foreground" />
                        </div>
                        <p className="text-lg font-semibold text-foreground mb-2">No dealers found</p>
                        <p className="text-muted-foreground text-sm">
                            Try adjusting your search for "{query}"
                        </p>
                    </FadeIn>
                ) : (
                    <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <AnimatePresence>
                            {filtered.map((d, i) => (
                                <DealerCard key={`${d.name}-${i}`} dealer={d} index={i} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Dealers;
