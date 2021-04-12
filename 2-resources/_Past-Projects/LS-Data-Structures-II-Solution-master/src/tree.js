class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const tree = new Tree(value);
    this.children.push(tree);
  }
  contains(value) {
    let containsValue = false;
    if (this.value === value) return containsValue = true;
    const search = (children) => {
      children.forEach((child) => {
        if (value === child.value) return containsValue = true;
        if (child.children.length) {
          search(child.children);
        }
      });
    };
    search(this.children);
    return containsValue;
  }
}

module.exports = Tree;
