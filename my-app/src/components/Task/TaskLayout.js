import styles from './task.module.css';

export const TaskLayout = ({
	task,
	isEditing,
	editInputValue,
	setEditInputValue,
	toggleEditingMode,
	saveEditedTask,
	deleteTask,
	navigate,
}) => {
	return (
		<div className={styles.container}>
			<button className="button" onClick={() => navigate(-1)}>
				Назад
			</button>
			<h2>Задача: {task?.id}</h2>
			{isEditing ? (
				<textarea
					className={styles.textarea}
					value={editInputValue}
					onChange={({ target }) => setEditInputValue(target.value)}
				/>
			) : (
				<div className={styles['inner-title']}>{task?.title}</div>
			)}

			<div className={styles['action-buttons']}>
				{!isEditing ? (
					<button
						className="button"
						onClick={() => {
							console.log('Текущий заголовок:', task?.title);
							toggleEditingMode(task?.id, editInputValue, task?.title); // Передаем правильные значения
						}}
					>
						Изменить
					</button>
				) : (
					<button
						className="button"
						onClick={() => {
							console.log('Сохраняем задачу с ID:', task?.id);
							saveEditedTask(task?.id);
						}}
					>
						Cохранить
					</button>
				)}

				<button
					style={{ marginLeft: '10px' }}
					className="button"
					onClick={() => {
						console.log('Удаляем задачу с ID:', task.id);
						deleteTask(task.id);
					}}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};
