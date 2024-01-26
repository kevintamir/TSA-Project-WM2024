/* -- Menu hover -- */
const menu = document.getElementById("menu");
Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

/* -- Text effect -- */
const letters = "abcdefghijklmnopqrstuvwxyz";
let interval = null;
const screen = document.querySelector(".screen"),
  name = document.querySelector(".name");
screen.onmouseenter = (event) => {
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return name.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= name.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 2;
  }, 15);
};
