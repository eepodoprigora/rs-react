import { useState, useEffect } from 'react';
import { GameLayout } from './GameLayout';

import { store } from '../../redux/store';

export const Game = () => {
	const [gameState, setGameState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setGameState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const handleClick = (index) => {
		store.dispatch({ type: 'MAKE_MOVE', payload: index });
	};

	const { field } = gameState;

	return <GameLayout field={field} handleClick={handleClick} />;
};
