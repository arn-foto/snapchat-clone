import React from "react";
import "../styles/Login.css";
import snap from "../img/snap-logo-01.png";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import { login } from "../features/appSlice";

function Login() {
	const dispatch = useDispatch();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch(
					login({
						username: result.user.displayName,
						profilePic: result.user.photoURL,
						id: result.user.uid,
					})
				);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__container">
				<img src={snap} alt="snap-logo" />
				<Button variant="outlined" onClick={signIn}>
					Sign In
				</Button>
			</div>
		</div>
	);
}

export default Login;
