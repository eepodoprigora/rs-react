export const MAKE_MOVE = 'MAKE_MOVE';

export const makeMove = (index) => {
	return {
		type: MAKE_MOVE,
		payload: index,
	};
};
