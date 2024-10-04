import { ref, push } from 'firebase/database';
import { db } from '../firebase';

import { useState } from 'react';

export const useRequestAddInputValue = () => {
	const [addInputValue, setAddInputValue] = useState('');
	const [isModalOpened, setIsModalOpened] = useState(false);

	const changeAddInputValue = ({ target }) => {
		setAddInputValue(target.value);
	};

	const todosBdRef = ref(db, 'todos');
	const addNewTask = () => {
		push(todosBdRef, {
			title: addInputValue,
		}).then((response) => {
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
