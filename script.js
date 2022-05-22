let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
};

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar .nav-item");
const navLinks = document.querySelectorAll(".navbar .nav-item li a");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
