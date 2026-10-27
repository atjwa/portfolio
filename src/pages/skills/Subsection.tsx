import { useState } from "react";

const Subsection = ({ title, className, hasDivider, description, children }: { title: string; className?: string; hasDivider?: boolean; description?: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonClassName = isOpen ? `${className}-button active` : `${className}-button`;
    return (
        <div className={className}>
            <button className={`${className}-button ${buttonClassName}`} onClick={() => setIsOpen(!isOpen)}>
                <h2 className={className}>{title}</h2>
                {description && <p>{description}</p>}
            </button>
           
            { isOpen &&
                 <div className={`${className}-content`}>{children}</div>
            }
            {hasDivider && <hr className="subsection-divider" />}
        </div>
    );
};

export default Subsection;
