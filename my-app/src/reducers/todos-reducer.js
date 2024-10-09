export const initialTodosState = {
	todos: [],
	sortedAndFilteredTodos: [],
	isLoading: false,
	error: null,
	isEditing: null,
	sortingDirection: null,
	searchFilter: '',
};

export const todosReducer = (state = initialTodosState, { type, payload }) => {
	switch (type) {
		case 'ADD_TODO':
			const newTodosAdd = [...state.todos, payload];
			return {
				...state,
				todos: newTodosAdd,
				sortedAndFilteredTodos: applySearchAndSort(
					newTodosAdd,
					state.searchFilter,
					state.sortingDirection,
				),
			};
		case 'UPDATE_TODO':
			const newTodosUpdate = state.todos.map((item) =>
				item.id === payload.id ? { ...item, title: payload.newTitle } : item,
			);
			return {
				...state,
				todos: newTodosUpdate,
				sortedAndFilteredTodos: applySearchAndSort(
					newTodosUpdate,
					state.searchFilter,
					state.sortingDirection,
				),
			};
		case 'DELETE_TODO':
			const newTodosDelete = state.todos.filter((todo) => todo.id !== payload);
			return {
				...state,
				todos: newTodosDelete,
				sortedAndFilteredTodos: applySearchAndSort(
					newTodosDelete,
					state.searchFilter,
					state.sortingDirection,
				),
			};
		case 'SORT_TODOS':
			return {
				...state,
				sortingDirection: payload,
				sortedAndFilteredTodos: applySearchAndSort(
					state.todos,
					state.searchFilter,
					payload,
				),
			};
		case 'FILTER_TODOS':
			return {
				...state,
				searchFilter: payload,
				sortedAndFilteredTodos: applySearchAndSort(
					state.todos,
					payload,
					state.sortingDirection,
				),
			};

		case 'TOGGLE_IS_EDITING':
			return {
				...state,
				isEditing: payload,
			};
		case 'GET_TODO_REQUEST':
			return {
				...state,
				isLoading: true,
			};
		case 'GET_TODO_SUCCESS':
			const newTodos = [
				...state.todos.filter(
					(todo) => !payload.some((newTodo) => newTodo.id === todo.id),
				),
				...payload,
			];
			return {
				...state,
				todos: newTodos,
				sortedAndFilteredTodos: applySearchAndSort(
					newTodos,
					state.searchFilter,
					state.sortingDirection,
				),
				isLoading: false,
			};
		case 'GET_TODO_ERROR':
			return {
				...state,
				isLoading: false,
				error: payload,
			};
		default:
			return state;
	}
};

export const getTodos = () => async (dispatch, getState) => {
	dispatch({ type: 'GET_TODO_REQUEST' });
	try {
		const res = await fetch('http://localhost:3005/todos');
		const data = await res.json();
		dispatch({ type: 'GET_TODO_SUCCESS', payload: data });
	} catch (err) {
		dispatch({ type: 'GET_TODO_ERROR', payload: err });
	}
};

const applySearchAndSort = (todos, searchFilter, sortingDirection) => {
	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchFilter.toLowerCase()),
	);

	if (sortingDirection === null) {
		return filteredTodos;
	}
	return filteredTodos.sort((a, b) =>
		sortingDirection === 'asc'
			? a.title.localeCompare(b.title)
			: b.title.localeCompare(a.title),
	);
};
