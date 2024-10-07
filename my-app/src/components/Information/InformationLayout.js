import s from './information.module.css';

export const InformationLayout = ({ getStatus, handleRestart }) => {
	return (
		<>
			<h2>Статус - {getStatus()} </h2>
			<button onClick={handleRestart} className={s['new-game']}>
				Начать заново
			</button>
		</>
	);
};
