import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		return (
			<a
				href="#"
				onClick={e => {
					e.preventDefault();
					this.props.onFiltered(this.props.currentFilter);
				}}
			>
				{this.props.children}
			</a>
		);
	}
}
