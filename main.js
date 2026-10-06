gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
gsap.set(".title", { autoAlpha: 0, y: 80 });
gsap.set(".subtitle", {
  autoAlpha: 1,
  clipPath: "polygon(0 0%, 0% 0%, 0% 100%, 0 100%)",
});

// 1. Intro Animation for Hero Section
const tl = gsap.timeline();

tl.to(".title", {
  y: 0,
  autoAlpha: 1,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.5,
}).to(
  ".subtitle",
  {
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
    duration: 1.2,
    ease: "power2.out",
  },
  "-=0.4",
);

// 2. Zoom scrolling for Hero Section
const zs = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "+=2200",
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

// 3. Mentors Section Animation
const mentorsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mentors-section",
    pin: true,
    start: "top 2%",
    toggleActions: "play play play reverse",
    markers: true,
  },
});

mentorsTl
  .from(".mentors-text", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
  })
  .fromTo(
    ".mentor-1",
    { opacity: 0, y: 130, scale: 0.85, rotate: 0 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: -5,
      duration: 1.2,
      ease: CustomEase.create(
        "mentorBounce1",
        "M0,0 C0.12,0.6 0.1,1.25 0.35,1.25 C0.5,1.25 0.6,0.95 1,1",
      ),
    },
    "-=0.5",
  )
  .fromTo(
    ".mentor-2",
    { opacity: 0, y: 130, scale: 0.85, rotate: 0 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 5,
      duration: 1.2,
      ease: CustomEase.create(
        "mentorBounce2",
        "M0,0 C0.12,0.6 0.1,1.25 0.35,1.25 C0.5,1.25 0.6,0.95 1,1",
      ),
    },
    "-=0.9",
  );

// 3. Members Section Fade-In (Transisi halus sebelum di-pin)
gsap.from(".members-section", {
  scrollTrigger: {
    trigger: ".members-section",
    start: "top 85%",
    end: "top 45%",
    scrub: 1,
  },
  opacity: 0,
  y: 40,
  ease: "power2.out",
});

// 4. Card Swipe Animation for Members Section (Diperhalus jarak jedanya)
const cardSwipeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".members-section",
    start: "top top",
    end: "+=6500",
    pin: true,
    scrub: 1.3,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

// Looping otomatis dari card-1 sampai card-11 agar kodenya bersih dan smooth
for (let i = 1; i <= 11; i++) {
  const xPos = i % 2 === 0 ? 270 : -270;
  const rotAngle = i % 2 === 0 ? 22 : -22;

  cardSwipeTl.to(`.card-${i}`, {
    x: xPos,
    y: -40,
    rotation: rotAngle,
    opacity: 0,
    ease: "power1.inOut",
  });
}

// 5. Horizontal Scroll Gallery untuk Section Kegiatan
const kegiatanSection = document.querySelector(".kegiatan-section");
const kegiatanWrapper = document.querySelector(".kegiatan-wrapper");

gsap.to(kegiatanWrapper, {
  x: () => -(kegiatanWrapper.scrollWidth - window.innerWidth + 100),
  ease: "none",
  scrollTrigger: {
    trigger: kegiatanSection,
    pin: true,
    scrub: 1.2,
    start: "top top",
    end: () => "+=" + kegiatanWrapper.scrollWidth,
    invalidateOnRefresh: true,
  },
});
