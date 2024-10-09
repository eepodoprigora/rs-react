export const initialModalState = {
	isOpened: false,
};

export const modalReducer = (state = initialModalState, { type, payload }) => {
	switch (type) {
		case 'TOGGLE_MODAL_VISIBILITY': {
			return { ...state, isOpened: payload };
		}
		default:
			return state;
	}
};
