import { TodoItem } from '../todoItem/todoItem';
import styles from './todosList.module.css';

export const TodosList = ({
	isEditing,
	editInputValue,
	toggleEditingMode,
	saveEditedTask,
	setEditInputValue,
	deleteTask,
	filteredAndSortedTodos,
}) => {
	return (
		<>
			{filteredAndSortedTodos.length > 0 ? (
				<ul className={styles.list}>
					{filteredAndSortedTodos.map(({ id, title }) => (
						<TodoItem
							key={id}
							id={id}
							title={title}
							isEditing={isEditing}
							editInputValue={editInputValue}
							toggleEditingMode={toggleEditingMode}
							saveEditedTask={saveEditedTask}
							setEditInputValue={setEditInputValue}
							deleteTask={deleteTask}
						/>
					))}
				</ul>
			) : (
				<div style={{ marginBottom: '20px' }}>Ничего не нашлось</div>
			)}
		</>
	);
};
