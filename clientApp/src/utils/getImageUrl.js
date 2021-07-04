import {apiConfig} from "../config/api.config";

export default function getImageUrl(imageUrl) {
	return imageUrl ? apiConfig.baseURL+ `${imageUrl}` : null;
}
