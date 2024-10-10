import { Component } from 'react';
import { connect } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';
import { restartGame } from '../../actions';

class Information extends Component {
	getStatus = () => {
		const { isGameEnded, isDraw, currentPlayer } = this.props;

		if (isGameEnded) {
			if (isDraw) {
				return 'Ничья';
			} else {
				return `Победитель: ${currentPlayer === 'X' ? '0' : 'X'}`;
			}
		} else {
			return `Ходит ${currentPlayer}`;
		}
	};

	handleRestart = () => {
		this.props.restartGame();
	};

	render() {
		return (
			<InformationLayout
				handleRestart={this.handleRestart}
				getStatus={this.getStatus}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
	isDraw: selectIsDraw(state),
});

const mapDispatchToProps = (dispatch) => ({
	restartGame: () => dispatch(restartGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Information);
