import React, { Component } from 'react';

import Item from './Item';

export default class TodoItem extends Component {
	handleChecked = id => {
		this.props.onChecked(id);
	};

	handleDeleted = id => {
		this.props.onDeleted(id);
	};

	render() {
		const { currentFilter, todos, onFiltered } = this.props;
		const filteredTodos = onFiltered(todos, currentFilter);
		return (
			<div>
				<ul>
					{this.props.todos.length === 0 ? (
						<p>No todos, add todos here</p>
					) : (
						filteredTodos.map((todo, index) => {
							return (
								<Item
									key={index}
									id={todo.id}
									text={todo.text}
									checked={todo.completed}
									currentFilter={currentFilter}
									onFiltered={onFiltered}
									onChecked={this.handleChecked}
									onDeleted={this.handleDeleted}
								/>
							);
						})
					)}
				</ul>
			</div>
		);
	}
}
