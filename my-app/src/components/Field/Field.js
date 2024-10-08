import { useDispatch, useSelector } from 'react-redux';

import { FieldLayout } from './FieldLayout';
import { SelectField } from '../../selectors';
import { makeMove } from '../../actions';

export const Field = () => {
	const field = useSelector(SelectField);

	const dispatch = useDispatch();

	const handleClick = (index) => {
		dispatch(makeMove(index));
	};

	return <FieldLayout field={field} handleClick={handleClick} />;
};
