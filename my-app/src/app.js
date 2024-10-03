import { useState, useEffect } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.container}>
			<h1>Список дел</h1>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul>
					{todos.map(({ id, title }) => (
						<li className={styles['list-item']} key={id}>
							{title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
