import { useState, useEffect } from 'react';

export const useRequestSearchAndSortTodos = (todos) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
	const [sortDirection, setSortDirection] = useState(null);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearchQuery(searchQuery);
		}, 500);
		return () => {
			clearTimeout(handler);
		};
	}, [searchQuery]);

	const handleSearchChange = ({ target }) => {
		setSearchQuery(target.value);
	};

	const handleSortChange = () => {
		setSortDirection((prev) => {
			if (prev === null) return 'asc';
			return prev === 'asc' ? 'desc' : 'asc';
		});
	};

	const sortTodos = (todos) => {
		return todos.sort((a, b) => {
			const titleA = a[1]?.title?.toLowerCase(); // Получаем title
			const titleB = b[1]?.title?.toLowerCase(); // Получаем title

			if (titleA === undefined || titleB === undefined) {
				return 0;
			}
			if (sortDirection === 'asc') {
				return titleA.localeCompare(titleB);
			} else if (sortDirection === 'desc') {
				return titleB.localeCompare(titleA);
			}
			return 0;
		});
	};

	const filteredTodos =
		todos && typeof todos === 'object' && Object.keys(todos).length > 0
			? Object.entries(todos).filter(([_, { title }]) =>
					title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
				)
			: [];

	const filteredAndSortedTodos = sortTodos(filteredTodos);
	return {
		searchQuery,
		sortDirection,
		handleSearchChange,
		handleSortChange,
		filteredAndSortedTodos,
	};
};
