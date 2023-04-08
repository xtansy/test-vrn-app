import React, { useState } from "react";

export const TreeNode = ({ node }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const hasChildren = node.children && node.children.length > 0;

    return (
        <div>
            <div onClick={handleToggle}>
                {hasChildren && (isOpen ? "👇" : "👉")}
                {node.value}
            </div>
            {hasChildren && isOpen && (
                <div style={{ marginLeft: "1rem" }}>
                    {node.children.map((child) => (
                        <TreeNode key={child.value} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
};
