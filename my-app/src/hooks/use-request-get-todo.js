import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useRequestGetTodo = () => {
	const { id } = useParams();
	const [task, setTask] = useState(null);
	const [shouldRefresh, setShouldRefresh] = useState(false);

	useEffect(() => {
		const fetchTodo = async () => {
			const response = await fetch(`http://localhost:3005/todos/${id}`);
			const loadedTodo = await response.json();
			console.log(loadedTodo, id, 'test1');
			setTask(loadedTodo);
		};

		fetchTodo();
	}, [id, shouldRefresh]); // Обновляем при изменении id или shouldRefresh

	const refreshTodo = () => setShouldRefresh((prev) => !prev); // Переключение флага

	console.log(task, 'test2');

	return {
		task,
		setTask,
		refreshTodo,
	};
};
