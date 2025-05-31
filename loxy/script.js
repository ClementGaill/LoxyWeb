document.addEventListener("DOMContentLoaded", (event) => {
    gsap.from(".left h2", {
        y: 80,
        opacity: 0,
        duration: 2,
        ease: "power2.out"
    });

    gsap.from(".left h3", {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power2.out"
    });

    gsap.from(".right carrousel", {
        opacity: 0,      // Elle est invisible au début
        duration: .8,
        ease: "power2.out",
        delay: 0.5
    });
});