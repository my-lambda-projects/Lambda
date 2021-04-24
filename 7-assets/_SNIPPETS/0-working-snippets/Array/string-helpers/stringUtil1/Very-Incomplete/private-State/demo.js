//alternativly to script tag:
import $ from "jquery";

$(document).ready(function () {
  let buttons = $("button");

  for (let i = 0; i < buttons.length; ++i) {
    buttons.eq(i).click(
      //-----edit------------------------
      function () {
        $("ul").append("<li>" + i + "</li>");
      }
      //       const addListeners2El = (  htmlEle, eventTypeArr, listener, cb) => {
      //   eventTypeArr.forEach(type =>   htmlEle.addEventListener(type, listener, cb));
      // }
      // addListeners2El(
      //   document.querySelector('.my-element'),
      //   ['click', 'mousedown'],
      //   () => { console.log('hello!') }
      // );

      //--------------------------------
    );
  }
});
