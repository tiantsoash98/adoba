import gsap from "gsap";
import MouseFollower from "mouse-follower";

export default () => {
    // Init Cuberto Mouse Follower
    MouseFollower.registerGSAP(gsap);

    const cursor = ref(null)

    const initCursor = () => {
        cursor.value = new MouseFollower({
            container: document.body,
            speed: 1,
            ease: 'expo.out',
            skewingText: 0,
        });
    
                
        let matchMedia = gsap.matchMedia();
    
        matchMedia.add("(hover: none)", () => {
            if(cursor.value){
                cursor.value.destroy()
            }
        });
    }

    const destroyCursor = () => {
        if(cursor.value)
            cursor.value.destroy()
    }

    return { 
        initCursor,
        destroyCursor
    }
}