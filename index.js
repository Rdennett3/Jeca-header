gsap.to(".parallax-bg", {
    scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom", // starts when section hits bottom of viewport
        end: "bottom top",
        scrub: true
    },
    y: "-20%" // slow parallax scroll upward
});