const touchSupported = () => {
  ( 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch );
}
console.log( touchSupported() );
// Result: will return true if touch events are supported, false if not
