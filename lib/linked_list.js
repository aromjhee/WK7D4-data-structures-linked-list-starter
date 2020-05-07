// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value/* next, previous*/) {
        this.value = value;
        this.next = null;
        // this.previous = previous;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        let currentTail = this.head;
        let newTail = currentTail;
        while (currentTail.next) {
            newTail = currentTail
            currentTail = currentTail.next;
        }
        this.tail = newTail // [1,2,3,4,5]
        this.tail.next = null; // [1,2,3,4, null]
        this.length--;// [1,2,3,4]

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }

        return currentTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return currentHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            if (node.value === target) return true;
            node = node.next
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let currentNode = this.head;
        for (let i = 0; i !== index; i++) {
            currentNode = currentNode.next
        }
        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (this.get(index)) {
            this.get(index).value = val
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);

        let newNode = new Node(val);
        let previousNode = this.get(index - 1)
        let tempNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = tempNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();

        let previousNode = this.get(index - 1);
        let removeNode = previousNode.next;
        previousNode.next = removeNode.next;
        this.length--;
        return removeNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
