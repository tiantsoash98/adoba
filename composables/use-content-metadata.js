export default () => {
    
    const generateMetadata = (content) => {
        useHead({
            title: content.value.metadata.metaTitle,
            meta: [
                { name: 'description', content: content.value.metadata.metaDescription }
            ]
        })
    
        useSeoMeta({
            description: content.value.metadata.metaDescription,
            ogTitle: content.value.metadata.metaTitle,
            ogDescription: content.value.metadata.metaDescription,
            ogImage: imgPath(content.value.metadata.metaImage.data.attributes.formats.thumbnail.url),
            ogImageWidth: content.value.metadata.metaImage.data.attributes.formats.thumbnail.width,
            ogImageHeight: content.value.metadata.metaImage.data.attributes.formats.thumbnail.height,
            ogUrl: currentUrl(),
            twitterTitle: content.value.metadata.metaTitle,
            twitterDescription: content.value.metadata.metaDescription,
            twitterImage: imgPath(content.value.metadata.metaImage.data.attributes.formats.thumbnail.url),
            twitterCard: 'summary'
        })
        useMeta({
            script: [
                {
                    type: 'application/ld-json',
                    children: JSON.stringify(content.value.metadata.metadataRichSnippet),
                },
            ],
        })
    }

    return { 
        generateMetadata
    }
}