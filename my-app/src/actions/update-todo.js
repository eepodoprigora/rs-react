const fetchUpdateTodo = ({ id, newTitle }) => {
	return fetch(`http://localhost:3005/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({ title: newTitle }),
	}).catch((error) => {
		console.error('Error:', error);
	});
};

export const updateTodo = (todo) => (dispatch) => {
	return fetchUpdateTodo(todo).then(() => {
		dispatch({
			type: 'UPDATE_TODO',
			payload: todo,
		});
	});
};
