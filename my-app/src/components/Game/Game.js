import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const calculateWinner = (squares) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return WIN_PATTERNS[a];
			}
		}
		return null;
	};

	const handleClick = (index) => {
		if (field[index] !== '' || isGameEnded) return;

		const newField = field.slice();
		newField[index] = currentPlayer;
		setField(newField);

		// проверка на наличие победителя
		const winner = calculateWinner(newField);

		if (winner) {
			setIsGameEnded(true);
			return;
		}

		// Проверка на ничью
		if (newField.every((cell) => cell !== '')) {
			setIsDraw(true);
			setIsGameEnded(true);
			return;
		}
		// смена игрока
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	const getStatus = () => {
		if (isGameEnded) {
			if (isDraw) {
				return 'Ничья';
			} else {
				return `Победитель: ${currentPlayer}`;
			}
		} else {
			return `Ходит ${currentPlayer}`;
		}
	};
	const newGame = () => {
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
	};

	return (
		<GameLayout
			field={field}
			handleClick={handleClick}
			newGame={newGame}
			getStatus={getStatus}
		/>
	);
};
