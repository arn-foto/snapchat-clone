import React from "react";
import "../styles/App.css";
import WebcamCapture from "../Js/WebcamCapture";
import Chats from "../Js/Chats";
import Preview from "../Js/Preview";
import ChatView from "../Js/ChatView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<div className="app__body">
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
			</Router>
		</div>
	);
}

export default App;
