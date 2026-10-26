const Subsection = ({ title, className, hasDivider, description, children }: { title: string; className?: string; hasDivider?: boolean; description?: string; children: React.ReactNode }) => {
    return (
        <div className={className}>
            <button className={className}>
                <h2 className={className}>{title}</h2>
                {description && <p>{description}</p>}
                {children}
            </button>
            {hasDivider && <hr className="subsection-divider" />}
        </div>
    );
};

export default Subsection;
