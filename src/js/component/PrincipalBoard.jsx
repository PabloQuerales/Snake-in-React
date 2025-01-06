import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PrincipalBoard = () => {
	const [board, setBoard] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	]);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown, true);
	}, []);
	const positions = [];
	const findSnakePositions = (board) => {
		board.forEach((row, rowIndex) => {
			row.forEach((cell, colIndex) => {
				if (cell === 1) {
					positions.push([rowIndex, colIndex]);
				}
			});
		});
		return positions;
	};
	const snakePositions = findSnakePositions(board);
	const handleKeyDown = (e) => {
		if (e.key == "ArrowUp") {
			// row--;
		}
		if (e.key == "ArrowDown") {
			// row++;
			console.log(e.key);
		}
		if (e.key == "ArrowLeft") {
			// col--;
			console.log(e.key);
		}
		if (e.key == "ArrowRight") {
			snakePositions.forEach((e) => {
				e[1]++;
			});
			setBoard();
		}
	};

	return (
		<div className="container">
			{board.map((row, rowIndex) => (
				<div key={rowIndex} className="row">
					{row.map((cell, colIndex) => (
						<div key={colIndex} className={`cell ${cell === 1 ? "snake" : cell === 2 ? "food" : ""} col`}></div>
					))}
				</div>
			))}
		</div>
	);
};

export default PrincipalBoard;
