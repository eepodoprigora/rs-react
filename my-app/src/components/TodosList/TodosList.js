import { useRequestSearchAndSortTodos, useRequestGetTodos } from '../../hooks';
import styles from './todosList.module.css';
import { NavLink } from 'react-router-dom';

export const TodosList = () => {
	const { todos } = useRequestGetTodos();
	const { filteredAndSortedTodos } = useRequestSearchAndSortTodos(todos);

	return (
		<>
			{filteredAndSortedTodos.length > 0 ? (
				<ul className={styles.list}>
					{filteredAndSortedTodos.map(({ id, title }) => (
						<li className={styles['list-item']} key={id}>
							<NavLink className={styles['task-link']} to={`/task/${id}`}>
								<div className={styles['task-item']}>{title}</div>
							</NavLink>
						</li>
					))}
				</ul>
			) : (
				<div style={{ marginBottom: '20px' }}>Ничего не нашлось</div>
			)}
		</>
	);
};
