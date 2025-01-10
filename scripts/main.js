/*=============== SEARCH ===============*/
const searchBoutton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

/* =============== Show Search =============== */
if (searchBoutton) {
  searchBoutton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

/* =============== Hide Search =============== */
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const loginBoutton = document.getElementById("login-button"),
  loginClose = document.getElementById("login-close"),
  loginContent = document.getElementById("login-content");

/* =============== Show Login =============== */
if (loginBoutton) {
  loginBoutton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}

/* =============== Hide Login =============== */
if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}
/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 24, // بدل -24
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true, // استخدم true بدلاً من 'auto'
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: 32, // بدل -32
    },
  },
});

/*=============== FEATURED SWIPER ===============*/

let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16, // بدل -24
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});


/*=============== NEW SWIPER ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
