class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".Dropdown__button");

    this.button.addEventListener("click", () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    this.element.classList.toggle("Dropdown--active");
  }
}

let dropdowns = document.querySelectorAll(".Dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));