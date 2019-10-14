import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};

		this.onTodosAdded = this.onTodosAdded.bind(this);
		this.onTodosChecked = this.onTodosChecked.bind(this);
		this.onTodosDeleted = this.onTodosDeleted.bind(this);
	}

	onTodosAdded(text) {
		const todo = {
			id: Math.floor(Math.random() * 50),
			text,
			completed: false
		};

		this.setState({ todos: [...this.state.todos, todo] });
	}

	onTodosChecked(id) {
		const checkedTodos = this.state.todos.map(todo =>
			todo.id === id
				? { id: todo.id, text: todo.text, completed: !todo.completed }
				: todo
		);
		this.setState({
			todos: checkedTodos
		});
	}

	onTodosDeleted(id) {
		const deletedTodos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({
			todos: deletedTodos
		});
	}

	render() {
		return (
			<>
				<TodoForm onTodosAdded={this.onTodosAdded} />
				<TodoItem
					todos={this.state.todos}
					onChecked={this.onTodosChecked}
					onDeleted={this.onTodosDeleted}
				/>
			</>
		);
	}
}
