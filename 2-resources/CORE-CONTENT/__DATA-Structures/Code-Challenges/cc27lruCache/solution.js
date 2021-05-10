// cc27 lruCache Karthik's solution

// Linked List Code

class ListNode {
  constructor( prev, val, next ) {
    this.prev = prev || null;
    this.val = val;
    this.next = next || null;
  }

  // Insert a value right after the node.
  insertAfter( val ) {
    const next = this.next;
    this.next = new ListNode( this, val, next );
    if ( next ) next.prev = this.next;
  }

  // Insert a value right before the node.
  insertBefore( val ) {
    const prev = this.prev;
    this.prev = new ListNode( prev, val, this );
    if ( prev ) prev.next = this.prev;
  }

  delete() {
    if ( this.prev ) this.prev.next = this.next;
    if ( this.next ) this.next.prev = this.prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at the front of the list
  unshift( val ) {
    if ( !this.head ) {
      this.head = new ListNode( null, val, this.tail );
    } else if ( !this.tail ) {
      this.tail = this.head;
      this.head = new ListNode( null, val, this.tail );
      this.tail.prev = this.head;
    } else {
      this.head = new ListNode( null, val, this.head );
      this.head.next.prev = this.head;
    }
  }

  // Remove from the front of the list
  shift() {
    if ( !this.head ) {
      if ( !this.tail ) return null;
      return this.pop();
    } else {
      const head = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      return head.val;
    }
  }

  // Insert at the end of the list.
  push( val ) {
    if ( !this.tail ) {
      this.tail = new ListNode( this.head, val, null );
    } else if ( !this.head ) {
      this.head = this.tail;
      this.tail = new ListNode( this.head, val, null );
      this.head.next = this.tail;
    } else {
      this.tail = new ListNode( this.tail, val, null );
      this.tail.prev.next = this.tail;
    }
  }

  // Delete at the end of the list.
  pop() {
    if ( !this.tail ) {
      if ( !this.head ) return null;
      return this.shift();
    } else {
      const tail = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      return tail.val;
    }
  }

  // Move a node to the front of the List
  moveToFront( node ) {
    if ( node === this.tail ) {
      this.pop();
    } else {
      node.delete();
    }
    this.unshift( node.val );
  }

  // Move a node to the end of the List
  moveToEnd( node ) {
    if ( node === this.head ) {
      this.shift();
    } else {
      node.delete();
    }
    this.push( node.val );
  }

  // Convert to an array
  toArray() {
    const next = this.head || this.tail;
    const result = [];
    while ( next ) {
      result.push( next.val );
      next = next.next;
    }
    return result;
  }
}

module.exports = LRUCache;
