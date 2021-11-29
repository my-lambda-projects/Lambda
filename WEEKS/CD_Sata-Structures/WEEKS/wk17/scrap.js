Flist = document.getElementById('stateList');

for (let i = 0, bll = list.childNodes.length; i < bll; i++) {
  list.insertBefore(list.childNodes[i], list.firstChild);
}
