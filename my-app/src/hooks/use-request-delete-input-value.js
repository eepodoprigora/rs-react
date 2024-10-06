export const useRequestDeleteTask = (refreshTodos) => {
	const deleteTask = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		}).then(() => refreshTodos());
	};

	return {
		deleteTask,
	};
};
