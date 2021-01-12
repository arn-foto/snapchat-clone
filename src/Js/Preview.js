import React from "react";
import { useSelector } from "react-redux";
import { selectCameraImage } from "../features/cameraSlice";
import "../styles/Preview.css";

function Preview() {
	const cameraImage = useSelector(selectCameraImage);

	return (
		<div className="preview">
			<img src={cameraImage} alt="" />
			<h1>Preview, son</h1>
		</div>
	);
}

export default Preview;
