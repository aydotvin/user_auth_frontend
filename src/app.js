import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import lang from "./lang/default";
// import { clearValidationMessages } from "./helper/common";
import * as allExportedFunctions from "./helper/common";

window.lang = lang;

ReactDOM.render(<Routes></Routes>, document.getElementById("root"));
// clearValidationMessages();

/**
 * 	Run all the imported methods automatically.
 * 	TODO: Need to figure out a different way to run all the imported functions and get rid of eval.
 */
for (const eachFunction in allExportedFunctions) {
	let eachMethodToRun = eval(allExportedFunctions[eachFunction]);
	eachMethodToRun();
}
