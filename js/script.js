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

// Бургер-меню
const burgerBtn = document.querySelector(".menu-trigger");
const menuMob = document.querySelector(".menu-mobile");
burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("menu-trigger--is-open");
  menuMob.classList.toggle("menu-mobile--is-open");
  document.body.classList.toggle("locked");

  menuMob.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == menuMob) {
      burgerBtn.classList.remove("menu-trigger--is-open");
      menuMob.classList.remove("menu-mobile--is-open");
      document.body.classList.remove("locked");
    }
  });
});

// Выпадающее меню в бургере
const dropdownBtnMob = document.querySelector(".menu-mobile__service");
const dropdownMenuMob = document.querySelector(".submenu-mob");
const dropdownLinksMob = document.querySelectorAll(".submenu-mob__link");

dropdownBtnMob.addEventListener("click", () => {
  dropdownBtnMob.classList.toggle("active");

  if (dropdownBtnMob.classList.contains("active")) {
    dropdownBtnMob.setAttribute("aria-expanded", "true");
    dropdownMenuMob.setAttribute("aria-hidden", "false");
    dropdownLinksMob.forEach((link) => link.setAttribute("tabindex", "0"));
  } else {
    dropdownBtnMob.setAttribute("aria-expanded", "false");
    dropdownMenuMob.setAttribute("aria-hidden", "true");
    dropdownLinksMob.forEach((link) => link.setAttribute("tabindex", "-1"));
  }
});

// const dropdownBtnsMob = document.querySelectorAll(
//   ".menu-mobile__service button"
// );

// dropdownBtnsMob.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const target = document.querySelector(btn.dataset.target);
//     target.classList.toggle("open");
//     btn.setAttribute("aria-expanded", target.classList.contains("open"));
//     const links = target.querySelectorAll(".submenu-mob__link");
//     links.forEach((link) => {
//       link.setAttribute("tabindex", target.classList.contains("open") ? "0" : "-1");
//     });
//   });
// });

// Слайдер отзывов
document.addEventListener("DOMContentLoaded", function () {
  const reviewsSlider = new Splide(".reviews__slider", {
    type: "slide",
    arrows: false,
    pagination: true,
    perPage: 1,
    gap: "20px",
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: "25px",
        col: "25px",
      },
    },
    classes: {
      pagination: "splide__pagination slider-pagination",
      page: "splide__pagination__page slider-page",
    },
    breakpoints: {
      768: {
        grid: false,
      },
    },
  });

  reviewsSlider.mount(window.splide.Extensions);
});

// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item--active")) {
        parent.classList.remove("accordion__item--active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) =>
            child.classList.remove("accordion__item--active")
          );
        parent.classList.add("accordion__item--active");
      }
    });
  });
}

accordion();
