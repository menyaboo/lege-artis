var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".wrap-logo").style.top = "2.5%";
  } else {
    document.querySelector(".wrap-logo").style.top = "-600px";
  }
  prevScrollpos = currentScrollPos;
}

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

});

let menuBtn = document.querySelector('.menu-btn');
let header = document.querySelector('header');
let s = document.querySelector('.s');
let cont = document.querySelector('.cont');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  header.classList.toggle('active');
  s.classList.toggle('active');
  cont.classList.toggle('active');
})
