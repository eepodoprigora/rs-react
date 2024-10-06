import {
	useRequestDeleteTask,
	useRequestGetTodo,
	useRequestEditInputValue,
} from '../../hooks';
import { useNavigate } from 'react-router-dom';

import { TodoItemPageLayout } from './todoItemPageLayout';

export const TodoItemPage = () => {
	const { task } = useRequestGetTodo();
	const navigate = useNavigate();

	console.log(task, 'todoitempage');

	const {
		isEditing,
		editInputValue,
		setEditInputValue,
		toggleEditingMode,
		saveEditedTask,
	} = useRequestEditInputValue();

	const { deleteTask } = useRequestDeleteTask();

	return (
		<TodoItemPageLayout
			task={task}
			isEditing={isEditing}
			editInputValue={editInputValue}
			setEditInputValue={setEditInputValue}
			toggleEditingMode={toggleEditingMode}
			saveEditedTask={(id) => saveEditedTask(id)}
			deleteTask={deleteTask}
			navigate={navigate}
		/>
	);
};
