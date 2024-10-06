import styles from './searchAndSort.module.css';

import sortUpIcon from '../../assets/sort-up.svg';
import sortDownIcon from '../../assets/sort-down.svg';

export const SearchAndSort = ({
	searchQuery,
	sortDirection,
	handleSearchChange,
	handleSortChange,
}) => {
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
