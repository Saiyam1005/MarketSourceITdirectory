import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Wrench, Phone, Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            <div className="pt-28 pb-10 px-6 relative">
                <div className="absolute inset-0 gradient-bg" />
                <div className="max-w-7xl mx-auto relative">
                    <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 text-sm">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Authorized Dealers
                    </h1>
                    <p className="text-muted-foreground mb-6">Browse our network of {dealers.length}+ verified IT vendors (2026)</p>

                    {/* Search */}
                    <div className="relative max-w-md">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search by name, service or area..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full h-12 pl-11 pr-4 rounded-full bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Dealers Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-16 relative">
                {loading ? (
                    <div className="text-center text-muted-foreground py-20">Loading dealers...</div>
                ) : filtered.length === 0 ? (
                    <div className="text-center text-muted-foreground py-20">No dealers found matching "{query}"</div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.map((d, i) => (
                            <motion.div
                                key={`${d.name}-${i}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: Math.min(i * 0.02, 0.5) }}
                                className="glass-card p-5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4 border border-primary/20">
                                    {d.name}
                                </div>
                                <div className="space-y-3 bg-secondary/50 rounded-xl p-4">
                                    <div className="flex gap-2 text-sm">
                                        <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                                        <span className="text-foreground">{d.address || "Not Available"}</span>
                                    </div>
                                    <div className="flex gap-2 text-sm">
                                        <Wrench size={16} className="text-primary shrink-0 mt-0.5" />
                                        <span className="text-foreground">{d.services || "Not Available"}</span>
                                    </div>
                                    <div className="flex gap-2 text-sm">
                                        <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                                        <span className="text-foreground">{d.mobile || "Not Available"}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Dealers;
