import gsap from "gsap";
import SplitType from 'split-type';

export default () => {
    const animateHero = (refEl) => {
        SplitType.create(refEl.value.querySelector('.hero-title'), 
        {
            types: 'words', 
            wordClass: "hero-title--word"
        });
    
        const tL = gsap.timeline({
            defaults: { ease: "power3.out" }
        })
        .from('.hero-title--word', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.05,
            duration: 1.1,
            delay: 0.4
        })
        
        if(refEl.value.querySelector('.hero-img')){
            tL.from(refEl.value.querySelector('.hero-img'), {
                scale: 1.2,
                duration: 1.6,
            }, '<') 
        }

        if(refEl.value.querySelector('.hero-description')){
            tL.from(refEl.value.querySelector('.hero-description'), {
                opacity: 0,
                yPercent: 25,
                duration: 1.5,
            }, '<+0.8s') 
        }
    }

    const beforeUnmountHero = (refEl) => {
        if(refEl.value.querySelector('.hero-title')){
            SplitType.revert(refEl.value.querySelector('.hero-title'))
        }
        
    }
    
    return { 
        animateHero,
        beforeUnmountHero
    }
}