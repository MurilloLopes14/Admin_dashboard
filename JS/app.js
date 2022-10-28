//Element selection
const list = document.querySelectorAll(".navigation li");
const navigation = document.querySelector(".navigation");
const toggle = document.querySelector(".toggle");
const main = document.querySelector(".main");

//functions
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}

const toggleMenu = () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

//Events
list.forEach((item) => {
  item.addEventListener("mouseover", activeLink);
});

toggle.addEventListener("click", () => {
  toggleMenu();
});
