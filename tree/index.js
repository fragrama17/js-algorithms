// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(child) {
        this.children.push(new Node(child));
    }

    remove(child) {
        this.children = this.children.filter(c => c !== child);
        // const index = this.children.indexOf(child);
        // this.children.splice(index, 1);
    }

}

class Tree {

    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const traverse = [];
        traverse.push(this.root);
        while (traverse.length) {
            let firstNode = traverse.shift();
            traverse.push(...firstNode.children);
            fn(firstNode);
        }
    }


    traverseDF(fn) {
        let traverse = [];
        traverse.push(this.root);
        while (traverse.length) {
            let firstNode = traverse.shift();
            // let tail = [...traverse];
            // traverse = [];
            // traverse.push(...firstNode.children);
            // traverse.push(...tail);
            traverse.unshift(...firstNode.children);
            fn(firstNode);
        }
    }
}

module.exports = {Tree, Node};
