# something amazing

| name | email |
| ---- | ----- |
| emily | emily@email.com |
| mary | maryberry@gbbs.co.uk |

> something else

```js
function markdownTables(arr) {
  const array = [];
  array.push(arr[0].toString().split(','));
  array.push(array[0].map(item => item.replace(/./g, '-')));
  arr.shift(); // data mutation
  arr.forEach(item => {
  	array.push(item.toString().split(','));
  });
  return array.map(item => {
  	return '| ' + item.join(' | ') + ' |';
  }).join('\n');
}
```
