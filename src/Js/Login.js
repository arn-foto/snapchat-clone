import React from "react";
import "../styles/Login.css";
import snap from "../img/snap-logo-01.png";

function Login() {
	return (
		<div className="login">
			<div className="login__container">
				<img src={snap} alt="snap-logo" />
				<Button variant="outline" onClick={signIn}>
					Sign In
				</Button>
			</div>
		</div>
	);
}

export default Login;
