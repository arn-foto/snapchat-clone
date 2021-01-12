import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { resetCameraImage, selectCameraImage } from "../features/cameraSlice";
import "../styles/Preview.css";
import CloseIcon from "@material-ui/icons/Close";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuid } from "uuid";
import { db, storage } from "./firebase";
import firebase from "firebase";

function Preview() {
	const cameraImage = useSelector(selectCameraImage);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!cameraImage) {
			history.replace("/");
		}
	}, [cameraImage, history]);

	const closePreview = () => {
		dispatch(resetCameraImage());
	};

	// Using UUID to prevent user id collision
	const sendPost = () => {
		const id = uuid();
		const uploadTask = storage
			.ref(`posts/${id}`)
			.putString(cameraImage, "data_url");

		uploadTask.on(
			"state_changed",
			null,
			(error) => {
				console.log(error);
			},
			() => {
				// The "complete" function
				storage
					.ref("posts")
					.child(id)
					.getDownloadURL()
					.then((url) => {
						db.collection("posts").add({
							imageURL: url,
							username: "Anthony",
							read: false,
							// profilePic
							timestamp: firebase.firestore.FieldValue.serverTimestamp(),
						});
					});
			}
		);
	};

	return (
		<div className="preview">
			<div className="preview__toolbarRight">
				<TextFieldsIcon />
				<CreateIcon />
				<NoteIcon />
				<MusicNoteIcon />
				<AttachFileIcon />
				<CropIcon />
				<TimerIcon />
			</div>
			<CloseIcon onClick={closePreview} className="preview__close" />
			<img src={cameraImage} alt="" />
			<div onClick={sendPost} className="preview__footer">
				<h2>Send Now</h2>
				<SendIcon fontsize="small" classname="preview__sendIcon" />
			</div>
		</div>
	);
}

export default Preview;
