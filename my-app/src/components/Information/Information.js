import PropTypes from 'prop-types';

import { InformationLayout } from './InformationLayout';

export const Information = ({ newGame, getStatus }) => {
	return <InformationLayout getStatus={getStatus} newGame={newGame} />;
};

Information.propTypes = {
	newGame: PropTypes.func,
	getStatus: PropTypes.func,
};
