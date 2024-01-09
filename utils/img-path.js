export default function (imgUrl) {
  const config = useRuntimeConfig()
  return `${ config.public.cmsBaseUrl }${ imgUrl }`;
}