import React, { Component } from 'react';

export default class Item extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.props.onChecked(this.props.id);
	}

	render() {
		return (
			<li id={this.props.id}>
				<input
					type="checkbox"
					checked={this.props.checked}
					onChange={this.handleChange}
				/>
				<span
					style={
						this.props.checked
							? { textDecoration: 'line-through' }
							: { textDecoration: 'none' }
					}
				>
					{this.props.text}
				</span>
			</li>
		);
	}
}
