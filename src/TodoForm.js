import React, { Component } from 'react';

export default class TodoForm extends Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="Enter your list here" />
				<button type="submit">Add Todo</button>
			</form>
		);
	}
}
