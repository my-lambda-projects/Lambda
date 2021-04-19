 let state = 1;
 //1 and 0 represent on and off which in this case... after the initial color of red ...will toggle between blue and lime green!
 document.getElementById( "me" ).addEventListener( "click", function () {


   function setColor( me, color ) {
     let property = document.getElementById( 'me' );
     if ( state == 0 ) {
       property.style.backgroundColor = "blue"
       state = 1;
     } else {
       property.style.backgroundColor = "#7FFF00"
       state = 0;
     }
   }
   setColor();
   document.getElementById( "me" ).innerHTML = 'click me again';
 } );
