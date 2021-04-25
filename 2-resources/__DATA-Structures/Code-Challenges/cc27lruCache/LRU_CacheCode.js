class LRUCache {
  constructor( limit = 10 ) {
    this.limit = limit;
    this.size = 0;
    this.list = new List();
    this.storage = {};
  }

  size() {
    return this.size;
  }

  get( key ) {
    const node = this.storage[ key ];
    if ( node ) {
      this.list.moveToEnd( node );
      return node.val.val;
    } else {
      return null;
    }
  }

  set( key, val ) {
    const node = this.storage[ key ];
    if ( node ) {
      node.val.val = val;
      this.list.moveToEnd( node );
      return;
    }

    if ( this.size === this.limit ) {
      // already reached our limit
      delete this.storage[ this.list.head.val.key ];
      this.list.shift();
      this.size--;
    }

    this.list.push( {
      key,
      val
    } );
    this.storage[ key ] = this.list.tail;
    this.size++;
  }
}
