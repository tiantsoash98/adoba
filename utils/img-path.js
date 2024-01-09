export default function (imgUrl) {
    const { cmsBaseUrl } = useRuntimeConfig()
    return `${cmsBaseUrl}${imgUrl}`;
  }