
## Gulp
https://css-tricks.com/the-simplest-ways-to-handle-html-includes/

Use Gulp
What's even faster than a server-side include? If the include is preprocessed before it's even on the server. Gulp has a variety of processors that can do this. One is gulp-file-include.

That would look like this:

...
<body>
   @@include('./header.html')

   Content

   @@include('./footer.html')
<form>
 <input type="button" value="Go back!" onclick="history.back()">
</form>
  </body>
...
And you'd process it like:

var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});
Looks like this particular plugin has fancy features where you can pass in variables to the includes, making it possible to make little data-driven components.
