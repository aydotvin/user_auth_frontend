import { validateData } from "./../helper/auth";
import { loginApi, signupApi } from "./../api/auth";

export const loginService = (data = {}) => {
	return new Promise((resolve, reject) => {
		let config = {
			username: {
				required: true,
				minLength: 3,
				maxLength: 32,
				regex: "",
			},
			password: {
				required: true,
				minLength: 7,
				maxLength: 32,
			},
		};
		let validateResponse = validateData(config, data);
		//	If validation fail -> show validation messages, else make  API call..
		if (validateResponse.status === false) {
			let errors = validateResponse.error;
			for (const error in errors) {
				document.querySelector(`#login_form input[name="${error}"]`).nextElementSibling.innerText =
					errors[error];
			}
		} else {
			loginApi(data).then((res) => {
				//	Validation check at server side..
				if (!!res.statusCode && res.statusCode === 412) {
					let errors = res.responseBody.error;
					for (const error in errors) {
						document.querySelector(`#login_form input[name="${error}"]`).nextElementSibling.innerText =
							errors[error];
					}
					reject(false);
				} else if (!!res.statusCode && res.statusCode !== 200) {
					document.querySelector(`#login_form .alert`).innerText = res.responseBody.message;
					document.querySelector(`#login_form .alert`).style.display = "block";
					reject(false);
				} else if (!!res.statusCode && res.statusCode === 200) {
					console.log(res);
					if (typeof window !== "undefined") {
						localStorage.setItem("jwt", JSON.stringify(res.responseBody));
						console.log("returning");
						resolve({ status: true });
					}
				}
			});
		}
	});
};

export const signupService = (data = {}) => {
	return new Promise((resolve, reject) => {
		let config = {
			name: {
				required: true,
				minLength: 3,
				maxLength: 32,
				regex: "",
			},
			email: {
				required: true,
				minLength: 3,
				maxLength: 32,
				regex: "",
			},
			username: {
				required: true,
				minLength: 3,
				maxLength: 32,
				regex: "",
			},
			password: {
				required: true,
				minLength: 7,
				maxLength: 32,
			},
		};
		let validateResponse = validateData(config, data);
		if (validateResponse.status === false) {
			let errors = validateResponse.error;
			for (const error in errors) {
				document.querySelector(`#signup_form input[name="${error}"]`).nextElementSibling.innerText =
					errors[error];
			}
		} else {
			signupApi(data).then((res) => {
				if (!!res.statusCode && res.statusCode === 412) {
					let errors = res.responseBody.error;
					for (const error in errors) {
						document.querySelector(`#signup_form input[name="${error}"]`).nextElementSibling.innerText =
							errors[error];
					}
					reject({ status: false });
				} else if (!!res.statusCode && res.statusCode !== 200) {
					document.querySelector(`#signup_form .alert`).innerText = res.message;
					document.querySelector(`#signup_form .alert`).style.display = "block";
					reject({ status: false });
				} else if (!!res.statusCode && res.statusCode === 200) {
					resolve({ status: true });
				}
			});
		}
	});
};
