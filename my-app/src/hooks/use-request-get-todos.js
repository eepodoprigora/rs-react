import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const todosBdRef = ref(db, 'todos');

		return onValue(todosBdRef, (snapshot) => {
			const loadedTodos = snapshot.val();
			setTodos(loadedTodos);
			setIsLoading(false);
		});
	}, []);

	return {
		todos,
		isLoading,
	};
};
