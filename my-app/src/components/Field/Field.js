import PropTypes from 'prop-types';

import { FieldLayout } from './FieldLayout';

export const Field = ({ field, handleClick }) => {
	return <FieldLayout field={field} handleClick={handleClick} />;
};

Field.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
