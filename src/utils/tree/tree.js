export class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    removeChild(index) {
        if (index > -1 && index < this.children.length) {
            this.children.splice(index, 1);
        }
    }

    find(item) {
        return this.children.includes(item);
    }
}

export class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    traverseDF(callback) {
        (function recurse(currentNode) {
            for (
                let i = 0, length = currentNode.children.length;
                i < length;
                i++
            ) {
                recurse(currentNode.children[i]);
            }
            callback(currentNode);
        })(this.root);
    }

    traverseBF(callback) {
        let queue = [this.root];
        let currentNode = queue.shift();

        while (currentNode) {
            for (
                let i = 0, length = currentNode.children.length;
                i < length;
                i++
            ) {
                queue.push(currentNode.children[i]);
            }
            callback(currentNode);
            currentNode = queue.shift();
        }
    }
}