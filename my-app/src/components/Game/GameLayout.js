import Information from '../Information/Information';
import Field from '../Field/Field';
import { Component } from 'react';

export class GameLayout extends Component {
	render() {
		return (
			<div className="flex flex-col items-center pt-12">
				<h1 className="text-xl font-semibold mb-2">Крестики нолики</h1>
				<Information />
				<Field />
			</div>
		);
	}
}
