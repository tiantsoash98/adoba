import imagesLoaded from 'imagesLoaded';

export default () => {
    // Init Img Loaded
    const imgLoad = imagesLoaded( '.img-loaded');

    function onProgress(instance, image){
        image.img.classList.add("img-loaded--loaded")

        if(image.isLoaded) console.log(image.img.src)
    }

    imgLoad.on('progress', onProgress)

    const init = () => {
        imgLoad.value = imagesLoaded( '.img-loaded');
        imgLoad.on('always', onProgress)
    }

    const destroy = () => {
        imgLoad.off('progress', onProgress)
    }

    return { 
        imgLoad,
        init,
        destroy
    }
}