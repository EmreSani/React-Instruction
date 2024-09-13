import React from "react";
import "./experience.css";

export const Experience = (props) => {
	const { company, title, date, desc, index } = props;

	/* let classNames = ["resume-item"];
    if(index === 0) {
        classNames.push("top-item");
    }
 */

	return (
		<div className={`resume-item ${index === 0 ? "top-item" : ""}`}>
			<h2>{company}</h2>
			<span>
				{title} | {date}
			</span>
			<p>{desc}</p>
		</div>
	);
};
