import {
	useRequestDeleteTask,
	useRequestGetTodo,
	useRequestEditInputValue,
} from '../../hooks';
import { useNavigate } from 'react-router-dom';

import { TodoItemPageLayout } from './todoItemPageLayout';
import { useParams } from 'react-router-dom';

export const TodoItemPage = () => {
	const { id } = useParams();
	const {
		isEditing,
		editInputValue,
		setEditInputValue,
		toggleEditingMode,
		saveEditedTask,
	} = useRequestEditInputValue();
	const { task } = useRequestGetTodo(id);
	const navigate = useNavigate();

	// console.log(task, 'todoitempage');

	const { deleteTask } = useRequestDeleteTask();

	return (
		<TodoItemPageLayout
			task={task}
			isEditing={isEditing}
			editInputValue={editInputValue}
			setEditInputValue={setEditInputValue}
			toggleEditingMode={toggleEditingMode}
			saveEditedTask={saveEditedTask}
			deleteTask={deleteTask}
			navigate={navigate}
		/>
	);
};
