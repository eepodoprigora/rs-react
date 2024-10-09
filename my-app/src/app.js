import { Modal, SearchAndSort, TodosList } from './components';
import { selectIsLoading, selectTodos } from './selectors';
import { toggleModalVisibity } from './actions';
import { getTodos } from './reducers';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import styles from './app.module.css';

export const App = () => {
	const isLoading = useSelector(selectIsLoading);
	const todos = useSelector(selectTodos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	const onModalOpen = () => {
		dispatch(toggleModalVisibity(true));
	};

	return (
		<>
			<div className={styles.outer}>
				<div className={styles.container}>
					<h1>Список дел</h1>
					{isLoading ? (
						<div className={styles.loader}></div>
					) : (
						<>
							<SearchAndSort />
							{todos.length === 0 ? (
								<div style={{ marginBottom: '20px' }}>
									Сначала нужно что-то добавить
								</div>
							) : (
								<TodosList />
							)}

							<button className="button" onClick={onModalOpen}>
								Добавить
							</button>
						</>
					)}
				</div>
			</div>
			<Modal />
		</>
	);
};
