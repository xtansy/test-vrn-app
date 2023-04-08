import "./TreeNode.scss";

import { useState } from "react";

import { Node } from "../../ui";

export const TreeNode = ({ node }) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="treeNode">
            <div className="treeNode__content" onClick={handleToggle}>
                {hasChildren && (isOpen ? "👇" : "👉")}
                <Node value={node.value} isWithTooltip={!!node.value.cityId} />
            </div>
            {
                hasChildren && isOpen && (
                    <div style={{ marginLeft: "2rem" }}>
                        {node.children.map((child, i) => {
                            const key = Math.round(Math.random() * 10000);
                            return (
                                <TreeNode key={key} node={child} />
                            )
                        })}
                    </div>
                )
            }
        </div >
    );
};
