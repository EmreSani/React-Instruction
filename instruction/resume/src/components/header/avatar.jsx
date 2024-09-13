import React from "react";
import "./avatar.css";

export const Avatar = () => {
	return (
		<>
			<div className="avatar">
				<img src="/images/my-pic.jpg" alt="avatar" />
			</div>

			<div className="name">
				<h1>John Doe</h1>
				<span>UX/UI Designer</span>
			</div>
		</>
	);
};
