// let dropdowns = document.querySelectorAll(".menu-services__item");

// for (let dropdown of dropdowns) {
//   dropdown.addEventListener("mouseenter", function () {
//     let child = this.querySelector(".menu-services__submenu");
//     child.classList.add("submenu--active");
//   });
//   dropdown.addEventListener("mouseleave", function () {
//     let child = this.querySelector(".menu-services__submenu");
//     child.classList.remove("submenu--active");
//   });
// }

const burgerBtn = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");
burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("menu-trigger--is-open");
  menu.classList.toggle("menu--is-open");
  document.body.classList.toggle("locked");

  menu.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == menu || e.target.classList.contains("menu__link")) {
      burgerBtn.classList.remove("menu-trigger--is-open");
      menu.classList.remove("menu--is-open");
      document.body.classList.remove("locked");
    }
  });
});
