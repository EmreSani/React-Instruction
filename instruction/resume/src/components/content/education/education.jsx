import React from "react";
import "./education.css";

export const Education = (props) => {
	const { title, date, desc, index } = props;

	return (
		<div className={`resume-item ${index === 0 ? "top-item" : ""}`}>
			<h2>{title}</h2>
			<span>{date}</span>
			<p>{desc}</p>
		</div>
	);
};
