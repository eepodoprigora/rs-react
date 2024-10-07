import styles from './modal.module.css';

export const Modal = ({
	addNewTask,
	addInputValue,
	changeAddInputValue,
	isModalOpened,
	setIsModalOpened,
}) => {
	return (
		<div className={`${styles.modal} ${isModalOpened ? styles.opened : ''}`}>
			<div
				className={styles['modal-overlay']}
				onClick={() => setIsModalOpened(false)}
			></div>
			<div className={styles['modal-container']}>
				<button
					className={styles['modal-close']}
					onClick={() => setIsModalOpened(false)}
				></button>
				<h2>Новое дело</h2>
				<div className={styles['add-task']}>
					<textarea
						value={addInputValue}
						onChange={changeAddInputValue}
						className={styles['modal-input']}
					/>
					<button
						style={{ width: '100%' }}
						className="button"
						disabled={!addInputValue.length}
						onClick={() => addNewTask()}
					>
						Добавить
					</button>
				</div>
			</div>
		</div>
	);
};
