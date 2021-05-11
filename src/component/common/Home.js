import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
	const [isLoggedin, setIsLoggedin] = useState(false);

	const signout = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("jwt");
			setIsLoggedin(false);
		}
	};
	useEffect(() => {
		if (localStorage.getItem("jwt")) {
			setIsLoggedin(true);
		}
	}, []);
	const homepageData = () => {
		if (localStorage.getItem("jwt") && isLoggedin) {
			let sessionData = JSON.parse(localStorage.getItem("jwt"));
			let name = sessionData.name;
			return (
				<div className='flex-c fully-centered'>
					<h1>Welcome, {name}</h1>
					<button type='button' onClick={signout} className='btn btn-primary btn-block w-50p'>
						Sign out
					</button>
				</div>
			);
		} else {
			return (
				<Link to='/login' className='btn btn-primary d-flex justify-content-center align-items-center'>
					Login
				</Link>
			);
		}
	};
	return (
		<div className='min-vh-100 d-flex align-items-center justify-content-center'>
			<div className='p-3 height-fit-content width-fit-content'>{homepageData()}</div>
		</div>
	);
}

export default Home;
