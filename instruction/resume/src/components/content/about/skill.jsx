import React from "react";

export const Skill = (props) => {
	return (
		<>
			<div className="skill-info clearfix">
				<h3 className="pull-left">{props.title}</h3>
				<span className="pull-right">{props.score}%</span>
			</div>
			<div className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					aria-valuenow={props.score}
					aria-valuemin="0"
					aria-valuemax="100"
					style={{ width: `${props.score}%` }}
				></div>
			</div>
		</>
	);
};
