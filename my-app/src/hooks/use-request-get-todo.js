import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useRequestGetTodo = () => {
	const { id } = useParams();
	const [task, setTask] = useState(null);
	const [shouldRefresh, setShouldRefresh] = useState(false);

	useEffect(() => {
		if (id) {
			fetch(`http://localhost:3005/todos/${id}`)
				.then((response) => response.json())
				.then((loadedTodo) => {
					setTask(loadedTodo);
					console.log(loadedTodo, 'loaded'); // Лог загруженной задачи
				});
		}
	}, [id, shouldRefresh]); // Обновляем при изменении id или shouldRefresh

	const refreshTask = () => setShouldRefresh((prev) => !prev); // Переключение флага

	return {
		task,
		setTask,
		refreshTask,
	};
};
