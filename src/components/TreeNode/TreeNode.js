import "./TreeNode.scss";

import { useState } from "react";

import { Node } from "../../ui";
import { NameNode } from "../";

export const TreeNode = ({ node }) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const hasChildren = node.children && node.children.length > 0;
    const isNameNode = !!node.value.cityId;

    return (
        <div className="treeNode">
            <div className="treeNode__content" onClick={handleToggle}>
                {hasChildren && (isOpen ? "👇" : "👉")}
                {
                    isNameNode
                        ? <NameNode value={node.value} />
                        : <Node value={node.value} />
                }
            </div>
            {
                hasChildren && isOpen && (
                    <div style={{ marginLeft: "2rem" }}>
                        {node.children.map((child) => {
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
