import { TodoItem } from '../todoItem/todoItem';
import styles from './todosList.module.css';

export const TodosList = ({ filteredAndSortedTodos }) => {
	return (
		<>
			{filteredAndSortedTodos.length > 0 ? (
				<ul className={styles.list}>
					{filteredAndSortedTodos.map(({ id, title }) => (
						<TodoItem key={id} id={id} title={title} />
					))}
				</ul>
			) : (
				<div style={{ marginBottom: '20px' }}>Ничего не нашлось</div>
			)}
		</>
	);
};
