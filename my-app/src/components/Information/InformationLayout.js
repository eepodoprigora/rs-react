import s from './information.module.css';

export const InformationLayout = ({ getStatus, newGame }) => {
	return (
		<>
			<h2>Статус - {getStatus()} </h2>
			<button onClick={newGame} className={s['new-game']}>
				Начать заново
			</button>
		</>
	);
};
