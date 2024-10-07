import { WIN_PATTERNS } from '../data';

const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
};

const calculateWinner = (squares) => {
	for (let i = 0; i < WIN_PATTERNS.length; i++) {
		const [a, b, c] = WIN_PATTERNS[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return WIN_PATTERNS[a];
		}
	}
	return null;
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'MAKE_MOVE':
			const { field, currentPlayer, isGameEnded } = state;

			console.log(payload);

			// игра завершена или клетка занята
			if (isGameEnded || field[payload]) {
				return state;
			}

			// обновление поля
			const newField = field.slice();
			newField[payload] = currentPlayer;

			// Проверяем на победителя
			const winner = calculateWinner(newField);

			// проверяем на ничью
			const isDraw = !newField.includes('') && !winner;

			return {
				...state,
				field: newField,
				currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
				isGameEnded: !!winner || isDraw,
				isDraw: isDraw,
			};
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
