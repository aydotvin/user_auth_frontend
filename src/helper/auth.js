export const validateData = (config = {}, data = {}) => {
	let result = { status: true, error: {} };
	console.log("common validator called");

	for (const field in data) {
		if (config[field] !== undefined) {
			//	If error found in one validation, do not check further validations for the same field. So break fieldsLoop;
			fieldsLoop: for (const validation in config[field]) {
				switch (validation) {
					case "required":
						if (config[field][validation] === true) {
							if (data[field].length === 0) {
								let errorMessage = window.lang.validationMessage.required[field];
								result["status"] = false;
								result.error[field] = errorMessage;
								break fieldsLoop;
							}
						}
						break;

					case "minLength":
						if (data[field].length < config[field][validation]) {
							let errorMessage = window.lang.validationMessage.minLength[field].replace(
								":MIN_LENGTH",
								config[field][validation]
							);
							result["status"] = false;
							result.error[field] = errorMessage;
							break fieldsLoop;
						}
						break;

					case "maxLength":
						if (data[field].length > config[field][validation]) {
							let errorMessage = window.lang.validationMessage.maxLength[field].replace(
								":MAX_LENGTH",
								config[field][validation]
							);
							result["status"] = false;
							result.error[field] = errorMessage;
							break fieldsLoop;
						}
						break;

					case "regex":
						// console.log("TODO: regex check pending " + field);
						break;

					default:
						break;
				}
			}
		}
	}

	return result;
};
