import React, { useRef } from "react";
import Webcam from "react-webcam";

const videoContraints = {
	width: 250,
	height: 400,
	facingMode: "user",
};

function WebcamCapture() {
	const webcamRef = useRef(null);
	return (
		<div className="webcamCapture">
			<Webcam
				audio={false}
				height={videoContraints.height}
				ref={webcamRef}
				screenshotFormat="image / jpeg"
				width={videoContraints.width}
				videoContraints={videoContraints}
			/>
		</div>
	);
}

export default WebcamCapture;
