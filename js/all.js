$(document).ready(function () {
  $(".menu-btn").click(function (e) {
    e.preventDefault();
    $(".menu-open").toggle();
    $(".menu-close").toggle();
    $("body").toggleClass("menu-show");
    $(".body-bg").toggle();
  });
});

const swiper = new Swiper(".swiper", {
  // allowTouchMove: false,
  grid:{
    row:3,
  },
  // 分頁、左右箭頭、滾動條若有使用則必需設定
  // 分頁
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    768: {
      allowTouchMove: true,
      grid: {
        row: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24,
    },
    0:{
      allowTouchMove: false,
    },
  },
});
