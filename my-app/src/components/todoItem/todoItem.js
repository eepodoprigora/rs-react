import styles from './todoItem.module.css';

import changeIcon from '../../assets/change-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import doneIcon from '../../assets/done-icon.svg';

import { useContext } from 'react';

import { TodoContext } from '../../context/context';

export const TodoItem = ({ id, title }) => {
	const {
		isEditing,
		editInputValue,
		toggleEditingMode,
		saveEditedTask,
		setEditInputValue,
		deleteTask,
	} = useContext(TodoContext);

	return (
		<li className={styles['list-item']} key={id}>
			{isEditing === id ? (
				<input
					className={styles.input}
					value={editInputValue}
					onChange={({ target }) => setEditInputValue(target.value)}
				/>
			) : (
				<div>{title}</div>
			)}
			<div>
				{isEditing === id ? (
					<button
						className={styles['icon-wrapper']}
						onClick={() => saveEditedTask(id)}
					>
						<img className={styles.icon} src={doneIcon} alt="Сохранить" />
					</button>
				) : (
					<button
						className={styles['icon-wrapper']}
						onClick={() => toggleEditingMode(id, title)}
					>
						<img className={styles.icon} src={changeIcon} alt="Изменить" />
					</button>
				)}
				<button className={styles['icon-wrapper']} onClick={() => deleteTask(id)}>
					<img className={styles.icon} src={deleteIcon} alt="Удалить" />
				</button>
			</div>
		</li>
	);
};
