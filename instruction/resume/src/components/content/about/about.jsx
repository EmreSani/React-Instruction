import React from "react";
import { SectionHeader } from "../section-header";
import { Intro } from "./intro";
import { Skills } from "./skills";
import { ButtonResumeDownload } from "./button-resume-download";

export const About = () => {
	return (
		<section id="about" className="about">
			<SectionHeader title="About Me">
				<ButtonResumeDownload />
			</SectionHeader>
			<Intro />
			<Skills />
		</section>
	);
};
