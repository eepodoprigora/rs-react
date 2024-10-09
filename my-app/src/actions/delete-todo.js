const fetchDeleteTodo = (id) => {
	return fetch(`http://localhost:3005/todos/${id}`, {
		method: 'DELETE',
	})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
};

export const deleteTodo = (id) => (dispatch) => {
	return fetchDeleteTodo(id).then(() => {
		dispatch({
			type: 'DELETE_TODO',
			payload: id,
		});
	});
};
