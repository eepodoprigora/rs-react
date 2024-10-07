import { useState, useEffect } from 'react';

export const useRequestGetTodo = (id) => {
	const [task, setTask] = useState(null);
	const [shouldRefresh, setShouldRefresh] = useState(false);

	console.log(id, 'id');

	useEffect(() => {
		const fetchTodo = async () => {
			const response = await fetch(`http://localhost:3005/todos/${id}`);
			const loadedTodo = await response.json();
			console.log(loadedTodo, id, '2');
			setTask(loadedTodo);
		};

		fetchTodo();
	}, [id, shouldRefresh]); // Обновляем при изменении id или shouldRefresh

	const refreshTodo = () => setShouldRefresh((prev) => !prev); // Переключение флага

	console.log(task, '3');

	return {
		task,
		setTask,
		refreshTodo,
	};
};
