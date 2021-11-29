// form_test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Test #1", () => {
  it("Types names into field", () => {
    cy.visit("localhost:3000");

    cy.get("input[name=name]").type("name");
    cy.get("input[name=name]").should("have.value", "name");
    cy.get("input[name=email]").type("mail@mail.com");
    cy.get("input[name=password]").type("password");
  });
});

describe("Test #2", () => {
  it("Verifies user can submit form data", () => {
    cy.get("input[name=tos]").click();
  });
});

describe("Test #3", () => {
  it("Verify user form creates user", () => {
    cy.get("button").click();
    cy.get("div[class=UserCard]")
      .contains("name")
      .parent()
      .contains("mail@mail.com")
      .parent()
      .contains("password")
      .parent()
      .contains("has agreed to ToS");
  });
});

describe("Test #4", () => {
  it("Check for form validation", () => {
    cy.visit("localhost:3000");

    cy.get("button").click();
    cy.get("div[class=UserCard]").should("not.exist");
  });
});
