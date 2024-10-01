import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const [firstStep, setFirstStep] = useState(true);
	const [lastStep, setLastStep] = useState(false);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	function nextStep() {
		setActiveIndex(activeIndex + 1);
		if (activeIndex + 1 === steps.length - 1) {
			setLastStep(true);
		}
		if (activeIndex + 1 !== 0) {
			setFirstStep(false);
		}
	}
	function prevStep() {
		setActiveIndex(activeIndex - 1);
		if (activeIndex === 1) {
			setFirstStep(true);
		}
	}

	function startOver() {
		setLastStep(false);
		setFirstStep(true);
		setActiveIndex(0);
	}

	function stepClick(index) {
		setActiveIndex(index);
		if (index === steps.length - 1) {
			setLastStep(true);
			setFirstStep(false);
		}
		if (index === 0) {
			setLastStep(false);
			setFirstStep(true);
		}
		if (index !== 0 && index !== steps.length - 1) {
			setLastStep(false);
			setFirstStep(false);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div key={steps[activeIndex].id} className={styles['steps-content']}>
						{steps[activeIndex].content}
						{/* Для получения активного контента использйте steps и activeIndex */}
					</div>

					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{steps.map((step, i) => (
							<li
								onClick={() => stepClick(i)}
								key={step.id}
								className={`${styles['steps-item']}${activeIndex === i ? ' ' + styles.active : ''}${activeIndex > i ? ' ' + styles.done : ''}`}
							>
								{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
								<button className={styles['steps-item-button']}>
									{i + 1}
								</button>
								{/* При клике на кнопку установка выбранного шага в качестве активного */}
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							onClick={prevStep}
							className={styles.button}
							disabled={firstStep}
						>
							Назад
						</button>
						<button
							onClick={lastStep ? startOver : nextStep}
							className={styles.button}
						>
							{lastStep ? 'Начать сначала' : 'Далее'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
