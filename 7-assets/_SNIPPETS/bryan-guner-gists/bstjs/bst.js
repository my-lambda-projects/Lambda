function Node( data ) {
  this.data = data;
  this.children = [];
}
class Tree {
  constructor() {
    this.root = null;
  }
  add( data, toNodeData ) {
    let node = new Node( data );
    let parent = toNodeData ? this.findBFS( toNodeData ) : null;
    if ( parent ) {
      parent.children.push( node );
    } else {
      if ( !this.root ) {
        this.root = node;
      } else {
        return 'Root node is already assigned';
      }
    }
  }
  remove( data ) {
    if ( this.root.data === data ) {
      this.root = null;
    }
    let queue = [ this.root ];
    while ( queue.length ) {
      let node = queue.shift();
      for ( let i = 0; i < node.children.length; i++ ) {
        if ( node.children[ i ].data === data ) {
          node.children.splice( i, 1 );
        } else {
          queue.push( node.children[ i ] );
        }
      }
    }
  }
  contains( data ) {
    return this.findBFS( data ) ? true : false;
  }
  findBFS( data ) {
    let queue = [ this.root ];
    while ( queue.length ) {
      let node = queue.shift();
      if ( node.data === data ) {
        return node;
      }
      for ( let i = 0; i < node.children.length; i++ ) {
        queue.push( node.children[ i ] );
      }
    }
    return null;
  }
  _preOrder( node, fn ) {
    if ( node ) {
      if ( fn ) {
        fn( node );
      }
      for ( let i = 0; i < node.children.length; i++ ) {
        this._preOrder( node.children[ i ], fn );
      }
    }
  }
  _postOrder( node, fn ) {
    if ( node ) {
      for ( let i = 0; i < node.children.length; i++ ) {
        this._postOrder( node.children[ i ], fn );
      }
      if ( fn ) {
        fn( node );
      }
    }
  }
  traverseDFS( fn, method ) {
    let current = this.root;
    if ( method ) {
      this[ '_' + method ]( current, fn );
    } else {
      this._preOrder( current, fn );
    }
  }
  traverseBFS( fn ) {
    let queue = [ this.root ];
    while ( queue.length ) {
      let node = queue.shift();
      if ( fn ) {
        fn( node );
      }
      for ( let i = 0; i < node.children.length; i++ ) {
        queue.push( node.children[ i ] );
      }
    }
  }
  print() {
    if ( !this.root ) {
      return console.log( 'No root node found' );
    }
    let newline = new Node( '|' );
    let queue = [ this.root, newline ];
    let string = '';
    while ( queue.length ) {
      let node = queue.shift();
      string += node.data.toString() + ' ';
      if ( node === newline && queue.length ) {
        queue.push( newline );
      }
      for ( let i = 0; i < node.children.length; i++ ) {
        queue.push( node.children[ i ] );
      }
    }
    console.log( string.slice( 0, -2 ).trim() );
  }
  printByLevel() {
    if ( !this.root ) {
      return console.log( 'No root node found' );
    }
    let newline = new Node( '\n' );
    let queue = [ this.root, newline ];
    let string = '';
    while ( queue.length ) {
      let node = queue.shift();
      string += node.data.toString() + ( node.data !== '\n' ? ' ' : '' );
      if ( node === newline && queue.length ) {
        queue.push( newline );
      }
      for ( let i = 0; i < node.children.length; i++ ) {
        queue.push( node.children[ i ] );
      }
    }
    console.log( string.trim() );
  }
}
let tree = new Tree();
tree.add( 'ceo' );
tree.add( 'cto', 'ceo' );
tree.add( 'dev1', 'cto' );
tree.add( 'dev2', 'cto' );
tree.add( 'dev3', 'cto' );
tree.add( 'cfo', 'ceo' );
tree.add( 'accountant', 'cfo' );
tree.add( 'cmo', 'ceo' );
tree.print(); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
tree.printByLevel(); // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
console.log( 'tree contains dev1 is true:', tree.contains( 'dev1' ) ); // => true
console.log( 'tree contains dev4 is false:', tree.contains( 'dev4' ) ); // => false
console.log( '--- BFS' );
tree.traverseBFS( node => {
  console.log( node.data );
} ); // => ceo cto cfo cmo dev1 dev2 dev3 accountant
console.log( '--- DFS preOrder' );
tree.traverseDFS( node => {
  console.log( node.data );
}, 'preOrder' ); // => ceo cto dev1 dev2 dev3 cfo accountant cmo
console.log( '--- DFS postOrder' );
tree.traverseDFS( node => {
  console.log( node.data );
}, 'postOrder' ); // => dev1 dev2 dev3 cto accountant cfo cmo ceo
tree.remove( 'cmo' );
tree.print(); // => ceo | cto cfo | dev1 dev2 dev3 accountant
tree.remove( 'cfo' );
tree.print(); // => ceo | cto | dev1 dev2 dev3
/*
19: 32: 39 | bryan @LAPTOP - 9 LGJ3JGS: [ Tree ] Tree_exitstatus: 0 __________________________________________________________o >
  node BinarySearchTree.js
ceo | cto cfo cmo | dev1 dev2 dev3 accountant
ceo
cto cfo cmo
dev1 dev2 dev3 accountant
tree contains dev1 is true: true
tree contains dev4 is false: false
  -- - BFS
ceo
cto
cfo
cmo
dev1
dev2
dev3
accountant
-- - DFS preOrder
ceo
cto
dev1
dev2
dev3
cfo
accountant
cmo
-- - DFS postOrder
dev1
dev2
dev3
cto
accountant
cfo
cmo
ceo
ceo | cto cfo | dev1 dev2 dev3 accountant
ceo | cto | dev1 dev2 dev3 |
  19: 32: 53 | bryan @LAPTOP - 9 LGJ3JGS: [ Tree ] Tree_exitstatus: 0 __________________________________________________________o >
*/