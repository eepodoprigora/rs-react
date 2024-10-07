import { WIN_PATTERNS } from './data';
import { useState } from 'react';

export const useTicTacToe = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const calculateWinner = (squares) => {
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

	return {
		field,
		handleClick,
		getStatus,
		newGame,
	};
};
