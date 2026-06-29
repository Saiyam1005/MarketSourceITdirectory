const InfiniteMarquee = ({ items = [], speed = 40, className = "", renderItem }) => {
    const duration = `${speed}s`;

    return (
        <div className={`overflow-hidden ${className}`}>
            <div
                className="marquee-track"
                style={{ animationDuration: duration }}
            >
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="shrink-0 px-6 md:px-10">
                        {renderItem ? renderItem(item, i) : (
                            <span className="text-lg md:text-xl font-semibold text-muted-foreground/40 whitespace-nowrap select-none">
                                {item}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteMarquee;
