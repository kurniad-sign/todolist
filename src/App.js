import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TODOS = [
	{
		id: 1,
		text: 'Play with Son',
		completed: false
	},
	{
		id: 2,
		text: 'Make Cappuccino',
		completed: false
	},
	{
		id: 3,
		text: 'Go to Campus',
		completed: false
	}
];

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: TODOS
		};

		this.onTodosAdded = this.onTodosAdded.bind(this);
	}

	onTodosAdded(text) {
		const todo = {
			id: Math.floor(Math.random() * 50),
			text,
			completed: false
		};

		this.setState({ todos: [...this.state.todos, todo] });
	}

	render() {
		return (
			<>
				<TodoForm onTodosAdded={this.onTodosAdded} />
				<TodoItem todos={this.state.todos} />
			</>
		);
	}
}
