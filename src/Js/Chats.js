import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import "../styles/Chats.css";
import { db } from "./firebase";

function Chats() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	return (
		<div className="chats">
			<div className="chats__header">
				<Avatar className="chats__avatar" />
				<div className="chats__search">
					<SearchIcon />
					<input placeholder="Friends" type="text" />
				</div>
				<ChatBubbleIcon className="chats__chatIcon" />
			</div>
			<div className="chat__posts">
				{posts.map(
					({
						id,
						data: { profilePic, username, timestamp, imageUrl, read },
					}) => (
						<Chat
							key={id}
							username={username}
							timestamp={timestamp}
							imageUrl={imageUrl}
							read={read}
							profilePic={profilePic}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Chats;
