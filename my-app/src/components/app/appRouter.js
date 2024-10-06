import { Routes, Route, Navigate } from 'react-router-dom';
import { TodoItemPage } from '../todoItemPage/todoItemPage';
import { NotFound } from '../notFound/notFound';
import { App } from './app';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/task/:id" element={<TodoItemPage />} />
			<Route path="/404" element={<NotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};
