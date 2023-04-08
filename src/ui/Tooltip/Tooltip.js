import "./Tooltip.scss";

import { useState } from "react";

export const Tooltip = ({
    children,
    text,
    isLoading,
    onMouseEnterCallback,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const onMouseEnter = () => {
        if (onMouseEnterCallback) {
            onMouseEnterCallback();
        }
        setIsVisible(true);
    };

    const onMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        <div
            className="tooltip"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
            {isVisible && !isLoading && (
                <div className="tooltip__content">
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};
