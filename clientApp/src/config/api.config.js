export const apiConfig = {
	returnRejectedPromiseOnError: true,
	withCredentials: true,
	timeout: 30000,
	baseURL: import.meta.env.VITE_STRAPI_URL,
	headers: {
		common: {
			'Cache-Control': 'no-cache, no-store, must-revalidate',
			Pragma: 'no-cache',
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	}
};
