document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  // gsap code here!
});

const logo = document.getElementById("logo");
const navItem = document.getElementById("navItem");

gsap.from(logo, {
  opacity: 0,
  scale: 0,
  //   y: -100,
  duration: 1,
});

gsap.from(navItem, {
  opacity: 0,
  y: -100,
  duration: 1,
});

gsap.from("#mainTitle", {
  opacity: 0,
  x: -500,
  duration: 1,
  ease: "power3.inOut",
});

gsap.from("#mainPara", {
  opacity: 0,
  scale: 0,
  delay: 1,
  duration: 1,
});

gsap.from("#shopNow", {
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: "#shopNow",
});

gsap.from("#mainImg", {
  opacity: 0,
  x: 500,
  duration: 1,
  ease: "power1.inOut",
});

gsap.from("#aboutSec", {
  opacity: 0,
  y: 30,
  stagger: 0.5,
  duration: 1,
  scrollTrigger: "#aboutSec",
  ease: "bounce.in",
});

gsap.from("#aboutCards", {
  opacity: 0,
  scale: 0,
  duration: 0.8,
  scrollTrigger: "#aboutCards",
  stagger: 0.3,
  ease: "bounce.in",
});

gsap.from("#aboutImgs", {
  opacity: 0,
  scale: 0,
  duration: 1.4,
  //   delay: 1,
  scrollTrigger: "#aboutCards",
});

gsap.from("#cardText", {
  opacity: 0,
  y: 30,
  delay: 1,
  duration: 1,
  scrollTrigger: "aboutImgs",
});

gsap.from("#workTexts", {
  opacity: 0,
  x: -500,
  duration: 1,
  ease: "power3.inOut",
  stagger: 0.4,
  scrollTrigger: "#workTexts",
});

gsap.from("#workSubTitle", {
  opacity: 0,
  x: -500,
  duration: 1,
  ease: "power3.inOut",
  stagger: 0.4,
  scrollTrigger: "#workTexts",
});

gsap.from("#workImg", {
  opacity: 0,
  scale: 0,
  duration: 1.4,
  //   delay: 1,
  scrollTrigger: "#workImgDiv",
  ease: "power3.in",
});

gsap.from("#conSec", {
  opacity: 0,
  scrollTrigger: "#conSec",
  scale: 0,
  ease: "power2.inOut",
});

gsap.from(".conItems", {
  opacity: 0,
  stagger: 0.4,
  y: 80,
  ease: "power1.inOut",
  scrollTrigger: "#conSec",
});
