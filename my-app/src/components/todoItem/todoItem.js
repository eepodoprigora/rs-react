import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import styles from './todoItem.module.css';

import changeIcon from '../../assets/change-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import doneIcon from '../../assets/done-icon.svg';
import { deleteTodo, toggleEditingMode, updateTodo } from '../../actions';
import { selectIsEditing } from '../../selectors';

export const TodoItem = ({ title, id }) => {
	const dispatch = useDispatch();
	const isEditing = useSelector(selectIsEditing);

	const [editInputValue, setEditInputValue] = useState(title);

	const onTodoDelete = () => {
		dispatch(deleteTodo(id));
	};
	const onEnterEditingMode = () => {
		dispatch(toggleEditingMode(id));
	};

	const onExitEditingMode = () => {
		dispatch(updateTodo({ id: id, newTitle: editInputValue }));
		dispatch(toggleEditingMode(null));
	};

	return (
		<li className={styles['list-item']}>
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
					<button className={styles['icon-wrapper']}>
						<img
							className={styles.icon}
							src={doneIcon}
							alt="Сохранить"
							onClick={onExitEditingMode}
						/>
					</button>
				) : (
					<button
						className={styles['icon-wrapper']}
						onClick={onEnterEditingMode}
					>
						<img className={styles.icon} src={changeIcon} alt="Изменить" />
					</button>
				)}
				<button className={styles['icon-wrapper']} onClick={onTodoDelete}>
					<img className={styles.icon} src={deleteIcon} alt="Удалить" />
				</button>
			</div>
		</li>
	);
};
