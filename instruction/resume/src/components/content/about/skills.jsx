import React from "react";
import { Skill } from "./skill";
import "./skills.css";
import skills from "../../../data/skills.json";

export const Skills = () => {
	return (
		<div className="skills">
			<div className="row">
				{skills.map((item) => (
					<div key={item.id} className="col-md-6 col-sm-6 col-xs-12 item">
						<Skill title={item.title} score={item.score} />
					</div>
				))}
			</div>
		</div>
	);
};
