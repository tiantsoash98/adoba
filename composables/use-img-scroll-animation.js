import gsap from "gsap";

export default () => {

    const imgScrollAnimation = (imgEl) => {
        let triggerEl = imgEl.value;
        let targetEl = imgEl.value.children[0];
    
        gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: triggerEl,
                //trigger element - viewport
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
        .set(targetEl, { scale: 1.1 })
        .to(targetEl, {
            y: '10vh',
            ease: "none"
        })
    }
    
    return { 
        imgScrollAnimation
    }
}