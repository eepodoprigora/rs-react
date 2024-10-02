import { useTicTacToe } from '../../useTicTacToe';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const { field, handleClick, getStatus, newGame } = useTicTacToe();

	return (
		<GameLayout
			field={field}
			handleClick={handleClick}
			newGame={newGame}
			getStatus={getStatus}
		/>
	);
};
