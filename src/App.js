import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import Button from './Button';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentFilter: 'All',
			todos: []
		};

		this.onTodosAdded = this.onTodosAdded.bind(this);
		this.onTodosChecked = this.onTodosChecked.bind(this);
		this.onTodosDeleted = this.onTodosDeleted.bind(this);
		this.filterActive = this.filterActive.bind(this);
		this.onFiltered = this.onFiltered.bind(this);
	}

	onTodosAdded(text) {
		const todo = {
			id: this.state.todos.length + 1,
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

	filterActive(todos, currentFilter) {
		const activeTodos = todos.filter(todo => {
			switch (currentFilter) {
				case 'All':
					return todo;
				case 'Active':
					return !todo.completed;
				case 'Completed':
					return todo.completed;
				default:
					return todo;
			}
		});
		return activeTodos;
	}

	onFiltered(props) {
		this.setState({
			currentFilter: props
		});
	}

	render() {
		return (
			<>
				<TodoForm onTodosAdded={this.onTodosAdded} />
				<TodoItem
					todos={this.state.todos}
					currentFilter={this.state.currentFilter}
					onFiltered={this.filterActive}
					onChecked={this.onTodosChecked}
					onDeleted={this.onTodosDeleted}
				/>
				<p>
					Show:{' '}
					<Button currentFilter="All" onFiltered={this.onFiltered}>
						All
					</Button>{' '}
					<Button currentFilter="Active" onFiltered={this.onFiltered}>
						Active
					</Button>{' '}
					<Button currentFilter="Completed" onFiltered={this.onFiltered}>
						Completed
					</Button>
				</p>
			</>
		);
	}
}
