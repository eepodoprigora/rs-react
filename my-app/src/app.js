import styles from './app.module.css';

import {
	useRequestAddInputValue,
	useRequestEditInputValue,
	useRequestDeleteTask,
	useRequestGetTodos,
	useRequestSearchAndSortTodos,
} from './hooks';

import changeIcon from './assets/change-icon.svg';
import deleteIcon from './assets/delete-icon.svg';
import doneIcon from './assets/done-icon.svg';
import sortUpIcon from './assets/sort-up.svg';
import sortDownIcon from './assets/sort-down.svg';

export const App = () => {
	const { todos, isLoading } = useRequestGetTodos();

	const {
		addNewTask,
		addInputValue,
		changeAddInputValue,
		isModalOpened,
		setIsModalOpened,
	} = useRequestAddInputValue();

	const {
		isEditing,
		editInputValue,
		toggleEditingMode,
		saveEditedTask,
		setEditInputValue,
	} = useRequestEditInputValue();

	const { deleteTask } = useRequestDeleteTask();

	const {
		searchQuery,
		sortDirection,
		handleSearchChange,
		handleSortChange,
		filteredAndSortedTodos,
	} = useRequestSearchAndSortTodos(todos);

	return (
		<>
			<div className={styles.outer}>
				<div className={styles.container}>
					<h1>Список дел</h1>
					{isLoading ? (
						<div className={styles.loader}></div>
					) : (
						<>
							{!todos ? (
								<div style={{ marginBottom: '20px' }}>
									Сначала нужно что-то добавить
								</div>
							) : (
								<>
									<div className={styles.fl}>
										<input
											type="text"
											placeholder="Поиск по делам..."
											value={searchQuery}
											onChange={handleSearchChange} // Обработчик изменения запроса
											className={styles.search}
										/>
										<button
											className={`${styles['icon-wrapper']} ${styles['sort-icon']}`}
											onClick={() => handleSortChange()}
										>
											<img
												className={styles.icon}
												src={
													sortDirection === (null || 'asc')
														? sortUpIcon
														: sortDownIcon
												}
												alt="Сортировка"
											/>
										</button>
									</div>
									{filteredAndSortedTodos.length > 0 ? (
										<ul className={styles.list}>
											{filteredAndSortedTodos.map(
												([id, { title }]) => (
													<li
														className={styles['list-item']}
														key={id}
														data-key={id}
													>
														{isEditing === id ? (
															<input
																className={styles.input}
																value={editInputValue}
																onChange={({ target }) =>
																	setEditInputValue(
																		target.value,
																	)
																}
															/>
														) : (
															<div>{title}</div>
														)}
														<div>
															{isEditing === id ? (
																<button
																	className={
																		styles[
																			'icon-wrapper'
																		]
																	}
																	onClick={() =>
																		saveEditedTask(id)
																	}
																>
																	<img
																		className={
																			styles.icon
																		}
																		src={doneIcon}
																		alt="Сохранить"
																	/>
																</button>
															) : (
																<button
																	className={
																		styles[
																			'icon-wrapper'
																		]
																	}
																	onClick={() =>
																		toggleEditingMode(
																			id,
																			title,
																		)
																	}
																>
																	<img
																		className={
																			styles.icon
																		}
																		src={changeIcon}
																		alt="Изменить"
																	/>
																</button>
															)}
															<button
																className={
																	styles['icon-wrapper']
																}
																onClick={() =>
																	deleteTask(id)
																}
															>
																<img
																	className={
																		styles.icon
																	}
																	src={deleteIcon}
																	alt="Удалить"
																/>
															</button>
														</div>
													</li>
												),
											)}
										</ul>
									) : (
										<div style={{ marginBottom: '20px' }}>
											Ничего не нашлось
										</div>
									)}
								</>
							)}

							<button
								className={styles.button}
								onClick={() => setIsModalOpened(true)}
							>
								Добавить
							</button>
						</>
					)}
				</div>
			</div>
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
							className={styles.button}
							disabled={!addInputValue.length}
							onClick={() => addNewTask()}
						>
							Добавить
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
