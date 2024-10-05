import { useState } from 'react';
import { useRequestGetTodo } from './use-request-get-todo';

export const useRequestEditInputValue = () => {
	const [isEditing, setIsEditing] = useState(null);
	const [editInputValue, setEditInputValue] = useState('');

	const { setTask, refreshTask } = useRequestGetTodo();

	const toggleEditingMode = (id, currentTitle, initialTitle) => {
		setIsEditing(id);
		setEditInputValue(currentTitle || initialTitle);
	};

	const saveEditedTask = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: editInputValue }),
		})
			.then((response) => response.json())
			.then((updatedTask) => {
				console.log(updatedTask, 'updatedTask'); // Лог обновленной задачи
				setTask(updatedTask); // Обновление состояния задачи
				setIsEditing(null); // Сброс режима редактирования
				refreshTask(); // Обновление флага для перезагрузки задачи
			});
	};

	return {
		isEditing,
		editInputValue,
		setEditInputValue,
		toggleEditingMode,
		saveEditedTask,
	};
};
