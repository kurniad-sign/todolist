import React, { Component } from 'react';

export default class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onTodosAdded(this.state.value);
		this.setState({ value: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Enter your list here"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button type="submit">Add Todo</button>
			</form>
		);
	}
}
