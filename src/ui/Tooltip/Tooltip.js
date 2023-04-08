import "./Tooltip.scss";

import { useState } from "react";

export const Tooltip = ({ children, text }) => {
    const [isVisible, setIsVisible] = useState(false);

    const onMouseEnter = () => {
        setIsVisible(true);
    };

    const onMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        <div className="tooltip" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
            {isVisible &&
                <div className="tooltip__content">
                    <p>{text}</p>
                </div>}
        </div>
    );
};

