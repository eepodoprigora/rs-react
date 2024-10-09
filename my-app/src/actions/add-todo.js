const fetchNewTodo = (title) => {
	return fetch('http://localhost:3005/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({ title: title }),
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log('success', response);
			return response;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
};

export const addTodo = (title) => (dispatch) => {
	return fetchNewTodo(title).then((newTodo) => {
		dispatch({
			type: 'ADD_TODO',
			payload: newTodo,
		});
	});
};
