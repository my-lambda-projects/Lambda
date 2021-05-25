var michael = {
  lovesJavaScript: true,
  firstName: "Michael",
  job: "Programmer",
  languages: ["Python", "C++", "Haskell", "PHP"],

  greets: function (person) {
    var name = person.firstName;
    return `Hi ${name} I am ${this.firstName}`;
  },
};

var joe = {
  firstName: "Joey",
};
