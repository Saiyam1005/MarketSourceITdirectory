import logo from "@/assets/logo2.png";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <img src={logo} alt="MarketSource Logo" className="h-10 w-auto object-contain" />
                <p className="text-muted-foreground text-xs">
                    &copy; {new Date().getFullYear()} Market Source IT Directory. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
