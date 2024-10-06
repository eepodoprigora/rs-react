import { useState } from 'react';
import { useRequestGetTodos } from './use-request-get-todos';
import { useRequestGetTodo } from './use-request-get-todo';

export const useRequestEditInputValue = () => {
	const [isEditing, setIsEditing] = useState(null);
	const [editInputValue, setEditInputValue] = useState('');

	const toggleEditingMode = (id, currentTitle) => {
		setIsEditing(id);
		setEditInputValue(currentTitle);
	};

	const { refreshTodos } = useRequestGetTodos();
	const { refreshTodo } = useRequestGetTodo();

	const saveEditedTask = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: editInputValue }),
		}).then(() => {
			refreshTodo();
			refreshTodos();
			setIsEditing(null);
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
