import {
	useRequestDeleteTask,
	useRequestGetTodo,
	useRequestEditInputValue,
} from '../../hooks';
import { useNavigate } from 'react-router-dom';

import { TaskLayout } from './TaskLayout';

export const Task = () => {
	const { task } = useRequestGetTodo();
	const navigate = useNavigate();

	console.log(task, 'task1');

	const {
		isEditing,
		editInputValue,
		setEditInputValue,
		toggleEditingMode,
		saveEditedTask,
	} = useRequestEditInputValue();

	const { deleteTask } = useRequestDeleteTask();

	return (
		<TaskLayout
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
