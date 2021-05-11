import React, { useState, useEffect } from "react";
import { loginService } from "./../../service/auth";
import { Link, Redirect } from "react-router-dom";

function Login() {
	const [data, setstate] = useState({
		username: "",
		password: "",
		needRedirect: false,
	});
	// useEffect(() => {});
	const handleChange = (fieldName) => async (event) => {
		setstate({ ...data, [fieldName]: event.target.value });
	};
	const login = (e) => {
		e.preventDefault();
		e.target.closest("#login_form").querySelector(".alert").innerText = "";
		e.target.closest("#login_form").querySelector(".alert").style.display = "none";
		loginService(data).then((res) => {
			if (res.status === true) {
				setstate({ ...data, needRedirect: true });
			}
		});
	};
	const performRedirect = (needRedirect) => {
		//	If already signed in, redirect to home page.
		if (needRedirect || localStorage.getItem("jwt")) {
			console.log("logged in.. redirecting to home");
			return <Redirect to='/'></Redirect>;
		}
	};

	return (
		<div className='h-100 flex-c fully-centered'>
			<form id='login_form' action='' className='w-25vw overflow-wrap' method='post'>
				<div className='alert alert-danger' style={{ display: "none" }}></div>
				<div className='form-group'>
					<label htmlFor='username'>Username</label>
					<input
						onChange={handleChange("username")}
						id='username'
						name='username'
						type='text'
						className='form-control'
						placeholder='Username'
						maxLength='24'
						autoFocus
					/>
					<span className='error'></span>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						onChange={handleChange("password")}
						id='password'
						name='password'
						type='password'
						className='form-control'
						placeholder='Password'
						maxLength='32'
					/>
					<span className='error'></span>
				</div>
				<div className='form-group flex-c fully-centered'>
					<button type='button' onClick={login} className='btn btn-primary btn-block w-50p'>
						Login
					</button>
				</div>
			</form>
			{performRedirect(data.needRedirect)}
			<Link to='/signup' className='btn btn-primary d-flex justify-content-center align-items-center'>
				Signup
			</Link>
		</div>
	);
}

export default Login;
