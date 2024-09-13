import React from "react";
import { SectionHeader } from "../section-header";
import educations from "../../../data/education.json";
import { Education } from "./education";

export const Educations = () => {
	return (
		<section id="educations" className="educations">
			<SectionHeader title="Education" />

			<div className="row">
				{educations.map((item, index) => (
					<div
						key={item.title}
						className="col-md-12 col-sm-12 col-xs-12"
					>
						<Education {...item} index={index} />
					</div>
				))}
			</div>
		</section>
	);
};
