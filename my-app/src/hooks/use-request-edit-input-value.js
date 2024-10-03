import { useState } from 'react';

export const useRequestEditInputValue = (refreshTodos) => {
	const [isEditing, setIsEditing] = useState(null);
	const [editInputValue, setEditInputValue] = useState('');

	const toggleEditingMode = (id, currentTitle) => {
		setIsEditing(id);
		setEditInputValue(currentTitle);
	};

	const saveEditedTask = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: editInputValue }),
		}).then(() => {
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
