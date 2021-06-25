export default function getImageUrl(imageUrl) {
	return imageUrl ? import.meta.env.VITE_STRAPI_URL+imageUrl : null;
}
