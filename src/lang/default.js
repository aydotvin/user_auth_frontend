const lang = {
	validationMessage: {
		required: {
			name: "Name is required.",
			email: "Email is required.",
			username: "Username is required.",
			password: "Password is required.",
		},
		minLength: {
			name: "Minimum of :MIN_LENGTH characters are required for Name.",
			email: "Minimum of :MIN_LENGTH characters are required for Email ID.",
			username: "Minimum of :MIN_LENGTH characters are required for User Name.",
			password: "Minimum of :MIN_LENGTH characters are required for Password.",
		},
		maxLength: {
			name: "Maximum of :MAX_LENGTH characters are allowed for Name.",
			email: "Maximum of :MAX_LENGTH characters are allowed for Email ID.",
			username: "Maximum of :MAX_LENGTH characters are allowed for User Name.",
			password: "Maximum of :MAX_LENGTH characters are allowed for Password.",
		},
		regex: {
			name: "Invalid Name.",
			email: "Invalid Email ID.",
			username: "Invalid User Name.",
			password: "Invalid Password.",
		},
	},
};

module.exports = lang;
