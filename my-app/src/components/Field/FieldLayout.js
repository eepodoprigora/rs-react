import s from './field.module.css';

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={s['field-wrapper']}>
			{field.map((square, idx) => (
				<button
					onClick={() => handleClick(idx)}
					className={`${s.field} ${square !== '' ? s.disabled : ''}`}
					key={idx}
				>
					{square}
				</button>
			))}
		</div>
	);
};
