$ (function () {
  $ ('a').click (function () {
    var s = $ ('p').css ('font-size'), i = parseFloat (s, 10), c = s.slice (-2);
    $ ('p').css (
      'font-size',
      i / 1.2 + c
    ), 'larger' == this.id && $ ('p').css ('font-size', 1.2 * i + c);
  });
});
