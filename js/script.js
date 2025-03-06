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

// Слайдер цен
document.addEventListener("DOMContentLoaded", function () {
  const priceSlider = new Splide(".price__slider", {
    type: "slide",
    arrows: false,
    pagination: true,
    perPage: 4,
    gap: "20px",
    classes: {
      pagination: "splide__pagination slider__pagination",
      page: "splide__pagination__page slider__page",
    },
    breakpoints: {
      1260: {
        perPage: 3,
      },
      999: {
        perPage: 2,
      },
      654: {
        perPage: 1,
      },
    },
  });
  priceSlider.mount();
});

// Слайдер акций
document.addEventListener("DOMContentLoaded", function () {
  const promoSlider = new Splide(".promo__slider", {
    type: "slide",
    arrows: false,
    pagination: true,
    perPage: 3,
    gap: "20px",
    classes: {
      pagination: "splide__pagination slider__pagination",
      page: "splide__pagination__page slider__page",
    },
    breakpoints: {
      999: {
        perPage: 2,
      },
      654: {
        perPage: 1,
      },
    },
  });
  promoSlider.mount();
});

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
      pagination: "splide__pagination slider__pagination",
      page: "splide__pagination__page slider__page",
    },
    breakpoints: {
      768: {
        grid: false,
      },
    },
  });
  reviewsSlider.mount(window.splide.Extensions);
});

// Слайдер фотогалереи
document.addEventListener("DOMContentLoaded", function () {
  const fotogallerySlider = new Splide(".fotogallery__slider", {
    type: "loop",
    arrows: true,
    pagination: true,
    perPage: 3,
    perMove: 1,
    focus: "center",
    gap: "10px",
    classes: {
      pagination: "splide__pagination slider__pagination",
      page: "splide__pagination__page slider__page",
      arrows: "splide__arrows slider__arrows",
      arrow: "splide__arrow slider__arrow",
      prev: "splide__arrow--prev slider__arrow--prev",
      next: "splide__arrow--next slider__arrow--next",
    },
  });
  fotogallerySlider.mount();
});

// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item");
  for (const item of items) {
    const trigger = item.querySelector(".accordion__trigger");
    const content = item.querySelector(".accordion__content");
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      if (item.classList.contains("accordion__item--active")) {
        item.classList.remove("accordion__item--active");
        trigger.ariaExpanded = false;
        content.style.maxHeight = 0;
      } else {
        for (const item of items) {
          item.classList.remove("accordion__item--active");
          item.querySelector(".accordion__trigger").ariaExpanded = false;
          item.querySelector(".accordion__content").style.maxHeight = 0;
        }
        item.classList.add("accordion__item--active");
        content.style.maxHeight = content.scrollHeight + "px";
        if (
          item.parentNode.parentNode.classList.contains("accordion__content")
        ) {
          item.parentNode.parentNode.style.maxHeight =
            item.parentNode.parentNode.scrollHeight +
            content.scrollHeight +
            "px";
        }
        trigger.ariaExpanded = true;
      }
    });
  }
}

accordion();
