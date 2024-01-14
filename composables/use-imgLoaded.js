import imagesLoaded from 'imagesLoaded';

export default () => {
    // Init Img Loaded
    const imgLoad = imagesLoaded( '.imgLoaded');

    function onProgress(instance, image){
        image.img.style.opacity = '1'
    }

    imgLoad.on('progress', onProgress)

    const init = () => {
        imgLoad.on('progress', onProgress)
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