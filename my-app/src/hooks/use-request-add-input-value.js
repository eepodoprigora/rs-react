import { useState } from 'react';
import { useRefreshTodos } from './use-refresh-todos';

export const useRequestAddInputValue = () => {
	const [addInputValue, setAddInputValue] = useState('');
	const [isModalOpened, setIsModalOpened] = useState(false);

	const { refreshTodos } = useRefreshTodos();

	const changeAddInputValue = ({ target }) => {
		setAddInputValue(target.value);
	};

	const addNewTask = () => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: addInputValue }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('success', response);
				refreshTodos();
				setAddInputValue('');
				setIsModalOpened(false);
			});
	};

	return {
		addNewTask,
		addInputValue,
		changeAddInputValue,
		isModalOpened,
		setIsModalOpened,
	};
};
