import { Routes, Route, Navigate } from 'react-router-dom';
import { Task } from './components/Task/Task';
import { NotFound } from './components/NotFound/NotFound';
import { App } from './app';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/task/:id" element={<Task />} />
			<Route path="/404" element={<NotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};
