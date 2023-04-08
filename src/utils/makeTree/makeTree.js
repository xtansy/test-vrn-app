import { Node, Tree } from "../tree/tree";

export const makeTree = (citienz) => {
    const tree = new Tree("root");

    for (let i = 0; i < citienz.length; i++) {
        let temp = tree.root;

        for (let j = 0; j < citienz[i].groups.length; j++) {
            let name = citienz[i].groups[j].name;
            let elem = temp.children.find((child) => child.value === name);
            if (!elem) {
                const node = new Node(name);
                temp.addChild(node);
                temp = node;
                continue;
            }
            temp = elem;
        }

        const nameNode = new Node(citienz[i].name);
        temp.addChild(nameNode);
    }

    return tree;
}