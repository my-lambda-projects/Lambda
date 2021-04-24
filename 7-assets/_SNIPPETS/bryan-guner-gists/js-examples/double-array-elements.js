const doubleList = list => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList[i] = list[i] * 2;
  }
  return newList;
};
