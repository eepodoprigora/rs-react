import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleModalVisibity } from '../../actions';
import { selectIsModalOpened } from '../../selectors/select-is-modal-opened';

import styles from './modal.module.css';

export const Modal = () => {
	const [addInputValue, setAddInputValue] = useState('');

	const isModalOpened = useSelector(selectIsModalOpened);

	const dispatch = useDispatch();

	const changeAddInputValue = ({ target }) => {
		setAddInputValue(target.value);
	};

	const onAddTodo = () => {
		dispatch(addTodo(addInputValue));
		setAddInputValue('');
		onModalClose();
	};
	const onModalClose = () => {
		dispatch(toggleModalVisibity(false));
	};

	return (
		<div className={`${styles.modal} ${isModalOpened ? styles.opened : ''}`}>
			<div className={styles['modal-overlay']} onClick={onModalClose}></div>
			<div className={styles['modal-container']}>
				<button className={styles['modal-close']} onClick={onModalClose}></button>
				<h2>Новое дело</h2>
				<div className={styles['add-task']}>
					<textarea
						value={addInputValue}
						onChange={changeAddInputValue}
						className={styles['modal-input']}
					/>
					<button
						style={{ width: '100%' }}
						className="button"
						disabled={!addInputValue.length}
						onClick={onAddTodo}
					>
						Добавить
					</button>
				</div>
			</div>
		</div>
	);
};
