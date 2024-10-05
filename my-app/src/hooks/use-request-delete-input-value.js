import { useNavigate } from 'react-router-dom';
import { useRefreshTodos } from './use-refresh-todos';

export const useRequestDeleteTask = () => {
	const navigate = useNavigate();

	const { refreshTodos } = useRefreshTodos();

	const deleteTask = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		}).then(() => {
			navigate('/');
			refreshTodos();
		});
	};

	return {
		deleteTask,
	};
};
