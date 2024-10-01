import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	const firstStep = activeIndex === 0;
	const lastStep = activeIndex === steps.length - 1;

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	function nextStep() {
		setActiveIndex((prev) => prev + 1);
	}
	function prevStep() {
		setActiveIndex((prev) => prev - 1);
	}

	function startOver() {
		setActiveIndex(0);
	}

	function stepClick(index) {
		setActiveIndex(index);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div key={steps[activeIndex].id} className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, i) => (
							<li
								onClick={() => stepClick(i)}
								key={step.id}
								className={`${styles['steps-item']}${activeIndex === i ? ' ' + styles.active : ''}${activeIndex > i ? ' ' + styles.done : ''}`}
							>
								<button className={styles['steps-item-button']}>
									{i + 1}
								</button>
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
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
