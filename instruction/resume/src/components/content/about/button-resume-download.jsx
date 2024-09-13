import React from "react";
import "./button-resume-download.css";

export const ButtonResumeDownload = () => {
	return (
		<a
			href="#"
			className="resume-download"
			data-toggle="tooltip"
			data-placement="bottom"
			title="Download"
		>
			<i className="fa fa-download" aria-hidden="true">
				{" "}
			</i>{" "}
			Download Resume
		</a>
	);
};
