gsap.registerPlugin(ScrollTrigger);

gsap.to(".image-container img", {
    rotationY: 360,
    scrollTrigger: {
        trigger: ".pin-section",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1
    }
});