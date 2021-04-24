class User {
  constructor ({ name = 'Anonymous' }) {
    this.name = name;
  }
  login () {
    console.log(`${ this.name } logged in.`);
  }
};

class Student extends User {
  constructor (options) {
    super(options);
    this.completedLessons = [];
  }
  completeLesson (id) {
    this.completedLessons.push(id);
    console.log(`${ this.name } completed lesson: ${ id }`);
  }
}

const echo = new Student({
  name: 'Echo'
});

echo.login(); // "Echo logged in."
echo.completeLesson(1); // "Echo completed lesson: 1"