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
window.addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24, // بدل -24
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true, // استخدم true بدلاً من 'auto'
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32, // بدل -32
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

let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16, // بدل -24

  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16, // بدل -24
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionTop = current.offsetTop;
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// استرجاع الوضع المختار مسبقًا
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// الحصول على الوضع الحالي
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// التحقق من وجود إعدادات مسبقة وتطبيقها
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// إضافة حدث عند النقر لتبديل الوضع
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(".home__data , .featured__container , .new__container");
sr.reveal(".home__images", { delay: 600 });
sr.reveal(".services__card", { interval: 100 });
sr.reveal(".discount__data", { origin: "left" });
sr.reveal(".discount__images", { origin: "right" });
