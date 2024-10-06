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
		if (sortDirection === null) {
			setSortDirection('asc');
		} else if (sortDirection === 'asc') {
			setSortDirection('desc');
		} else if (sortDirection === 'desc') {
			setSortDirection('asc');
		}
	};

	const sortTodos = (todos) => {
		if (sortDirection === 'asc') {
			return [...todos].sort((a, b) => (a.title > b.title ? 1 : -1));
		} else if (sortDirection === 'desc') {
			return [...todos].sort((a, b) => (a.title < b.title ? 1 : -1));
		} else {
			return [...todos];
		}
	};

	const filteredTodos = todos?.filter(
		(todo) =>
			todo.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) || [],
	);
	const filteredAndSortedTodos = sortTodos(filteredTodos);

	return {
		searchQuery,
		sortDirection,
		handleSearchChange,
		handleSortChange,
		filteredAndSortedTodos,
	};
};
