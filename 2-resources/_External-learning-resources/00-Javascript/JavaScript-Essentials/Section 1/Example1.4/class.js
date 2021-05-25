class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  greet() {
    console.log(`Hi! I am ${this.firstName} ${this.lastName}`);
  }
}

let user = new User("John", "Doe", "johndoe@gmail.com");
user.greet();
