import React from "react";
import { useState } from "react";
import Score from "./Score";
import PrincipalBoard from "./PrincipalBoard";

const Board = () => {
	const [score, setScore] = useState(0);
	const [scoreMax, setScoreMax] = useState(0);
	return (
		<>
			<Score score={score} scoreMax={scoreMax} />
			<PrincipalBoard />
		</>
	);
};
export default Board;
