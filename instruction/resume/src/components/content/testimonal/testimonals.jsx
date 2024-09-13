import React from "react";
import { SectionHeader } from "../section-header";
import testimonals from "../../../data/testimonals.json";
import { Testimonal } from "./testimonal";

export const Testimonals = () => {
	return (
		<section id="testimonials" className="testimonials">
			<SectionHeader title="Testimonials" />

			<div className="testimonial-carousel">
				{testimonals.map((item) => (
					<Testimonal key={item.id} {...item} />

					
				))}
			</div>
		</section>
	);
};
