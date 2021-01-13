import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectSelectedImage } from "../features/appSlice";
import "../styles/ChatView.css";

function ChatView() {
	const selectedImage = useSelector(selectSelectedImage);
	const history = useHistory();

	useEffect(() => {
		if (!selectedImage) {
			exit();
		}
	}, [selectedImage]);

	const exit = () => {
		history.replace("/chats/view");
	};

	return (
		<div className="chatView">
			<img src={selectedImage} onClick={exit} alt="" />
		</div>
	);
}

export default ChatView;
