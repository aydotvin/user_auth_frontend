export const clearValidationMessages = () => {
	document.querySelectorAll("input, select, textarea").forEach(function (field) {
		let events = "change keypress";
		let eventsArray = events.split(" ");
		eventsArray.forEach((event) => {
			field.addEventListener(event, function (e) {
				e.target.nextElementSibling.innerText = "";
			});
		});
	});
};
