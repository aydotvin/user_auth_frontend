import React, { useState, useEffect } from "react";
import { signupService } from "./../../service/auth";
import { Link, Redirect } from "react-router-dom";

function Signup() {
	const [data, setstate] = useState({
		email: "",
		username: "",
		password: "",
		name: "",
		needRedirect: false,
	});
	useEffect(() => {
		// if (localStorage.getItem("jwt")) {
		// 	console.log("logged in.. redirecting to home");
		// 	setstate({ ...data, needRedirect: true });
		// 	return <Redirect to='/'></Redirect>;
		// }
	});
	const handleChange = (fieldName) => async (event) => {
		setstate({ ...data, [fieldName]: event.target.value });
	};
	const signup = (e) => {
		e.preventDefault();
		e.target.closest("#signup_form").querySelector(".alert").innerText = "";
		e.target.closest("#signup_form").querySelector(".alert").style.display = "none";
		signupService(data)
			.then((res) => {
				if (res.status === true) {
					setstate({ ...data, needRedirect: true });
				}
			})
			.catch((err) => {
				//	Nothing to do here, validations and error messages are already taken care of in service call.
				console.log(err);
			});
	};
	const performRedirect = (needRedirect) => {
		/**
		 * Once sign up is complete, redirect to login.
		 * TODO: May be auto fill the login form with this new username?
		 */
		if (needRedirect) {
			return <Redirect to='/login'></Redirect>;
		}
		//	If already signed in, redirect to home page.
		if (localStorage.getItem("jwt")) {
			console.log("logged in.. redirecting to home");
			return <Redirect to='/'></Redirect>;
		}
	};
	return (
		<div className='h-100 flex-c fully-centered'>
			<form id='signup_form' action='' className='w-25vw overflow-wrap' method='post'>
				<div className='alert alert-danger' style={{ display: "none" }}></div>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						onChange={handleChange("name")}
						id='name'
						name='name'
						type='text'
						className='form-control'
						placeholder='Full Name'
						maxLength='32'
						autoFocus
					/>
					<span className='error'></span>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						onChange={handleChange("email")}
						id='email'
						name='email'
						type='text'
						className='form-control'
						placeholder='Email'
						maxLength='24'
					/>
					<span className='error'></span>
				</div>
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
					<button type='button' onClick={signup} className='btn btn-primary btn-block w-50p'>
						Signup
					</button>
				</div>
			</form>
			{performRedirect(data.needRedirect)}
			<Link to='/login' className='btn btn-primary d-flex justify-content-center align-items-center'>
				Login
			</Link>
		</div>
	);
}

export default Signup;
