import React from "react";
import "./main-nav.css";	

export const MainNav = () => {
	return (
		<nav className="main-nav">
			<ul className="navigation">
				<li>
					<a href="#about">About Me</a>
				</li>
				<li>
					<a href="#experiences">Expereince</a>
				</li>
				<li>
					<a href="#educations">Education</a>
				</li>
				<li>
					<a href="#testimonials">Testimonals</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
