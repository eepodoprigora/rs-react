import { InformationLayout } from './InformationLayout';
import { store } from '../../redux/store';

export const Information = () => {
	const { currentPlayer, isGameEnded, isDraw } = store.getState();

	const getStatus = () => {
		if (isGameEnded) {
			if (isDraw) {
				return 'Ничья';
			} else {
				return `Победитель: ${currentPlayer === 'X' ? '0' : 'X'}`;
			}
		} else {
			return `Ходит ${currentPlayer}`;
		}
	};

	const handleRestart = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};
	return <InformationLayout handleRestart={handleRestart} getStatus={getStatus} />;
};
