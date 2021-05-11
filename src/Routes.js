import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/common/Home";
import Login from "./component/common/Login";
import Signup from "./component/common/Signup";
import "./style/style.css";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home}></Route>
				<Route path='/login' exact component={Login}></Route>
				<Route path='/signup' exact component={Signup}></Route>
			</Switch>
		</Router>
	);
}

export default Routes;
