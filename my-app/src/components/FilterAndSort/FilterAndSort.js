import sortUpIcon from '../../assets/sort-up.svg';
import sortDownIcon from '../../assets/sort-down.svg';
import { useRequestGetTodos, useRequestSearchAndSortTodos } from '../../hooks';

import styles from './filterAndSort.module.css';

export const FilterAndSort = () => {
	const { todos } = useRequestGetTodos();
	const { searchQuery, sortDirection, handleSearchChange, handleSortChange } =
		useRequestSearchAndSortTodos(todos);

	return (
		<div className="fl">
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
					src={sortDirection === (null || 'asc') ? sortUpIcon : sortDownIcon}
					alt="Сортировка"
				/>
			</button>
		</div>
	);
};
