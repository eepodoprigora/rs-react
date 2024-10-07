import { useState } from 'react';
import { useRequestGetTodos } from './use-request-get-todos';
import { useRequestGetTodo } from './use-request-get-todo';

export const useRequestEditInputValue = () => {
	const [isEditing, setIsEditing] = useState(null);
	const [editInputValue, setEditInputValue] = useState('');

	const toggleEditingMode = (id, currentTitle, initialTitle) => {
		setIsEditing(id);
		setEditInputValue(initialTitle ? initialTitle : currentTitle);
	};

	const { refreshTodos } = useRequestGetTodos();
	const { refreshTodo } = useRequestGetTodo();

	const saveEditedTask = async (id) => {
		await fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: editInputValue }),
		});
		console.log(editInputValue, 'not working', '1');
		refreshTodo();
		refreshTodos();
		setIsEditing(null);
	};

	return {
		isEditing,
		editInputValue,
		setEditInputValue,
		toggleEditingMode,
		saveEditedTask,
	};
};
