import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { sortTodos, filterTodos } from '../../actions';
import { selectSortDirection, selectSearchFilter } from '../../selectors';

import styles from './searchAndSort.module.css';

import sortUpIcon from '../../assets/sort-up.svg';
import sortDownIcon from '../../assets/sort-down.svg';

export const SearchAndSort = () => {
	const sortDirection = useSelector(selectSortDirection);
	const searchQuery = useSelector(selectSearchFilter);

	const [inputValue, setInputValue] = useState(searchQuery);
	const dispatch = useDispatch();

	const onSortTodos = () => {
		dispatch(sortTodos(sortDirection === 'asc' ? 'desc' : 'asc'));
	};
	const onSearchChange = ({ target }) => {
		setInputValue(target.value);
		dispatch(filterTodos(target.value));
	};

	return (
		<div className="fl">
			<input
				type="text"
				placeholder="Поиск по делам..."
				value={inputValue}
				onChange={onSearchChange}
				className={styles.search}
			/>
			<button
				className={`${styles['icon-wrapper']} ${styles['sort-icon']}`}
				onClick={onSortTodos}
			>
				<img
					className={styles.icon}
					src={
						sortDirection === null || sortDirection === 'asc'
							? sortUpIcon
							: sortDownIcon
					}
					alt="Сортировка"
				/>
			</button>
		</div>
	);
};
