import React from "react";
import "./testimonal.css";
export const Testimonal = (props) => {
	const { image, name, message } = props;

	return (
		<div className="item">
			<div className="row">
				<div className="col-md-2 col-sm-2 hidden-xs">
					<div className="thumb">
						<img
							src={`/images/${image}`}
							alt="testimonial-customer"
						/>
					</div>
				</div>
				<div className="text col-md-10 col-sm-10 col-xs-12">
					<p>{message}</p>
					<span className="author">- {name} -</span>
				</div>
			</div>
		</div>
	);
};
