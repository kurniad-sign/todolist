import React, { Component } from 'react';

export default class Item extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChange() {
		this.props.onChecked(this.props.id);
	}

	handleDelete() {
		this.props.onDeleted(this.props.id);
	}

	render() {
		const { currentFilter } = this.props;
		if (currentFilter === 'Completed' || currentFilter === 'Active') {
			return (
				<li>
					<span>{this.props.text}</span>
				</li>
			);
		}

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
				<button onClick={this.handleDelete}>Delete</button>
			</li>
		);
	}
}
