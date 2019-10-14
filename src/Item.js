import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		return (
			<div>
				<li key={this.props.id}>
					<input type="checkbox" checked={this.props.completed} />
					<span>{this.props.text}</span>
				</li>
			</div>
		);
	}
}
