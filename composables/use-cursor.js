import gsap from "gsap";
import MouseFollower from "mouse-follower";

export default () => {
    // Init Cuberto Mouse Follower
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
        container: document.body,
        speed: 1,
        ease: 'expo.out',
        skewingText: 0,
    });

            
    let matchMedia = gsap.matchMedia();

    matchMedia.add("(hover: none)", () => {
        console.log('Touchscreen detected')
        cursor.destroy()
    });

    return { cursor }
}