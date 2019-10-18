import React, { Component } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Links from './components/Links';

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
		this.onFilterActive = this.onFilterActive.bind(this);
		this.onCurrentFilter = this.onCurrentFilter.bind(this);
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

	onFilterActive(todos, currentFilter) {
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

	onCurrentFilter(props) {
		this.setState({
			currentFilter: props
		});
	}

	render() {
		return (
			<>
				<TodoForm onTodosAdded={this.onTodosAdded} />
				<TodoList
					todos={this.state.todos}
					currentFilter={this.state.currentFilter}
					onFiltered={this.onFilterActive}
					onChecked={this.onTodosChecked}
					onDeleted={this.onTodosDeleted}
				/>
				{this.state.todos.length > 0 && (
					<Links onFiltered={this.onCurrentFilter} />
				)}
			</>
		);
	}
}
