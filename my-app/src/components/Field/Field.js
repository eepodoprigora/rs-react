import { Component } from 'react';
import { connect } from 'react-redux';

import { FieldLayout } from './FieldLayout';
import { selectField } from '../../selectors';
import { makeMove } from '../../actions';

class Field extends Component {
	handleClick = (index) => {
		this.props.makeMove(index);
	};
	render() {
		const { field } = this.props;
		return <FieldLayout field={field} handleClick={this.handleClick} />;
	}
}

const mapStateToProps = (state) => ({
	field: selectField(state),
});

const mapDispatchToProps = (dispatch) => ({
	makeMove: (index) => dispatch(makeMove(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
