# Lecture 2 Notes - Resposive Web Design  

Lecture starts@ https://youtu.be/oXziWoSD8vQ?t=3m  
Navbar and boxes: http://codepen.io/anon/pen/vmVqXR  

## margin vs padding
### margin:  
- Gets applied OUTSIDE the element
- e.g. {margin: 10px;}
- gives all sides an OUTSIDE margin of 10 pixels
- usually there's some margin already built-in

### padding:  
- Gets applied INSIDE the element
- e.g. {padding: 10px;}
- gives all sides an INSIDE margin of 10 pixels

### margin and padding direction
- CLOCKWISE direction from TOP
- Top, Right, Bottom, and, Left
- e.g. {padding: 0px 0px 0px 20px;}
- 0 pixel pad applied to the Top, Right, and Bottom sides, and,
- 20 pixel pad applied to the Left side
- e.g. {padding: 10px 20px;}
- CSS assumes first value is Top and Bottom
- CSS assumes second value is Right and Left
- i.e. {padding: 10px 20px 10px 20px;}

## Common html tags and css declarations
### ordered and unordered lists
 - \<ul>\</ul>
 - \<ol>\</ol>
 - {list-style: none;} to ignore the list style

### float
 - {float: right;} & {float: left;}  
 - floating the un-styled list...

### container elements
 - surrounding a buncha stuff to give it class characteristics

### percentage vs pixel dimensions
 - Don't use height percentage for now, use fixed pixel heights.
 - http://stackoverflow.com/questions/7285058/css-percentages-or-pixels
 - https://benfrain.com/just-use-pixels/

### borders
 - explicitly declaring "solid" vs. "dashed"...

## Bootstrap
 - http://getbootstrap.com
 - [Download Bootstrap](http://getbootstrap.com/getting-started/#download)
 - [Bootstrap Components](http://getbootstrap.com/components)
 - [CodePen example of linking to Bootstrap components](https://codepen.io/mixelpix/pen/ZKmwMP)
 - [Bootstrap Grid](http://getbootstrap.com/css/#grid): the Bootstrap grid is BASE 12
 - Over-riding bootstrap styles by making a "newclass" class: [Lecture example:](https://youtu.be/oXziWoSD8vQ?t=34m23s)
 - [Linking to Bootstrap: Codepen](https://codepen.io/mixelpix/pen/ZKmwMP)
 - [Bootstrap Basics](https://codepen.io/mixelpix/pen/JNeVJB)
