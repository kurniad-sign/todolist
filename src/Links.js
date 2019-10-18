import React from 'react';
import Button from './Button';

export default function Links({ onFiltered }) {
	return (
		<p>
			Show:{' '}
			<Button currentFilter="All" onFiltered={props => onFiltered(props)}>
				All
			</Button>{' '}
			<Button currentFilter="Active" onFiltered={props => onFiltered(props)}>
				Active
			</Button>{' '}
			<Button currentFilter="Completed" onFiltered={props => onFiltered(props)}>
				Completed
			</Button>
		</p>
	);
}
