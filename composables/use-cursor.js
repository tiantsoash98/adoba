import gsap from "gsap";
import MouseFollower from "mouse-follower";

export default () => {
    // Init Cuberto Mouse Follower
    MouseFollower.registerGSAP(gsap);

    const cursor = ref(null)

    const initCursor = () => {
        cursor.value = new MouseFollower({
            visible: false,
            container: document.body,
            speed: 1,
            ease: 'expo.out',
            skewingText: 0,    
        });
    
        const el = document.querySelectorAll('[data-cursor-text]');

        el.forEach(function(item){
            item.addEventListener('mouseenter', () => {
                cursor.value.removeState('-hidden'); 
            })
    
            item.addEventListener('mouseleave', () => {
                cursor.value.addState('-hidden');
            });
        })
        
                
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