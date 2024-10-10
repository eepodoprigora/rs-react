import { Component } from 'react';

export class FieldLayout extends Component {
	render() {
		const { field, handleClick } = this.props;
		return (
			<div className="grid grid-cols-3 grid-rows-3 w-[450px] h-[450px]">
				{field.map((square, idx) => (
					<button
						onClick={() => handleClick(idx)}
						className={`bg-[#f0f0eb]  w-[150px] h-[150px] border border-solid
							 border-neutral-400 hover:bg-[#e6e6e1]
							 transition-colors text-3xl
							 ${square !== '' ? 'bg-[#d8d8d8]' : ''}`}
						key={idx}
					>
						{square}
					</button>
				))}
			</div>
		);
	}
}
