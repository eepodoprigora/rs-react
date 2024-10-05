import { useState, useEffect } from 'react';
import { useRefreshTodos } from './use-refresh-todos';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { refreshTodosFlag } = useRefreshTodos();

	console.log(refreshTodosFlag, 'flag');

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((response) => response.json())
			.then((loadedTodos) => {
				console.log(loadedTodos);
				setTodos(loadedTodos);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);

	return {
		todos,
		isLoading,
	};
};
