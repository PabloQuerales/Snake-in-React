import React from "react";
import { useState } from "react";

const Score = (props) => {
	return (
		<div className="box-score">
			<h3>Score</h3>
			<div>
				<span>{props.score}</span>
				<span>{props.scoreMax}</span>
			</div>
		</div>
	);
};

export default Score;
