import { useSelector } from 'react-redux';

import { selectFilteredAndSortedTodos } from '../../selectors';

import { TodoItem } from '../todoItem/todoItem';
import styles from './todosList.module.css';

export const TodosList = () => {
	const todos = useSelector(selectFilteredAndSortedTodos);
	return (
		<>
			{todos.length > 0 ? (
				<ul className={styles.list}>
					{todos.map(({ id, title }) => (
						<TodoItem key={id} title={title} id={id} />
					))}
				</ul>
			) : (
				<div style={{ marginBottom: '20px' }}>Ничего не нашлось</div>
			)}
		</>
	);
};
