import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		const { getStatus, handleRestart } = this.props;
		return (
			<>
				<h2 className="mb-5">Статус - {getStatus()} </h2>
				<button
					onClick={handleRestart}
					className="mb-5 border-0 p-5 text-2xl bg-[#6FD7FD] hover:bg-[#5CC1E8] transition-colors duration-300"
				>
					Начать заново
				</button>
			</>
		);
	}
}
