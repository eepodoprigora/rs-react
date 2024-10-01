import { useState } from 'react';
import styles from './app.module.css';

const nums = [
	{
		id: '001',
		value: '1',
	},
	{
		id: '002',
		value: '2',
	},
	{
		id: '003',
		value: '3',
	},
	{
		id: '004',
		value: '4',
	},
	{
		id: '005',
		value: '5',
	},
	{
		id: '006',
		value: '6',
	},
	{
		id: '007',
		value: '7',
	},
	{
		id: '008',
		value: '8',
	},
	{
		id: '009',
		value: '9',
	},
	{
		id: '000',
		value: '0',
	},
];

const operators = ['C', '+', '-', '='];

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');
	const [done, setDone] = useState(false);

	function clickNum(num) {
		if (operator === '') {
			setOperand1((operand1) => operand1 + num);
		} else {
			setOperand2((operand2) => operand2 + num);
		}
		if (setDone) setDone(false);
	}

	function clickOperand(item) {
		if (item === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setResult('');
			if (done) setDone(false);
		} else if (item === '+') {
			setOperator('+');
			if (done) setDone(false);
			if (result) {
				setOperand1(result);
				setOperand2('');
				setResult('');
			}
		} else if (item === '-') {
			setOperator('-');
			if (done) setDone(false);
			if (result) {
				setOperand1(result);
				setOperand2('');
				setResult('');
			}
		} else if (item === '=') {
			setDone(true);
			const res =
				operator === '+'
					? `${Number(operand1) + Number(operand2)}`
					: `${Number(operand1) - Number(operand2)}`;
			setResult(res);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles['inner-container']}>
				<div className={`${styles.output} ${done ? styles.done : ''}`}>
					{result ? result : operand1 + operator + operand2}
				</div>
				<div className={styles['buttons-container']}>
					<div className={styles.buttons}>
						{nums.map((num) => (
							<button
								onClick={() => clickNum(num.value)}
								className={styles['button-num']}
								key={num.id}
							>
								{num.value}
							</button>
						))}
					</div>
					<div className={styles.operators}>
						{operators.map((operator) => (
							<button
								onClick={() => clickOperand(operator)}
								key={operator}
								className={`${styles['button-num']} ${styles['button-num--operator']}`}
							>
								{operator}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
