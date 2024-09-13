import React from "react";
import { SectionHeader } from "../section-header";
import experiences from "../../../data/experience.json";
import { Experience } from "./experience";

export const Experiences = () => {
	return (
		<section id="experiences" className="experiences">
			<SectionHeader title="Experiences" />

			<div className="row">
				{experiences.map((item, index) => (
					<div
						key={item.company}
						className="col-md-12 col-sm-12 col-xs-12"
					>
						<Experience {...item} index={index} />
					</div>
				))}
			</div>
		</section>
	);
};
