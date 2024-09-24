import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// декларативный
const year = new Date().getFullYear();

export const App = () => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement('header', { className: 'App-header' }, [
			createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
				key: 1,
			}),
			createElement(
				'p',
				{ key: 2 },
				'Edit ',
				createElement('code', { key: 3 }, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
					key: 4,
				},
				'Learn React',
			),
			createElement('div', { key: 5 }, year),
		]),
	);
};

export default App;
