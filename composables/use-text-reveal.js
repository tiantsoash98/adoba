import gsap from "gsap";
import SplitType from 'split-type';

export default () => {
    const animateTextReveal = (refEl) => {
        SplitType.create(refEl.value, 
        {
            types: 'lines', 
            lineClass: 'text-reveal--line-wrapper'
        })

        document.querySelectorAll('.text-reveal--line-wrapper')
            .forEach(function(line){
                var wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add('text-reveal--line')
                wrapperDiv.innerHTML = line.innerHTML
                line.innerHTML = ""
                line.appendChild(wrapperDiv)
            })

        gsap.timeline({
            defaults: { duration: 1, ease: "power3.out" },
        })
        .from('.text-reveal--line', 
        {
            opacity: 0,
            yPercent: 100,
            stagger: 0.1,
            delay: 0.4
        })
    }

    const beforeUnmountTextReveal = (refEl) => {
        if(refEl.value){
            SplitType.revert(refEl.value)
        }
        
    }
    
    return { 
        animateTextReveal,
        beforeUnmountTextReveal
    }
}