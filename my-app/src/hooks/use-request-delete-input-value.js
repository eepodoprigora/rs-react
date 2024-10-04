import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTask = () => {
	const deleteTask = (id) => {
		const itemDbRef = ref(db, `todos/${id}`);

		remove(itemDbRef);
	};

	return {
		deleteTask,
	};
};
