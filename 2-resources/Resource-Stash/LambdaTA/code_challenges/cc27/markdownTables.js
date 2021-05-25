function markdownTables(arr) {

  const array = [];

  array.push(arr[0].toString().split(','));

  array.push(array[0].map(item => item.replace(/./g, '-')));

  arr.shift();
  console.log(arr);

  arr.forEach(item => {

  	array.push(item.toString().split(','));

  });

  return array.map(item => {

  	return '|' + item.join('|') + '|';

  }).join('\n');

}


x = ['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk']
console.log(markdownTables(x))
