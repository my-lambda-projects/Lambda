function Node(value){
  let next = null;
  const value = value;


  this.getNext = () => {
    return next;
  };
  this.setNext = node => {
    console.log('what1');
    next = node;
  };
  this.getValue = node => {
    if(node === null) return null;

    return node ? node.getValue() : value;
  };
  this.get = function(index){
    let node = this;

    if(index === 0){
      return this.getValue();
    }

    while(index !== 0){
      if(!node){
        throw 'end of list';
      }
      node = node.getNext();
      index--;
    }

    return this.getValue(node);
  };
  this.append = function(value){
    const node = new Node(value);
    let prev = current = this;

    while(current){
      prev = current;
      current = current.getNext();
    }

    prev.setNext(node);
    return this;
  };
  this.add = function(value){
    const node = new Node(value);
    let current_next;
    if(!this.getNext()){
      this.setNext(node);
      return this;
    }

    current_next = this.getNext();
    node.setNext(current_next);
    this.setNext(node);
    return this;
  };
}


const node = new Node(1);

node.add(3).add(4);

// 1->4->3

node.append(9);

// 1->4->3->9

node.append(10).append(33);

// 1->4->3->9->10->33