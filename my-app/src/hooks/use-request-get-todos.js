import { useState, useEffect } from 'react';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((response) => response.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);
	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	return {
		todos,
		isLoading,
		refreshTodos,
	};
};
