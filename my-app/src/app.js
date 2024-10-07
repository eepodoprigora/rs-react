import styles from './app.module.css';

import { Modal } from './components/modal/modal';
import { TodoContext } from './context/context';

import {
	useRequestAddInputValue,
	useRequestEditInputValue,
	useRequestDeleteTask,
	useRequestGetTodos,
	useRequestSearchAndSortTodos,
} from './hooks';

import { SearchAndSort } from './components/searchAndSort/searchAndSort';
import { TodosList } from './components/todosList/todosList';

export const App = () => {
	const { todos, isLoading, refreshTodos } = useRequestGetTodos();

	const {
		addNewTask,
		addInputValue,
		changeAddInputValue,
		isModalOpened,
		setIsModalOpened,
	} = useRequestAddInputValue(refreshTodos);

	const {
		isEditing,
		editInputValue,
		toggleEditingMode,
		saveEditedTask,
		setEditInputValue,
	} = useRequestEditInputValue(refreshTodos);

	const { deleteTask } = useRequestDeleteTask(refreshTodos);

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
							<SearchAndSort
								searchQuery={searchQuery}
								sortDirection={sortDirection}
								handleSearchChange={handleSearchChange}
								handleSortChange={handleSortChange}
							/>
							{todos.length === 0 ? (
								<div style={{ marginBottom: '20px' }}>
									Сначала нужно что-то добавить
								</div>
							) : (
								<TodoContext.Provider
									value={{
										isEditing,
										editInputValue,
										toggleEditingMode,
										saveEditedTask,
										setEditInputValue,
										deleteTask,
									}}
								>
									<TodosList
										filteredAndSortedTodos={filteredAndSortedTodos}
									/>
								</TodoContext.Provider>
							)}

							<button
								className="button"
								onClick={() => setIsModalOpened(true)}
							>
								Добавить
							</button>
						</>
					)}
				</div>
			</div>
			<Modal
				addNewTask={addNewTask}
				addInputValue={addInputValue}
				changeAddInputValue={changeAddInputValue}
				isModalOpened={isModalOpened}
				setIsModalOpened={setIsModalOpened}
			/>
		</>
	);
};
