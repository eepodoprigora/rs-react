import styles from './app.module.css';
import { useRequestAddInputValue, useRequestGetTodos } from './hooks';

import { Modal } from './components/Modal/Modal';
import { TodosList } from './components/TodosList/TodosList';
import { FilterAndSort } from './components/FilterAndSort/FilterAndSort';

export const App = () => {
	const { todos, isLoading, refreshTodos } = useRequestGetTodos();

	const { isModalOpened, setIsModalOpened } = useRequestAddInputValue(refreshTodos);

	return (
		<>
			<div className={styles.outer}>
				<div className={styles.container}>
					<h1>Список дел</h1>
					{isLoading ? (
						<div className={styles.loader}></div>
					) : (
						<>
							{todos.length === 0 ? (
								<div style={{ marginBottom: '20px' }}>
									Сначала нужно что-то добавить
								</div>
							) : (
								<>
									<FilterAndSort />
									<TodosList />
								</>
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
				isModalOpened={isModalOpened}
				setIsModalOpened={setIsModalOpened}
				refreshTodos={refreshTodos}
			/>
		</>
	);
};
