// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function (event) {
  // Hide the submit button. Non-JavaScript users will still see it.
  document.getElementById("submit").style.display = "none";

  // Put the form control into a variable
  var e = document.getElementById("first_name");

  // Wait for user input
  e.addEventListener(
    "keyup",
    function () {
      var first_name = document.getElementById("first_name").value;
      document.getElementById("msg").textContent = first_name;
    },
    false
  );
});
