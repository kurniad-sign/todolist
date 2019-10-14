import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		return (
			<li id={this.props.id}>
				<input type="checkbox" checked={this.props.completed} />
				<span>{this.props.text}</span>
			</li>
		);
	}
}
