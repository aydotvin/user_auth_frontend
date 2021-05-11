import { API } from "./../backend";

export const loginApi = (data = {}) => {
	console.log("calling signin.");
	return fetch(`${API}/auth/signin`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signupApi = (data = {}) => {
	console.log("calling signup.");
	return fetch(`${API}/auth/signup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};
