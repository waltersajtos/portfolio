export default function getImageUrl(imageUrl) {
	return import.meta.env.VITE_STRAPI_URL+imageUrl;
}
