import React from "react";

const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="Reloj"><i className="fa fa-clock"></i></div>
			<div className="Six">{props.digitSix % 10}</div>
			<div className="Five">{props.digitFive % 10}</div>
			<div className="Four">{props.digitFour % 10}</div>
			<div className="Three">{props.digitThree % 10}</div>
			<div className="Two">{props.digitTwo % 10}</div>
			<div className="One">{props.digitOne % 10}</div>
		</div>
	);
};

export default SimpleCounter;
