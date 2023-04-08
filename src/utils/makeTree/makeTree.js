import { Node, Tree } from "../";

export const makeTree = (citienz) => {
    const tree = new Tree("root");

    for (let i = 0; i < citienz.length; i++) {
        let temp = tree.root;

        for (let j = 0; j < citienz[i].groups.length; j++) {
            let name = citienz[i].groups[j].name;
            let elem = temp.children.find((child) => child.value.name === name);
            if (!elem) {
                const node = new Node({ name: name });
                temp.addChild(node);
                temp = node;
                continue;
            }
            temp = elem;
        }

        const humanNode = new Node({
            name: citienz[i].name,
            cityId: citienz[i].city_id,
        });

        temp.addChild(humanNode);
    }

    return tree;
};
