const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .bagdes");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, { opacity: 0, display: "none" });

      //버튼 보이기
      gsap.to(to - top, 0.2, { x: 0 });
    } else {
      gsap.to(badgeEl, 0.6, { opacity: 1, display: "block" });

      //버튼 숨기기
      gsap.to(to - top, 0.2, { x: 100 });
    }
  }, 300)
);
// _.throttle(함수, 시간)

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)

new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부?
  loop: true, // 반복 재생 여부
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper.prev",
    nextEl: ".awards .swiper.prev",
  },
});
const promotionEl = document.querySelector(".promotion");
const promotiononToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;
promotiononToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll("section.scroll-spy");
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
