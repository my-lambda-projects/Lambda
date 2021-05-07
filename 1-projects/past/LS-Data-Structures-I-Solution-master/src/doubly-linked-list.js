/* eslint-disable class-methods-use-this */
class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  insertAfter(value) {
    const currentNext = this.next;
    this.next = new ListNode(value, this, currentNext);
    if (currentNext) {
      currentNext.prev = this.next;
    }
  }

  insertBefore(value) {
    const currentPrev = this.prev;
    this.prev = new ListNode(value, currentPrev, this);
    if (currentPrev) {
      currentPrev.next = this.prev;
    }
  }

  delete() {
    if (this.prev) {
      this.prev.next = this.next;
    }
    if (this.next) {
      this.next.prev = this.prev;
    }
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new ListNode(value, null, this.head);
    if (this.head) {
      this.head.prev = newNode;
    }
    if (!this.tail) {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  removeFromHead() {
    if (!this.head) {
      return null;
    }
    const currentHead = this.head;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    }
    return currentHead.value;
  }

  addToTail(value) {
    const newNode = new ListNode(value, this.tail, null);
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  removeFromTail() {
    if (!this.tail) {
      return null;
    }
    const currentTail = this.tail;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    }
    return currentTail.value;
  }

  moveToFront(node) {
    const value = node.value;
    if (node === this.tail) {
      this.removeFromTail();
    } else {
      node.delete();
    }
    this.addToHead(value);
  }

  moveToBack(node) {
    const value = node.value;
    if (node === this.head) {
      this.removeFromHead();
    } else {
      node.delete();
    }
    this.addToTail(value);
  }

  delete(node) {
    node.delete();
  }
}

module.exports = DoublyLinkedList;
