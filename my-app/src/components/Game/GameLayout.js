import s from './game.module.css';

import { Information } from '../Information/Information';
import { Field } from '../Field/Field';

export const GameLayout = (props) => {
	return (
		<div className={s.app}>
			<h1>Крестики нолики</h1>
			<Information />
			<Field field={props.field} handleClick={props.handleClick} />
		</div>
	);
};
