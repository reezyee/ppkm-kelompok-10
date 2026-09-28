gsap.registerPlugin(ScrollTrigger);

// 1. Intro Animation for Hero Section
const tl = gsap.timeline();

tl.from(".title", {
  y: 80,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.5,
}).from(
  ".subtitle",
  {
    opacity: 0,
    duration: 1.2,
    clipPath: "polygon(0 0%, 0% 0%, 0% 100%, 0 100%)",
    ease: "power2.out",
  },
  "-=0.4",
);

// 2. Zoom scrolling for Hero Section
const zs = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "+=2300",
    pin: true,
    scrub: 1.3,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

zs.to(".hero-wrapper", {
  scale: 35,
  opacity: 0,
  ease: "power1.inOut",
  force3D: true,
});

// 3. Card swipe for Members Section
const cardSwipeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".members-section",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1,
    anticipatePin: 1,
  },
});

cardSwipeTl
  .to(".card-1", {
    x: -200,
    y: -50,
    rotation: -25,
    opacity: 0,
    ease: "power1.inOut",
  })
  .to(".card-2", {
    x: 200,
    y: -50,
    rotation: 25,
    opacity: 0,
    ease: "power1.inOut",
  });
