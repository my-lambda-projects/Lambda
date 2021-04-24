let arr1 = [
  'http://www.w3schools.com/jsref/met_form_submit.asp',
  'http://www.w3schools.com/jsref/event_form_onreset.asp',
  'http://www.w3schools.com/jsref/event_form_onsubmit.asp',
  'http://www.w3schools.com/jsref/prop_img_align.asp',
  'http://www.w3schools.com/jsref/prop_img_alt.asp',
];
import fs from 'fs';

function tagify( arr ) {
  let tagsArr = [];

  for (let curPath of arr) {
    let tag =
      `<div class="btn"><a class="btn" href="${`${curPath}`}${`"`}${`>${curPath.slice (0, 1) + curPath.slice (6)}</a></div>`}`;
    console.log( tag );
    tagsArr.push( tag );
    tagsArr.push( '\n' );
    var tagStr = tagsArr.join( '' );
    console.log( 'tagStr: ', tagStr );
  }

  return tagStr;
}
let data = tagify( arr1 );
fs.writeFile( 'output.txt', data, err => {
  // In case of a error throw err.
  if ( err ) throw err;
  } );
