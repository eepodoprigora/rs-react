import styles from './todoItem.module.css';
import { NavLink } from 'react-router-dom';

export const TodoItem = ({ title, id }) => {
	return (
		<li className={styles['list-item']}>
			<NavLink className={styles['task-link']} to={`/task/${id}`}>
				{title}
			</NavLink>
		</li>
	);
};
