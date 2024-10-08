import { InformationLayout } from './InformationLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';

import { RESTART_GAME } from '../../actions';

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const dispatch = useDispatch();

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
		dispatch(RESTART_GAME);
	};
	return <InformationLayout handleRestart={handleRestart} getStatus={getStatus} />;
};
