import React, { useEffect } from "react";
import "../styles/App.css";
import WebcamCapture from "../Js/WebcamCapture";
import Chats from "../Js/Chats";
import Preview from "../Js/Preview";
import ChatView from "../Js/ChatView";
import Login from "../Js/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../features/appSlice";
import { auth } from "./firebase";
import snapLogo from "../img/snap-logo-01.png";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						username: authUser.displayName,
						profilePic: authUser.photoURL,
						id: authUser.uid,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						{" "}
						<img className="app__logo" src={snapLogo} alt="" />
						<div className="app__body">
							<div className="app__bodyBackground">
								<Switch>
									<Route path="/chats/view">
										<ChatView />
									</Route>
									<Route path="/chats">
										<Chats />
									</Route>
									<Route path="/preview">
										<Preview />
									</Route>
									<Route exact path="/">
										<WebcamCapture />
									</Route>
								</Switch>
							</div>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
