import gsap from "gsap";
import SplitType from 'split-type';

export default () => {
    const createTextRevealScroll = (triggerEl, refEl, customClass) => {
        SplitType.create(refEl.value, 
        {
            types: 'lines', 
            lineClass: `${customClass}--line-wrapper`
        })

        document.querySelectorAll(`.${ customClass }--line-wrapper`)
            .forEach(function(line){
                var wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add(`${ customClass }--line`)
                wrapperDiv.innerHTML = line.innerHTML
                line.innerHTML = ""
                line.appendChild(wrapperDiv)
                line.classList.add('text-reveal--line')
            })

        gsap.timeline({
            defaults: { duration: 1, ease: "power3.out" },
            scrollTrigger: {
                trigger: triggerEl.value,
                //trigger element - viewport
                start: "top 80%",
                end: "top center"
            }
        })
        .from(`.${ customClass }--line`, 
        {
            opacity: 0,
            yPercent: 100,
            stagger: 0.1
        })
    }

    const revertTextRevealScroll = (refEl) => {
        if(refEl.value){
            SplitType.revert(refEl.value)
        }
    }
    
    return { 
        createTextRevealScroll,
        revertTextRevealScroll
    }
}