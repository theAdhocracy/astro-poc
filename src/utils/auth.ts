export const checkAuth = (cookie: any) => {
	// Check against validation token
	const validCode = "valid_code";
	const isAuthenticated = cookie && cookie.value === validCode;

	return isAuthenticated;
};
