export default () => {
    // https://blog.webdevsimplified.com/2022-01/intersection-observer/
    // https://stackoverflow.com/questions/53306419/intersection-observer-when-element-leaves-the-viewport
    const headerState = useHeaderStyleState()

    const observerDefault = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                console.log('Entering white')
                headerState.value = "white"
            }
            else{
                console.log('Leaving white')
                headerState.value = "default"
            }
        })
    }, 
    { rootMargin: "-5% 0px -95%" })

    return { 
        observerDefault
    }
}