import { TreeNode } from "./TreeNode";

export const FileTree = ({ data }) => {
    return (
        <div>
            <TreeNode node={data.root} />
        </div>
    );
};
