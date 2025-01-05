import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PrincipalBoard = () => {
	const [col, setCol] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
	const [row, setRow] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown, true);
	}, []);
	const handleKeyDown = (e) => {
		console.log(e.key);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col col0"></div>
				<div className="col col1"></div>
				<div className="col col2"></div>
				<div className="col col3"></div>
				<div className="col col4"></div>
				<div className="col col5"></div>
				<div className="col col6"></div>
				<div className="col col7"></div>
				<div className="col col8"></div>
				<div className="col col9"></div>
				<div className="col col10"></div>
				<div className="col col11"></div>
				<div className="col col12"></div>
				<div className="col col13"></div>
				<div className="col col14"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col "></div>
				<div className="col snake"></div>
				<div className="col snake"></div>
				<div className="col snake"></div>
				<div className="col snake"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col apple"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
			<div className="row">
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
				<div className="col"></div>
			</div>
		</div>
	);
};

export default PrincipalBoard;
