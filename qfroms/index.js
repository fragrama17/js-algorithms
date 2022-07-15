// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(element) {
        this.stack1.push(element);
    }

    remove() {
    }

    peek() {
        return this.stack2.peek();
    }

}

//
//
// class Queue {
//     constructor() {
//         this.stack1 = new Stack();
//         this.stack2 = new Stack();
//     }
//
//     add(element) {
//         if (!this.stack2.peek()) {
//             return this.stack2.push(element);
//         }
//
//         this.stack1.push(element);
//     }
//
//     remove() {
//         const element = this.stack2.pop();
//         const backup = new Stack();
//
//         while (this.stack1.peek()) {
//             let next = this.stack1.pop();
//             if (!this.stack1.peek()) {
//                 this.stack2.push(next);
//                 break;
//             }
//             backup.push(next);
//         }
//
//         this.stack1 = backup;
//         return element;
//     }
//
//     peek() {
//         return this.stack2.peek();
//     }
//
// }

module.exports = Queue;
