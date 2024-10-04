import { ref, set } from 'firebase/database';
import { db } from '../firebase';

import { useState } from 'react';

export const useRequestEditInputValue = () => {
	const [isEditing, setIsEditing] = useState(null);
	const [editInputValue, setEditInputValue] = useState('');

	const toggleEditingMode = (id, currentTitle) => {
		setIsEditing(id);
		setEditInputValue(currentTitle);
	};

	const saveEditedTask = (id) => {
		const editTitleDbRef = ref(db, `todos/${id}`);

		set(editTitleDbRef, {
			title: editInputValue,
		}).then(() => {
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
