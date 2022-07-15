// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let size = 0;
        if (!this.head) return size;
        size++;
        let hasNext = this.head.next;

        while (hasNext) {
            size++;
            hasNext = hasNext.next;
        }

        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;
        if (!this.head.next) return this.head;
        let element = this.head;

        while (element.next) {
            element = element.next;
        }

        return element;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let element = this.head;
        while (element.next) {
            if (!element.next.next) {
                element.next = null;
                break;
            }
            element = element.next;
        }
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data)
            return;
        }

        this.getLast().next = new Node(data);
    }

    getAt(index) {
        let counter = 0;
        if (index === 0) return this.head;
        if (!this.head) return null;
        counter++;
        let indexedElement = this.head;

        while (counter <= index && indexedElement) {
            counter++;
            indexedElement = indexedElement.next;
        }

        return indexedElement;
    }

    removeAt(index) {
        if (index === 0) return this.removeFirst();
        if (!this.head) return;
        const toRemove = this.getAt(index);
        if (!toRemove) return;

        const prev = this.getAt(index - 1);
        prev.next = toRemove.next;
    }

    insertAt(data, index) {
        if (!this.head || index === 0) {
            return this.insertFirst(data);
        }

        const prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return this.insertLast(data);
        }
        const toShift = prev.next;
        prev.next = new Node(data, toShift);

    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

}

module.exports = {Node, LinkedList};
