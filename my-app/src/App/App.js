import { useState } from 'react';
import s from './App.module.css';

// декларативный

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setIsValueValid] = useState(false);

	function onInputButtonClick() {
		const promptValue = prompt();
		if (promptValue.length >= 3) {
			setValue(promptValue);
			setError('');
			setIsValueValid(true);
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValueValid(false);
		}
	}
	function onAddButtonClick() {
		if (value) {
			setValue('');
			setError('');
			const date = new Date().toLocaleString();
			const updatedList = [
				...list,
				{ id: Math.random(), value: value, date: date },
			];
			setList(updatedList);
		}
	}

	return (
		<div className={s.app}>
			<h1 className={s['page-heading']}>Ввод значения</h1>
			<p className={s['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={s['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={s.error}>{error}</div>}
			<div className={s['buttons-container']}>
				<button className={s.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={s.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={s['list-container']}>
				<h2 className={s['list-heading']}>Список:</h2>

				{list.length === 0 && (
					<p className={s['no-margin-text']}>Нет добавленных элементов</p>
				)}
				{list.length !== 0 && (
					<ul className={s.list}>
						{list.map((item) => (
							<li className={s['list-item']} key={item.id}>
								{item.date} - {item.value}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default App;
