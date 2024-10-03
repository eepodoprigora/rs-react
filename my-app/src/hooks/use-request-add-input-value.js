import { useState } from 'react';

export const useRequestAddInputValue = (refreshTodos) => {
	const [addInputValue, setAddInputValue] = useState('');
	const [isModalOpened, setIsModalOpened] = useState(false);

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
